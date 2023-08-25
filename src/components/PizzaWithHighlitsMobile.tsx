"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { HighlitPizza } from "./HighlitPizza"

export const PizzaWithHighlitsMobile = () => {
  const highlights = [
    "Queijos importados",
    "Catupiry de primeira qualidade",
    "Bastante recheio",
    "Forno à lenha",
  ]
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])
  const translateY = useTransform(scrollYProgress, [0.5, 0.8], ["-120%", "0%"])
  const translateX = useTransform(scrollYProgress, [0.5, 0.8], ["-120%", "0%"])

  return (
    <div className="col-span-3 lg:hidden">
      <div className=" col-span-3 grid grid-cols-12   items-center ">
        <motion.figure className="invsible col-span-12 mx-auto ">
          <Image
            className="invisible"
            src="/images/pizza.png"
            width={234}
            height={224}
            alt="pizza"
          />
        </motion.figure>

        <motion.div
          style={{ translateY, opacity }}
          className="col-span-12 flex flex-col gap-1 my-5 "
        >
          <h2 className="text-center font-['Bebas_Neue'] tracking-[1.92px] text-[28px]">
            Descubra o sabor da tradição
          </h2>
          <p className="text-center font-light">
            Com receitas transmitidas à gerações, ingredientes selecionados e
            forno a lenha, garantimos uma experiência gastronômica memóravel
          </p>
        </motion.div>

        <motion.div style={{ translateX, opacity }} className="col-span-12">
          <ul>
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-center gap-2 border-b">
                <div className="pl-5">
                  <HighlitPizza />
                </div>
                <span className="font-bold text-lg  py-5 ml-5">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
