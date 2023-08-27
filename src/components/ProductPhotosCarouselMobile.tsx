"use client"

import Image from "next/image"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Swiper, SwiperSlide } from "swiper/react"

export const ProductPhotosCarouselMobile = ({
  productImages,
}: {
  productImages: { id: string; url: string }[]
}) => {
  return (
    <div className="mr-0 col-span-3 lg:hidden">
      <Swiper
        slidesPerView={1.4}
        pagination
        grabCursor
        mousewheel
        autoplay
        spaceBetween={8}
      >
        {productImages.map((image) => (
          <SwiperSlide key={image.id} className="bg-red-200 w-9">
            <Image
              className=""
              alt="Foto do produto"
              width={720}
              height={720}
              src={`https://naujadmfrtsfswtpbiyx.supabase.co/storage/v1/object/public/products/${image.url}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
