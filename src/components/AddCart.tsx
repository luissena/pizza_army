import { Button } from "@nextui-org/button"
import { BsFillDashCircleFill, BsPlusCircleFill } from "react-icons/bs"

export const AddCart = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-6 lg:mx-0">
        <div className="flex items-center gap-3 ">
          <BsFillDashCircleFill
            fill={true ? "#E2E2E2" : "red"}
            className={
              true ? "cursor-not-allowed text-3xl" : "cursor-pointer text-3xl"
            }
          />
          <span>{2}</span>
          <BsPlusCircleFill
            className="text-3xl cursor-pointer"
            fill="#1F6D29"
          />
        </div>
        <div className=" text-lg font-light select-none">
          Subtotal: <span className="font-bold">R$ 22,00</span>
        </div>
      </div>

      <Button className="mt-2 mb-5 font-['Bebas_Neue'] text-sm leading-3 tracking-[0.72px] bg-[#FFB521] w-full">
        ADICIONAR AO CARRINHO
      </Button>
    </>
  )
}
