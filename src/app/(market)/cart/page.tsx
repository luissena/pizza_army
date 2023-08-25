"use client"
import { useCartStore } from "@/stores/useCartStore"
import { Button } from "@nextui-org/react"
import Image from "next/image"

export default function Cart() {
  const items = useCartStore((state) => state.items)

  const total = items.reduce((acc, item) => {
    return acc + item.product.preco * item.quantity
  }, 0)
  return (
    <section className="max-w-5xl mx-5 lg:mx-auto mt-5">
      <div className="flex flex-col gap-5">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={`${item.product}-${item.selectedFlavor}-${item.quantity}`}
              className="lg:grid lg:grid-cols-12 gap-3 lg:gap-0 flex flex-col items-center  shadow p-5 rounded-lg"
            >
              <Image
                src="/images/pexels-narda-yescas-1566837.png"
                alt="pizza"
                className="rounded-xl col-span-2 w-1/2 lg:w-auto"
                width={100}
                height={100}
              />
              <div className="col-span-2 flex flex-col items-center lg:items-start">
                <span className="text-sm font-light">Produto</span>
                <span className="font-bold">{item.product.nome}</span>
              </div>
              <div className="col-span-2 flex flex-col items-center lg:items-start">
                <span className="text-sm font-light">Sabor</span>
                <span className="font-bold">{item.selectedFlavor}</span>
              </div>
              <div className="col-span-2 flex flex-col items-center lg:items-start">
                <span className="text-sm font-light">Preço</span>
                <span className="font-bold">
                  R$ {item.product.preco.toFixed(2)}
                </span>
              </div>
              <div className="col-span-2 flex flex-col items-center lg:items-start">
                <span className="text-sm font-light">Quantidade</span>
                <span className="font-bold">{item.quantity}</span>
              </div>
              <div className="col-span-2 flex flex-col items-center lg:items-start">
                <span className="text-sm font-light">Subtotal</span>
                <span className="font-bold">
                  R$ {(item.product.preco * item.quantity).toFixed(2)}
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
