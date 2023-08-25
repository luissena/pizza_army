import Link from "next/link"

export default function PainelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <Link
        href="/painel"
        className=" mx-auto py-5 mb-10  text-center   text-2xl text-[#1F6D29] font-['Bebas_Neue'] tracking-[1.92px] "
      >
        PIZZA ARMY
      </Link>
      {children}
    </div>
  )
}
