"use client"
import { Product } from "@/services/prisma"
import { create } from "zustand"

export interface Item {
  product: Product
  quantity: number
}

interface Store {
  items: Item[]
  addToCart: (item: Item) => void
}

export const useCartStore = create<Store>((set, get) => {
  return {
    items: [],

    addToCart: (item: Item) => {
      set({
        items: [...get().items, item],
      })
    },
  }
})
