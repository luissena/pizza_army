"use client"

import { Product } from "@/services/prisma"
import { formatCurrency } from "@/utils/formatCurrency"
import {
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
import { useState } from "react"
import { MdEdit, MdVisibility } from "react-icons/md"
import { ModalViewProduct } from "./ModalViewProduct"

export const AllProductsTable = ({ products }: { products: Product[] }) => {
  const [product, setProduct] = useState<Product>()
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
  const handleOpenView = (product: Product) => {
    setProduct(product)
    onOpen()
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="w-full mx-auto items-center  shadow p-5 rounded-lg">
      <ModalViewProduct
        product={product}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
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
                        ? formatCurrency(getKeyValue(item, columnKey))
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
  )
}
