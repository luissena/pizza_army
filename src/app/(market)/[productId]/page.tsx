import { AddCart } from "@/components/AddCart"
import { CustommerReviews } from "@/components/CustommerReviews"
import { PizzaWithHighlits } from "@/components/PizzaWithHighlits"
import { PizzaWithHighlitsMobile } from "@/components/PizzaWithHighlitsMobile"
import { PizzaWithIngredientsAnimation } from "@/components/PizzaWithIngredientsAnimation"
import { PizzaWithIngredientsAnimationMobile } from "@/components/PizzaWithIngredientsAnimationMobile"
import { ProductDescription } from "@/components/ProductDescription"
import { ProductPhotosCarouselMobile } from "@/components/ProductPhotosCarouselMobile"
import { ProductPhotosDesktop } from "@/components/ProductPhotosDesktop"
import { SelectProductType } from "@/components/SelectProductType"
import { getAllProducts, getProductById } from "@/services/prisma"
import { Spinner } from "@nextui-org/spinner"
import { Suspense } from "react"

export default async function Page({
  params,
}: {
  params: { productId: string }
}) {
  const [product, products] = await Promise.all([
    getProductById(params.productId),
    getAllProducts(),
  ])

  const mockData = {
    highlights: [
      "Queijos importados",
      "Catupiry de primeira qualidade",
      "Bastante recheio",
      "Forno à lenha",
    ],
    rating: 5,
    rating_count: 42,
    reviews: [
      {
        stars: 5,
        review:
          "Pizza incrível. Queijo de qualidade, bem recheada e crocante. Vou pedir mais e indicar pra todo mundo, com certeza!",
        author: "Pedro B.",
        verified: true,
      },

      {
        stars: 2,
        review:
          "Pizza incrível. Queijo de qualidade, bem recheada e crocante. Vou pedir mais e indicar pra todo mundo, com certeza!",
        author: "Arthur Leal",
        verified: false,
      },
      {
        stars: 5,
        review:
          "Pizza incrível. Queijo de qualidade, bem recheada e crocante. Vou pedir mais e indicar pra todo mundo, com certeza!",
        author: "Giovana Martinelli",
        verified: true,
      },
    ],
    photos: [
      "/images/pexels-narda-yescas-1566837.png",
      "/images/pexels-brett-jordan-842519.png",
      "/images/pexels-kristina-paukshtite-1146760.png",
      "/images/pexels-vincent-rivaud-2233348.png",
    ],
  }

  return (
    <main className="overflow-x-hidden max-w-7xl mx-auto">
      <div className="grid grid-cols-3 gap-12 ml-2 lg:ml-12 lg:mr-32">
        <Suspense fallback={<Spinner />}>
          <ProductPhotosDesktop productImages={product.photos} />

          <ProductPhotosCarouselMobile productImages={product.photos} />

          <ProductDescription
            name={product.name}
            description={product.description}
            highlights={mockData.highlights}
            rating={mockData.rating}
            ratingCount={mockData.rating_count}
          >
            <SelectProductType
              products={products}
              selectedId={params.productId}
            />
            <AddCart product={product} />
          </ProductDescription>
        </Suspense>

        <PizzaWithIngredientsAnimation />
        <PizzaWithIngredientsAnimationMobile />

        <PizzaWithHighlits />
        <PizzaWithHighlitsMobile />

        <CustommerReviews reviews={mockData.reviews} />
      </div>
    </main>
  )
}
