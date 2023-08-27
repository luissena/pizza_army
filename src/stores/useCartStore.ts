"use client"
import { Product } from "@/services/prisma"
import { create } from "zustand"

export interface Item {
  product: Product
  quantity: number
  selectedFlavor: Set<string>
}

interface Store {
  items: Item[]
  addToCart: (item: Item) => void
  selectedFlavor: Set<string>
  handleFlavor: (flavor: Set<string>) => void
}

export const useCartStore = create<Store>((set, get) => {
  return {
    items: [],
    selectedFlavor: new Set<string>(),
    handleFlavor: (flavor: Set<string>) => {
      set({
        selectedFlavor: new Set(flavor),
      })
    },
    addToCart: (item: Item) => {
      localStorage.setItem("cart", JSON.stringify([...get().items, item]))
      set({
        items: [...get().items, item],
      })
      console.log(get().selectedFlavor.values().next().value)
      console.log(get().items)
    },
  }
})
