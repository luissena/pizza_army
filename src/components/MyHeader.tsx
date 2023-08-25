import Link from "next/link"
import {
  MdMenu,
  MdOutlineExpandMore,
  MdOutlineShoppingCart,
  MdPersonOutline,
} from "react-icons/md"

export function MyHeader() {
  return (
    <header className=" grid grid-cols-8 lg:grid-cols-12 items-center px-10 py-3 lg:py-4 lg:pl-32 lg:pr-6 text-sm sticky top-0 bg-white z-50 ">
      <div className="  col-span-5 cursor-pointer hidden lg:flex lg:items-center   lg:gap-1">
        <h2 className="font-medium">Comprar</h2>
        <MdOutlineExpandMore className=" text-lg" fill="#271718" />
      </div>

      <div className="lg:hidden">
        <MdMenu className="lg:invisible col-span-2 cursor-pointer" />
      </div>

      <Link
        href="/"
        className="col-span-6  lg:col-span-2 select-none text-center lg:text-left  text-2xl text-[#1F6D29] font-['Bebas_Neue'] tracking-[1.92px] "
      >
        PIZZA ARMY
      </Link>

      <div className=" lg:col-span-5 flex lg:justify-center items-center  lg:gap-10">
        <h2 className="font-medium hidden  lg:block">
          A segunda pizza com <span className="text-[#1F6D29]">20% OFF</span>
        </h2>
        <div className="lg:flex lg:items-center lg:gap-6 text-2xl">
          <Link href="/auth" className="hidden lg:block ">
            <MdPersonOutline />
          </Link>
          <Link href="/cart">
            <MdOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </header>
  )
}
