"use client"
import { useStore } from "@/stores/useCartStore"
import { Button } from "@nextui-org/react"
import Image from "next/image"

export default function Cart() {
  const teste = useStore((state) => state.items)
  const total = teste.reduce((acc, item) => {
    return acc + item.produto.preco * item.quantidade
  }, 0)
  return (
    <section className="max-w-5xl mx-auto mt-5">
      <div className="flex flex-col gap-5">
        {teste.length > 0 ? (
          teste.map((item) => (
            <div className="grid grid-cols-12 items-center  shadow p-5 rounded-lg">
              <Image
                src="/images/pexels-narda-yescas-1566837.png"
                alt="pizza"
                className="rounded-xl col-span-2"
                width={100}
                height={100}
              />
              <div className="col-span-2 flex flex-col">
                <span className="text-sm font-light">Produto</span>
                <span className="font-bold">{item.produto.nome}</span>
              </div>
              <div className="col-span-2 flex flex-col">
                <span className="text-sm font-light">Sabor</span>
                <span className="font-bold">{item.produto.sabor}</span>
              </div>
              <div className="col-span-2 flex flex-col">
                <span className="text-sm font-light">Preço</span>
                <span className="font-bold">
                  R$ {item.produto.preco.toFixed(2)}
                </span>
              </div>
              <div className="col-span-2 flex flex-col">
                <span className="text-sm font-light">Quantidade</span>
                <span className="font-bold">{item.quantidade}</span>
              </div>
              <div className="col-span-2 flex flex-col">
                <span className="text-sm font-light">Subtotal</span>
                <span className="font-bold">
                  R$ {(item.produto.preco * item.quantidade).toFixed(2)}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-2xl">Carrinho vazio</div>
        )}
      </div>

      <div className="flex items-center my-5  ">
        <span className="text-xl">
          Total da compra:{" "}
          <span className="font-bold ">R$ {total.toFixed(2)}</span>
        </span>
        <Button className="ml-auto font-['Bebas_Neue'] text-xl leading-3 tracking-[0.72px] bg-[#FFB521] ">
          Finalizar compra
        </Button>
      </div>
    </section>
  )
}
