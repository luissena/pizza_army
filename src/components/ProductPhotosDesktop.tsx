import Image from "next/image"

export const ProductPhotosDesktop = ({
  productImages,
}: {
  productImages: { id: string; url: string }[]
}) => {
  return (
    <div className="hidden lg:grid grid-cols-2 gap-6 col-span-3 lg:col-span-2">
      {productImages.map((image) => (
        <Image
          key={image.id}
          alt="Foto do produto"
          width={360}
          height={360}
          src={`https://naujadmfrtsfswtpbiyx.supabase.co/storage/v1/object/public/products/${image.url}`}
        />
      ))}
    </div>
  )
}
