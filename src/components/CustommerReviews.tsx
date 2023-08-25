"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { MdStar, MdVerified } from "react-icons/md"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Swiper, SwiperSlide } from "swiper/react"

interface ICustommerReviewProps {
  stars: number
  review: string
  author: string
  verified: boolean
}

export const CustommerReviews = ({
  reviews,
}: {
  reviews: ICustommerReviewProps[]
}) => {
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0.85, 1], [0, 1])
  const translateY = useTransform(scrollYProgress, [0.85, 1], ["-100%", "0%"])

  return (
    <motion.section
      style={{ translateY, opacity }}
      className="grid grid-cols-3 col-span-3 gap-14 text-sm mb-16  "
    >
      {reviews.map((review) => (
        <div
          className="hidden lg:flex flex-col items-center "
          key={review.author}
        >
          <div className="flex text-xl my-2 ">
            {Array.from({ length: review.stars }).map((_, index) => (
              <MdStar key={index} fill="#FFB521" />
            ))}
          </div>
          <p className="text-center p-3 font-light ">{review.review}</p>
          <div className="flex items-center gap-1">
            {review.verified && <MdVerified fill="#DC1E1D" />}
            <span className="font-bold">
              {review.author} - consumidor verificado
            </span>
          </div>
        </div>
      ))}
      <div className="mr-0 col-span-3 lg:hidden">
        <Swiper
          slidesPerView={1.4}
          pagination
          grabCursor
          mousewheel
          autoplay
          spaceBetween={8}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.author} className=" w-9">
              <div className="flex flex-col items-center ">
                <div className="flex text-xl my-2 ">
                  {Array.from({ length: review.stars }).map((_, index) => (
                    <MdStar key={index} fill="#FFB521" />
                  ))}
                </div>
                <p className="text-center p-3 font-light ">{review.review}</p>
                <div className="flex items-center gap-1">
                  {review.verified && <MdVerified fill="#DC1E1D" />}
                  <span className="font-bold">
                    {review.author} - consumidor verificado
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  )
}
