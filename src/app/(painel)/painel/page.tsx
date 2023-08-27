import { AllProductsTable } from "@/components/AllProductsTable"
import { getAllProducts } from "@/utils/fetchProduct"

import { Button } from "@nextui-org/button"

import Link from "next/link"

export default async function page() {
  const products = await getAllProducts()

  return (
    <section className="flex flex-col ">
      <div className="flex items-center justify-between mb-10 mx-5 xl:mx-0">
        <h1 className="font-bold text-2xl">Produtos</h1>
        <Link href="/painel/create-product">
          <Button className="font-['Bebas_Neue'] text-xl leading-3 tracking-[0.72px] bg-[#FFB521] ">
            Criar novo produto
          </Button>
        </Link>
      </div>

      <AllProductsTable products={products} />
    </section>
  )
}
