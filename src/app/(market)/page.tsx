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
      {produtos.map((produto) => (
        <Link
          href={`/${produto.id}`}
          className="hover:shadow p-3 cursor-pointer col-span-12 md:col-span-6 lg:col-span-2  border  flex flex-col  gap-5"
          key={produto.id}
        >
          <Image
            src="/images/pexels-narda-yescas-1566837.png"
            width={200}
            height={200}
            alt="pizza"
          />

          <div className="flex justify-between">
            <div className="flex flex-col font-medium">
              <span>{produto.nome}</span>
              <span>{`R$ ${produto.preco.toFixed(2)}`}</span>
            </div>
            <div className="flex items-center gap-1 self-end">
              <MdStar fill="#FFB521" />
              <span>4.3</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
