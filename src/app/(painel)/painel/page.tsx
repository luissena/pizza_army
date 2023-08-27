"use client"

import { ModalViewProduct } from "@/components/ModalViewProduct"
import { Product } from "@/utils/fetchProduct"

import {
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
  useDisclosure,
} from "@nextui-org/react"

import Link from "next/link"
import { useEffect, useState } from "react"
import { MdEdit, MdVisibility } from "react-icons/md"

export default function page() {
  const [products, setProducts] = useState<Product[]>([])
  const [product, setProduto] = useState<Product | undefined>()

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("/api/products")
      const { products } = await response.json()

      setProducts(products)
    }

    getProducts()
  }, [])

  const handleOpenView = (product: Product) => {
    setProduto(product)
    onOpen()
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const columns = [
    {
      key: "actions",
      label: "Ações",
    },

    {
      key: "name",
      label: "Nome do produto",
    },
    {
      key: "price",
      label: "Preço",
    },
  ]

  return (
    <section className="flex flex-col ">
      <ModalViewProduct
        product={product}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />

      <div className="flex items-center justify-between mb-10 mx-5 xl:mx-0">
        <h1 className="font-bold text-2xl">Produtos</h1>
        <Link href="/painel/create-product">
          <Button className="font-['Bebas_Neue'] text-xl leading-3 tracking-[0.72px] bg-[#FFB521] ">
            Criar novo produto
          </Button>
        </Link>
      </div>

      <div className="w-full mx-auto items-center  shadow p-5 rounded-lg">
        {products ? (
          <Table>
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={products}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) =>
                    columnKey !== "actions" ? (
                      <TableCell>
                        {columnKey === "price"
                          ? `R$ ${getKeyValue(item, columnKey).toFixed(2)}`
                          : getKeyValue(item, columnKey)}
                      </TableCell>
                    ) : (
                      <TableCell>
                        <div className="flex items-center gap-3 text-lg">
                          <MdVisibility
                            onClick={() => handleOpenView(item)}
                            className="cursor-pointer"
                          />

                          <MdEdit className="cursor-pointer" />
                        </div>
                      </TableCell>
                    )
                  }
                </TableRow>
              )}
            </TableBody>
          </Table>
        ) : (
          <Spinner className="mx-auto flex" />
        )}
      </div>
    </section>
  )
}
