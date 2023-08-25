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
import { getProductById } from "@/utils/fetchProduct"

export default async function Page({
  params,
}: {
  params: { productId: number }
}) {
  const productData = getProductById(params.productId)
  const produto = await productData
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
    <div className="overflow-x-hidden max-w-7xl mx-auto">
      <main className=" grid grid-cols-3 gap-12 ml-2 lg:ml-12 lg:mr-32">
        <ProductPhotosDesktop productImages={mockData.photos} />

        <ProductPhotosCarouselMobile productImages={mockData.photos} />

        <ProductDescription
          name={produto.nome}
          description={produto.descricao}
          highlights={mockData.highlights}
          rating={mockData.rating}
          ratingCount={mockData.rating_count}
        >
          <SelectProductType flavors={produto.sabores} />
          <AddCart product={produto} />
        </ProductDescription>

        <PizzaWithIngredientsAnimation />
        <PizzaWithIngredientsAnimationMobile />

        <PizzaWithHighlits />
        <PizzaWithHighlitsMobile />
        <CustommerReviews reviews={mockData.reviews} />
      </main>
    </div>
  )
}
