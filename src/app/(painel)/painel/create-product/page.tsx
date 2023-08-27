"use client"
import { supabase } from "@/utils/supabase"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input, Spinner, Textarea } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { useForm } from "react-hook-form"
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Swiper, SwiperSlide } from "swiper/react"

import { z } from "zod"

export default function page() {
  const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([])
  const [loadingPhotos, setLoadingPhotos] = useState(false)

  const createProductFormSchema = z.object({
    name: z.string().nonempty("Nome do produto é obrigatório"),
    price: z.coerce
      .number()
      .nonnegative("Preço não pode ser negativo")
      .min(1, "Preço é obrigatório"),
    description: z.string().nonempty("Descrição é obrigatória"),
    photos: z.array(z.object({ url: z.string() })),
  })

  type CreateProductFormData = z.infer<typeof createProductFormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductFormSchema),
  })

  const criarFotos = async (e: FormEvent) => {
    const element = document.createElement("input")
    element.type = "file"
    element.multiple = true

    // const _register = register("photos")

    // for (const [key, value] of Object.entries(_register)) {
    //   element.setAttribute(key, value)
    // }

    element.addEventListener("change", async (event) => {
      const files = element.files

      if (files) {
        setLoadingPhotos(true)
        const uploadedFilePromises = []

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

  const router = useRouter()

  const createProduct = async (data: any) => {
    if (!uploadedImageUrls.length) {
      alert("Adicione fotos ao produto")
      return
    }
    data.photos = uploadedImageUrls.map((url) => ({ url }))

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (response.ok) {
      alert("Produto criado com sucesso!")
      router.push("/painel")
    }
  }

  return (
    <section className="mx-5">
      <Link
        className="flex items-center gap-2 mb-5 text-xl p-2 border hover:shadow w-1/12 rounded-lg"
        href="/painel"
      >
        <MdOutlineArrowBackIosNew /> <span>Voltar</span>
      </Link>
      <h1 className=" text-2xl font-bold  my-2">Criar novo produto</h1>
      <form
        onSubmit={handleSubmit(createProduct)}
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
            type="number"
            label="Preço"
          />
          {errors.price && (
            <span className="text-xs text-red-500">
              {errors.price?.message}
            </span>
          )}
        </div>

        <div className="col-span-6">
          <Textarea {...register("description")} label="Descrição" />
          {errors.price && (
            <span className="text-xs text-red-500">
              {errors.price?.message}
            </span>
          )}
        </div>

        <Button
          onClick={criarFotos}
          className="col-span-6 lg:w-1/2 lg:mr-auto lg:col-span-3 font-['Bebas_Neue'] text-xl bg-[#FFB521]  "
        >
          {loadingPhotos ? (
            <Spinner />
          ) : uploadedImageUrls ? (
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
    </section>
  )
}
