"use client"
import { Button, Input } from "@nextui-org/react"
import Link from "next/link"
import { useState } from "react"
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md"

export default function Page() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)
  return (
    <div className="mt-20 w-full  flex flex-col gap-3 justify-center items-center mx-auto ">
      <Input
        label="E-mail"
        variant="bordered"
        placeholder="Digite seu e-mail"
        className="w-1/4"
      />
      <Input
        label="Password"
        variant="bordered"
        placeholder="Digite sua senha"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <MdOutlineVisibilityOff className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <MdOutlineVisibility className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="w-1/4"
      />
      <Link href="/painel">
        <Button className="w-1/4 font-['Bebas_Neue'] text-xl leading-3 tracking-[0.72px] bg-[#FFB521] ">
          Entrar
        </Button>
      </Link>
    </div>
  )
}
