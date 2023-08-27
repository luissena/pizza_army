import { Product, createProduct } from "@/utils/fetchProduct"
import { Button } from "@nextui-org/button"

export function CreateProductButton({ data }: { data: Product }) {
  return (
    <Button
      type="submit"
      className="col-span-6 lg:w-1/2 lg:ml-auto lg:col-span-3 font-['Bebas_Neue'] text-xl bg-green-500 "
      onClick={() => {
        console.log(data)
        createProduct(data)
      }}
    >
      Criar produto
    </Button>
  )
}
