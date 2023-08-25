import { Produto } from "@/stores/useCartStore"
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
  product: Produto
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
                  value={product.nome}
                  readOnly
                />
                <Input
                  className="col-span-3"
                  label="Preço"
                  value={`R$ ${product.preco.toFixed(2)}`}
                  readOnly
                />
                <Input
                  className="col-span-6"
                  label="Sabores"
                  value={product.sabores?.map((sabor) => sabor).join(", ")}
                  readOnly
                />
                <Textarea
                  className="col-span-6"
                  label="Descrição"
                  value={product.descricao}
                  readOnly
                />

                <div className="col-span-6">
                  {product.fotos ? (
                    <Swiper
                      slidesPerView={1.5}
                      pagination
                      grabCursor
                      mousewheel
                      autoplay
                    >
                      {product.fotos?.map((image) => (
                        <SwiperSlide key={image}>
                          <Image
                            className=""
                            alt="Foto do produto"
                            width={250}
                            height={250}
                            src={image}
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
