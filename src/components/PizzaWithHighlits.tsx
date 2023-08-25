"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { HighlitPizza } from "./HighlitPizza"
export const PizzaWithHighlits = () => {
  const highlights = [
    "Queijos importados",
    "Catupiry de primeira qualidade",
    "Bastante recheio",
    "Forno à lenha",
  ]

  const { scrollY, scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0.79, 0.9], [0, 1])
  const scale = useTransform(scrollY, [950, 990], [0, 1])
  const translateY = useTransform(scrollYProgress, [0.79, 0.9], ["0%", "75vh"])
  const translateX = useTransform(scrollYProgress, [0.79, 0.9], ["150%", "0%"])
  const translateReverseX = useTransform(
    scrollYProgress,
    [0.79, 0.9],
    ["-150%", "0%"]
  )

  return (
    <div className="hidden col-span-3 lg:grid grid-cols-12   items-center ">
      <motion.div
        className="col-span-4 flex flex-col gap-1 z-0"
        style={{ translateX, opacity }}
      >
        <h2 className="font-['Bebas_Neue'] tracking-[1.92px] text-5xl">
          Descubra o sabor da tradição
        </h2>
        <p className="font-light">
          Com receitas transmitidas à gerações, ingredientes selecionados e
          forno a lenha, garantimos uma experiência gastronômica memóravel
        </p>
      </motion.div>
      <motion.figure
        className="invisible col-span-4 mx-auto mt-24 "
        style={{ scale }}
      >
        <Image src="/images/pizza.png" width={408} height={388} alt="pizza" />
      </motion.figure>

      <motion.div
        className="col-span-4 z-0"
        style={{ translateX: translateReverseX, opacity }}
      >
        <ul>
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center gap-2 border-b">
              <div className="pl-5">
                <HighlitPizza />
              </div>
              <span className="font-bold text-lg  py-5 ml-5">{highlight}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
