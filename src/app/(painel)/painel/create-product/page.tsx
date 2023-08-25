"use client"
import { Button, Chip, Input, Textarea } from "@nextui-org/react"
import Link from "next/link"
import { useState } from "react"
import { MdOutlineArrowBackIosNew } from "react-icons/md"
export default function page() {
  const [sabores, setSabores] = useState([])
  const handleClose = (sabor: string) => {
    setSabores(sabores.filter((s) => s !== sabor))
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSabores([...sabores, event.target.value])
      event.target.value = ""
      console.log(sabores)
    }
  }
  return (
    <div className="">
      <Link
        className="flex items-center gap-2 mb-5 text-xl p-2 border hover:shadow w-1/12 rounded-lg"
        href="/painel"
      >
        <MdOutlineArrowBackIosNew /> <span>Voltar</span>
      </Link>
      <h1 className=" text-2xl font-bold  my-2">Criar novo produto</h1>
      <div className="grid grid-cols-6 gap-5">
        <Input className="col-span-2" label="Nome do produto" />
        <Input
          startContent={<span>R$</span>}
          className="col-span-2"
          type="number"
          label="Preço"
        />
        <div className="col-span-2">
          <Input
            onKeyUp={handleKeyPress}
            description="Pressione enter a cada sabor digitado"
            label="Sabores"
          />
          <div className="flex gap-1">
            {sabores.map((sabor, index) => (
              <Chip variant="bordered" onClose={() => handleClose(sabor)}>
                {sabor}
              </Chip>
            ))}
          </div>
        </div>

        <Textarea className="col-span-6" label="Descrição" />
        <div className="flex justify-between col-span-6">
          <Button className="font-['Bebas_Neue'] text-xl leading-3 tracking-[0.72px] bg-[#FFB521] ">
            Adicionar fotos
          </Button>
          <Button className="font-['Bebas_Neue'] text-xl leading-3 tracking-[0.72px] bg-green-500  ">
            Criar produto
          </Button>
        </div>
      </div>
    </div>
  )
}
