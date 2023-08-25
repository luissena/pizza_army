"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
export const PizzaWithIngredientsAnimationMobile = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.42, 0.5], [1, 0])
  const translateY = useTransform(scrollYProgress, [0.42, 0.5], ["0%", "210px"])
  const rotate = useTransform(scrollYProgress, [0.42, 0.5], [-45, 0])
  const translateX = useTransform(scrollYProgress, [0.42, 0.5], ["0%", "210px"])
  const reverseTranslateX = useTransform(
    scrollYProgress,
    [0.42, 0.5],
    ["0%", "-210px"]
  )
  const scale = useTransform(scrollYProgress, [0.4, 0.5], [1, 0.5])

  return (
    <div className=" relative grid grid-cols-12 col-span-3 lg:hidden">
      <motion.picture
        className="col-span-12 mx-auto my-10"
        style={{ translateY, rotate }}
      >
        <Image src="/images/pizza.png" width={234} height={224} alt="pizza" />
      </motion.picture>

      <motion.picture
        style={{ translateX, translateY, opacity, scale }}
        className="absolute"
      >
        <Image src="/images/queijo.png" width={103} height={62} alt="pizza" />
      </motion.picture>

      <motion.picture
        style={{ translateX, translateY, opacity, scale }}
        className="absolute right-48"
      >
        <Image
          src="/images/verde_topo.png"
          width={32}
          height={32}
          alt="pizza"
        />
      </motion.picture>

      <motion.picture
        style={{ translateX: reverseTranslateX, translateY, opacity, scale }}
        className="absolute -top-6 right-6"
      >
        <Image src="/images/azeitonas.png" width={62} height={47} alt="pizza" />
      </motion.picture>
      <motion.picture
        style={{ translateX, translateY, opacity, scale }}
        className="absolute top-20 left-5"
      >
        <Image src="/images/peperoni.png" width={56} height={57} alt="pizza" />
      </motion.picture>
      <motion.picture
        style={{ translateX: reverseTranslateX, translateY, opacity, scale }}
        className="absolute top-10 right-10"
      >
        <Image
          src="/images/manjericao.png"
          width={70}
          height={74}
          alt="pizza"
        />
      </motion.picture>
      <motion.picture
        style={{ translateX, translateY, opacity, scale }}
        className="absolute top-28 -left-10"
      >
        <Image
          src="/images/tomate_blur.png"
          width={70}
          height={74}
          alt="pizza"
        />
      </motion.picture>
      <motion.picture
        style={{ translateX, translateY, opacity, scale }}
        className="absolute top-40 left-6"
      >
        <Image
          src="/images/coentro_esquerda.png"
          width={21}
          height={21}
          alt="pizza"
        />
      </motion.picture>
      <motion.picture
        style={{ translateX, translateY, opacity, scale }}
        className="absolute top-48 -left-6"
      >
        <Image src="/images/peperoni.png" width={52} height={52} alt="pizza" />
      </motion.picture>
      <motion.picture
        style={{ translateX, translateY, opacity, scale }}
        className="absolute top-56 left-10"
      >
        <Image src="/images/nozes.png" width={22} height={22} alt="pizza" />
      </motion.picture>
      <motion.picture
        style={{ translateX: reverseTranslateX, translateY, opacity, scale }}
        className="absolute top-10 right-6"
      >
        <Image src="/images/coentro.png" width={22} height={22} alt="pizza" />
      </motion.picture>
      <motion.picture
        style={{ translateX: reverseTranslateX, translateY, opacity, scale }}
        className="absolute top-10 -right-10"
      >
        <Image src="/images/tomate.png" width={94} height={46} alt="pizza" />
      </motion.picture>
      <motion.picture
        style={{ translateX: reverseTranslateX, translateY, opacity, scale }}
        className="absolute top-32 -right-5"
      >
        <Image src="/images/cebola.png" width={44} height={62} alt="pizza" />
      </motion.picture>
      <motion.picture
        style={{ translateX: reverseTranslateX, translateY, opacity, scale }}
        className="absolute top-44 -right-2"
      >
        <Image src="/images/alho_poro.png" width={46} height={38} alt="pizza" />
      </motion.picture>
      <motion.picture
        style={{ translateX: reverseTranslateX, translateY, opacity, scale }}
        className="absolute top-52 right-5"
      >
        <Image src="/images/pimenta.png" width={31} height={38} alt="pizza" />
      </motion.picture>
    </div>
  )
}
