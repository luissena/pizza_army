"use client"
import { useCartStore } from "@/stores/useCartStore"
import { MdStar } from "react-icons/md"
import { PiCheckBold } from "react-icons/pi"

interface IProductDescriptionProps {
  name: string | undefined
  description: string | undefined
  highlights?: string[] | undefined
  rating: number | undefined
  ratingCount: number | undefined
  children: React.ReactNode
}

export const ProductDescription: React.FC<IProductDescriptionProps> = ({
  name,
  description,
  highlights,
  rating,
  ratingCount,
  children,
}) => {
  const selectedFlavor = useCartStore((state) => state.selectedFlavor)

  const roundedRating = Math.round(rating || 0)
  return (
    <div className="mr-2 col-span-3 lg:col-span-1 mt-5">
      <div className="flex items-end justify-between ">
        <h1 className="text-3xl leading-6 font-['Bebas_Neue'] tracking-[1.92px]">
          {name}
        </h1>

        <div className="flex items-end gap-2">
          <div className="flex text-sm 0">
            {Array.from({ length: roundedRating }).map((_, index) => (
              <MdStar key={index} fill="#FFB521" />
            ))}
          </div>
          <p className="font-['Bebas_Neue'] text-[#FFB521] text-xs leading-3 tracking-[0.72px] ">
            {ratingCount} AVALIAÇÕES
          </p>
        </div>
      </div>

      <p className="font-light mt-4 mb-10 text-sm">{description}</p>

      {children}

      <ul className="text-xs font-light mx-4 select-none">
        {highlights?.map((highlight, index) => (
          <li key={index} className="flex gap-2 mb-4">
            <PiCheckBold className="text-lg " fill="#1F6D29" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
