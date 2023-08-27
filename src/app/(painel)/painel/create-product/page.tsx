import { CreateProductForm } from "@/components/CreateProductForm"
import { createProduct } from "@/utils/fetchProduct"
import { revalidatePath } from "next/cache"
import Link from "next/link"
import { redirect } from "next/navigation"
import { MdOutlineArrowBackIosNew } from "react-icons/md"

export default async function page() {
  const createNewProduct = async (formData: FormData) => {
    "use server"
    await createProduct(formData)
    revalidatePath("/")
    revalidatePath("/(painel)/painel")

    redirect("/painel")
  }

  return (
    <section className="mx-5">
      <Link
        className="flex items-center justify-center  gap-2 mb-5 text-xl p-2 border hover:shadow lg:w-1/12 rounded-lg"
        href="/painel"
      >
        <MdOutlineArrowBackIosNew /> <span>Voltar</span>
      </Link>
      <h1 className=" text-2x font-bold  my-2">Criar novo produto</h1>
      <CreateProductForm create={createNewProduct} />
    </section>
  )
}
