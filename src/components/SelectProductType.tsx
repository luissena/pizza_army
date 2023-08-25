"use client"

import { Select, SelectItem } from "@nextui-org/react"

export const SelectProductType = ({
  flavors,
}: {
  flavors: string[] | undefined
}) => {
  return (
    <Select
      labelPlacement="outside"
      label="Sabor"
      variant="bordered"
      className="my-2"
    >
      {flavors ? (
        flavors.map((flavor, index) => (
          <SelectItem key={index} value={flavor}>
            {flavor}
          </SelectItem>
        ))
      ) : (
        <SelectItem key={0} value="Sem sabores">
          Sem sabores
        </SelectItem>
      )}
    </Select>
  )
}
