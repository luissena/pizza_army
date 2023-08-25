"use client"

import { ModalViewProduct } from "@/components/ModalViewProduct"
import { Produto } from "@/stores/useCartStore"

import {
  Button,
  CircularProgress,
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
  const [produtos, setProdutos] = useState<Produto[] | null>(null)
  const [produto, setProduto] = useState<Produto>({} as Produto)

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:3333/produto")
      const data = await response.json()

      setProdutos(data)
    }

    getProducts()
  }, [])

  const handleOpenView = (produto: Produto) => {
    setProduto(produto)
    onOpen()
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const columns = [
    {
      key: "actions",
      label: "Ações",
    },

    {
      key: "nome",
      label: "Nome do produto",
    },
    {
      key: "preco",
      label: "Preço",
    },
  ]

  return (
    <div className="flex flex-col ">
      <ModalViewProduct
        product={produto}
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
        {produtos ? (
          <Table>
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={produtos}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) =>
                    columnKey !== "actions" ? (
                      <TableCell>
                        {columnKey === "preco"
                          ? `R$ ${getKeyValue(item, columnKey).toFixed(2)}`
                          : getKeyValue(item, columnKey)}
                      </TableCell>
                    ) : (
                      <TableCell>
                        <div className="flex items-center gap-3 text-lg">
                          <MdVisibility
                            onClick={() => handleOpenView(item)}
                            className="cursor-pointer  "
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
          <CircularProgress className="mx-auto" />
        )}
      </div>
    </div>
  )
}
