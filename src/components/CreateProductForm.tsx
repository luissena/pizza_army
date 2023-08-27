"use client"

import { supabase } from "@/lib/supabase"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input, Spinner, Textarea } from "@nextui-org/react"
import Image from "next/image"
import { FormEvent, useState } from "react"
import { useForm } from "react-hook-form"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Swiper, SwiperSlide } from "swiper/react"
import { z } from "zod"

export const CreateProductForm = ({
  create,
}: {
  create: (data: any) => Promise<void>
}) => {
  const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([])
  const [loadingPhotos, setLoadingPhotos] = useState(false)

  const createProductFormSchema = z.object({
    name: z.string().nonempty("Nome do produto é obrigatório"),
    price: z.coerce
      .number({ invalid_type_error: "Preço deve ser um número" })
      .nonnegative("Preço não pode ser negativo")
      .min(1, "Preço é obrigatório"),
    description: z.string().nonempty("Descrição é obrigatória"),
  })

  type CreateProductFormData = z.infer<typeof createProductFormSchema>

  const criarFotos = async (e: FormEvent) => {
    const element = document.createElement("input")
    element.type = "file"
    element.multiple = true

    element.addEventListener("change", async (event) => {
      const files = element.files

      if (files) {
        const uploadedFilePromises = []

        if (files.length > 4) return alert("Você só pode adicionar até 4 fotos")
        if (files.length < 4)
          return alert("Você precisa adicionar pelo menos 4 fotos")

        setLoadingPhotos(true)
        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          const filename = `${file.name}-${Date.now()}`

          uploadedFilePromises.push(
            supabase.storage.from("products").upload(filename, file, {
              cacheControl: "3600",
              upsert: false,
            })
          )
        }

        const uploadedFiles = await Promise.all(uploadedFilePromises)
        setLoadingPhotos(false)
        console.log(uploadedFiles)

        const uploadedFileUrls = []

        for (let i = 0; i < uploadedFiles.length; i++) {
          const uploadedFile = uploadedFiles[i]
          if (!uploadedFile.error) {
            const imageUrl = uploadedFile.data.path
            uploadedFileUrls.push(imageUrl)
          }
        }
        setUploadedImageUrls(uploadedFileUrls)
      }
    })

    element.click()
    e.preventDefault()
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductFormSchema),
  })

  function handleFormSubmit(p: CreateProductFormData) {
    if (!uploadedImageUrls.length) return alert("Adicione fotos do produto")

    create({
      name: p.name,
      price: p.price,
      description: p.description,
      photos: uploadedImageUrls.map((url) => ({ url })),
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="grid grid-cols-6 gap-5 "
    >
      <div className="col-span-6 lg:col-span-4">
        <Input {...register("name")} className="" label="Nome do produto" />
        {errors.name && (
          <span className="text-xs text-red-500">{errors.name?.message}</span>
        )}
      </div>

      <div className="col-span-6 lg:col-span-2">
        <Input
          {...register("price")}
          startContent={<span>R$</span>}
          label="Preço"
        />
        {errors.price && (
          <span className="text-xs text-red-500">{errors.price?.message}</span>
        )}
      </div>

      <div className="col-span-6">
        <Textarea {...register("description")} label="Descrição" />
        {errors.description && (
          <span className="text-xs text-red-500">
            {errors.description?.message}
          </span>
        )}
      </div>

      <Button
        onClick={criarFotos}
        className="col-span-6 lg:w-1/2 lg:mr-auto lg:col-span-3 font-['Bebas_Neue'] text-xl bg-[#FFB521]  "
      >
        {loadingPhotos ? (
          <Spinner />
        ) : uploadedImageUrls.length ? (
          "Alterar fotos"
        ) : (
          "Adicionar fotos"
        )}
      </Button>

      <Button
        type="submit"
        className="col-span-6 lg:w-1/2 lg:ml-auto lg:col-span-3 font-['Bebas_Neue'] text-xl bg-green-500  "
      >
        Criar produto
      </Button>

      {uploadedImageUrls && (
        <div className="col-span-6 grid grid-cols-4 gap-5">
          {uploadedImageUrls.map((url) => (
            <Image
              key={url}
              className="hidden lg:block w-full h-40 object-cover"
              width={720}
              height={720}
              src={`https://naujadmfrtsfswtpbiyx.supabase.co/storage/v1/object/public/products/${url}`}
              alt="Foto do produto"
            />
          ))}

          <div className="col-span-4 lg:hidden">
            <Swiper
              slidesPerView={1.4}
              pagination
              grabCursor
              mousewheel
              autoplay
              spaceBetween={8}
              className="col-span-6 lg:hidden"
            >
              {uploadedImageUrls.map((image) => (
                <SwiperSlide key={image}>
                  <Image
                    className=""
                    alt="Foto do produto"
                    width={720}
                    height={720}
                    src={`https://naujadmfrtsfswtpbiyx.supabase.co/storage/v1/object/public/products/${image}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </form>
  )
}
