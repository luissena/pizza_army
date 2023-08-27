import { Product } from "@/services/prisma"
import { formatCurrency } from "@/utils/formatCurrency"
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react"
import Image from "next/image"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Swiper, SwiperSlide } from "swiper/react"

export const ModalViewProduct = ({
  isOpen,
  onOpenChange,
  product,
}: {
  isOpen: boolean
  onOpenChange: () => void
  product: Product | undefined
}) => {
  return (
    <Modal className=" " isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Visualizar produto
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-6 gap-3">
                <Input
                  className="col-span-3"
                  label="Nome do produto"
                  value={product?.name}
                  readOnly
                />
                <Input
                  className="col-span-3"
                  label="Preço"
                  value={formatCurrency(product?.price!)}
                  readOnly
                />

                <Textarea
                  className="col-span-6"
                  label="Descrição"
                  value={product?.description}
                  readOnly
                />

                <div className="col-span-6">
                  {product?.photos ? (
                    <Swiper
                      slidesPerView={1.5}
                      pagination
                      grabCursor
                      mousewheel
                      autoplay
                    >
                      {product?.photos?.map((photo) => (
                        <SwiperSlide key={photo.id}>
                          <Image
                            className=""
                            alt="Foto do produto"
                            width={250}
                            height={250}
                            src={`https://naujadmfrtsfswtpbiyx.supabase.co/storage/v1/object/public/products/${photo.url}`}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Fechar
              </Button>
              <Button color="primary" onPress={onClose}>
                Editar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
