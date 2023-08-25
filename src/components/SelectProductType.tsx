"use client"

import { useCartStore } from "@/stores/useCartStore"
import { Select, SelectItem } from "@nextui-org/react"
import { ChangeEvent, useEffect } from "react"

export const SelectProductType = ({
  flavors,
}: {
  flavors: string[] | undefined
}) => {
  const selectedFlavor = useCartStore((state) => state.selectedFlavor)
  const handleSelectFlavor = useCartStore((state) => state.handleFlavor)

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleSelectFlavor(new Set([e.target.value]))
  }

  useEffect(() => {
    handleSelectFlavor(new Set([flavors ? flavors[0] : "Sem sabores"]))
  }, [])

  return (
    <div>
      <Select
        disallowEmptySelection
        labelPlacement="outside"
        label="Sabor"
        variant="bordered"
        className="my-2"
        selectedKeys={selectedFlavor}
        onChange={handleSelectionChange}
      >
        {flavors ? (
          flavors.map((flavor, index) => (
            <SelectItem key={flavor} value={flavor}>
              {flavor}
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
