"use client"

import { Product } from "@/services/prisma"
import { Select, SelectItem } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const SelectProductType = ({
  products,
  selectedId,
}: {
  products: Product[] | undefined
  selectedId: string
}) => {
  const router = useRouter()

  const [value] = useState(new Set([selectedId]))

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.push(e.target.value)
  }

  return (
    <div>
      <Select
        disallowEmptySelection
        labelPlacement="outside"
        label="Sabor"
        variant="bordered"
        className="my-2"
        selectedKeys={value}
        onChange={onChange}
        selectionMode="single"
      >
        {products ? (
          products.map((product) => (
            <SelectItem key={product.id} value={product.id}>
              {product.name}
            </SelectItem>
          ))
        ) : (
          <SelectItem key={0} value="Sem sabores">
            Sem sabores
          </SelectItem>
        )}
      </Select>
    </div>
  )
}
