"use client"
import { useCartStore } from "@/stores/useCartStore"
import { formatCurrency } from "@/utils/formatCurrency"
import { Button } from "@nextui-org/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { MdOutlineArrowBackIosNew } from "react-icons/md"

export default function Cart() {
  const router = useRouter()
  const backToPurchase = () => {
    router.back()
  }
  const finishPurchase = () => {
    alert("Compra finalizada!")
    console.log(items)
  }
  const items = useCartStore((state) => state.items)

  const total = items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity
  }, 0)
  return (
    <section className="grid grid-cols-2 max-w-5xl mx-5 lg:mx-auto mt-5">
      <h1 className="text-2xl font-bold col-span-1">Carrinho</h1>
      <Button
        onClick={backToPurchase}
        variant="ghost"
        className="bg-white  col-span-1 ml-auto flex gap-1 items-center"
      >
        <MdOutlineArrowBackIosNew />
        <span className="text-2xl">Voltar</span>
      </Button>
      <div className="flex flex-col gap-5 col-span-2">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.product.id}
              className="lg:grid lg:grid-cols-12 gap-3 lg:gap-0 flex flex-col items-center  shadow p-5 rounded-lg"
            >
              <Image
                src={`https://naujadmfrtsfswtpbiyx.supabase.co/storage/v1/object/public/products/${item.product.photos[0].url}`}
                alt="pizza"
                className="rounded-xl col-span-2 w-1/2 lg:w-auto"
                width={100}
                height={100}
              />
              <div className="col-span-2 flex flex-col items-center lg:items-start">
                <span className="text-sm font-light">Produto</span>
                <span className="font-bold">{item.product.name}</span>
              </div>

              <div className="col-span-2 flex flex-col items-center lg:items-start">
                <span className="text-sm font-light">Preço</span>
                <span className="font-bold">
                  {formatCurrency(item.product.price)}
                </span>
              </div>
              <div className="col-span-2 flex flex-col items-center lg:items-start">
                <span className="text-sm font-light">Quantidade</span>
                <span className="font-bold">{item.quantity}</span>
              </div>
              <div className="col-span-2 flex flex-col items-center lg:items-start">
                <span className="text-sm font-light">Subtotal</span>
                <span className="font-bold">
                  {formatCurrency(item.product.price * item.quantity)}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-2xl">Carrinho vazio</div>
        )}
      </div>

      <div className="col-span-2 flex items-center my-5  ">
        <span className="text-xl">
          Total da compra:{" "}
          <span className="font-bold ">{formatCurrency(total)}</span>
        </span>
        <Button
          onClick={finishPurchase}
          className="ml-auto font-['Bebas_Neue'] text-xl leading-3 tracking-[0.72px] bg-[#FFB521] "
        >
          Finalizar compra
        </Button>
      </div>
    </section>
  )
}
