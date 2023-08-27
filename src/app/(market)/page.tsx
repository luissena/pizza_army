import Image from "next/image"
import Link from "next/link"
import { MdStar } from "react-icons/md"
import { getAllProducts } from "../../utils/fetchProduct"

export default async function page() {
  const productsData = getAllProducts()
  const produtos = await productsData

  return (
    <div className="mt-10 mx-5 lg:max-w-7xl lg:mx-auto grid grid-cols-12 gap-5">
      <h1 className="col-span-12 text-3xl font-medium">Produtos</h1>
      {produtos.length > 0 ? (
        produtos.map((produto) => (
          <Link
            href={`/${produto.id}`}
            className="hover:shadow p-3  items-center lg:items-start cursor-pointer col-span-12 md:col-span-6 lg:col-span-2  border  flex flex-col  gap-5"
            key={produto.id}
          >
            <Image
              src={
                produto.photos[0]
                  ? `https://naujadmfrtsfswtpbiyx.supabase.co/storage/v1/object/public/products/${produto.photos[0].url}`
                  : "https://naujadmfrtsfswtpbiyx.supabase.co/storage/v1/object/public/products/placeholder-300x200.png"
              }
              width={200}
              height={200}
              alt="pizza"
            />

            {produto.photos.map((photo) => (
              <span>{photo.id}</span>
            ))}

            <div className="flex justify-between">
              <div className="flex flex-col font-medium">
                <span>{produto.name}</span>
                <span>{`R$ ${produto.price.toFixed(2)}`}</span>
              </div>
              <div className="flex items-center gap-1 self-end">
                <MdStar fill="#FFB521" />
                <span>4.3</span>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-2xl">Não há produtos cadastrados</h1>
      )}
    </div>
  )
}
