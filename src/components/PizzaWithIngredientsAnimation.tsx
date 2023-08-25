"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
export const PizzaWithIngredientsAnimation = () => {
  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [700, 1000], [1, 0.5])
  const pizzaScale = useTransform(scrollY, [700, 1000], [1, 0.9])

  const opacity = useTransform(scrollY, [700, 1000], [1, 0])
  const rotate = useTransform(scrollY, [700, 1000], [-45, 0])
  const topTranslateY = useTransform(scrollY, [700, 1000], ["0%", "650px"])
  const botTranslateY = useTransform(scrollY, [700, 1000], ["0%", "500px"])
  const pizzaTranslateY = useTransform(scrollY, [700, 1000], ["0%", "155%"])
  const translateX = useTransform(scrollY, [700, 1000], ["0%", "400px"])
  const reverseTranslateX = useTransform(scrollY, [700, 1000], ["0%", "-400px"])

  return (
    <div className="hidden col-span-3 lg:flex relative  ">
      <motion.picture
        style={{ translateX, translateY: topTranslateY, opacity }}
        className="absolute  left-10 "
      >
        <Image src="/images/queijo.png" width={241} height={138} alt="pizza" />
      </motion.picture>

      <motion.picture
        style={{ translateX, translateY: botTranslateY, opacity }}
        className="absolute  bottom-52 -left-10 "
      >
        <Image
          src="/images/tomate_blur.png"
          width={142}
          height={142}
          alt="pizza"
        />
      </motion.picture>

      <motion.picture
        style={{ translateX, translateY: botTranslateY, opacity }}
        className="absolute bottom-52 left-20"
      >
        <Image
          src="/images/peperoni.png"
          width={108}
          height={108}
          alt="pizza"
        />
      </motion.picture>

      <motion.picture
        style={{ translateX, translateY: topTranslateY, opacity }}
        className="absolute  bottom-32 left-14"
      >
        <Image
          src="/images/coentro_esquerda.png"
          width={47}
          height={47}
          alt="pizza"
        />
      </motion.picture>

      <motion.picture
        style={{ translateX, translateY: topTranslateY, opacity }}
        className="absolute  bottom-52 left-60"
      >
        <Image src="/images/pimenta.png" width={125} height={157} alt="pizza" />
      </motion.picture>

      <motion.figure
        style={{ rotate, translateY: pizzaTranslateY, scale: pizzaScale }}
        className="mx-auto   my-24 z-10"
      >
        <Image src="/images/pizza.png" width={408} height={388} alt="pizza" />
      </motion.figure>

      <motion.figure
        style={{ translateX, translateY: botTranslateY, opacity, scale }}
        className="absolute  bottom-32 left-56"
      >
        <Image src="/images/nozes.png" width={47} height={47} alt="pizza" />
      </motion.figure>

      <motion.figure
        style={{
          translateX: reverseTranslateX,
          translateY: botTranslateY,
          opacity,
          scale,
        }}
        className="absolute  bottom-0 right-28 "
      >
        <Image src="/images/cebola.png" width={203} height={189} alt="pizza" />
      </motion.figure>

      <motion.figure
        style={{
          translateX: reverseTranslateX,
          translateY: botTranslateY,
          opacity,
          scale,
        }}
        className="absolute  bottom-28 -right-16 z-10"
      >
        {" "}
        <Image src="/images/tomate.png" width={177} height={177} alt="pizza" />
      </motion.figure>

      <motion.figure
        style={{
          translateX: reverseTranslateX,
          translateY: botTranslateY,
          opacity,
          scale,
        }}
        className="absolute  bottom-0 right-28 "
      >
        <Image
          className="absolute  bottom-24 right-5 z-0"
          src="/images/alho_poro.png"
          width={128}
          height={85}
          alt="pizza"
        />
      </motion.figure>

      <motion.figure
        style={{
          translateX: reverseTranslateX,
          translateY: botTranslateY,
          opacity,
          scale,
        }}
        className="absolute  top-40 right-24 "
      >
        <Image
          src="/images/manjericao.png"
          width={185}
          height={208}
          alt="pizza"
        />
      </motion.figure>

      <motion.figure
        style={{
          translateX: reverseTranslateX,
          translateY: botTranslateY,
          opacity,
          scale,
        }}
        className="absolute  top-40 right-0 "
      >
        <Image src="/images/coentro.png" width={47} height={47} alt="pizza" />
      </motion.figure>

      <motion.figure
        style={{
          translateX: reverseTranslateX,
          translateY: topTranslateY,
          opacity,
          scale,
        }}
        className="absolute  top-10 right-60 "
      >
        <Image
          src="/images/verde_topo.png"
          width={92}
          height={92}
          alt="pizza"
        />
      </motion.figure>
      <motion.figure
        style={{
          translateX: reverseTranslateX,
          translateY: topTranslateY,
          opacity,
          scale,
        }}
        className="absolute  top-0 right-0 "
      >
        <Image
          src="/images/azeitonas.png"
          width={119}
          height={91}
          alt="pizza"
        />
      </motion.figure>

      <motion.figure
        style={{ translateX, translateY: botTranslateY, opacity, scale }}
        className="absolute  bottom-0 left-48 "
      >
        <Image
          src="/images/peperoni.png"
          width={108}
          height={108}
          alt="pizza"
        />
      </motion.figure>
    </div>
  )
}
