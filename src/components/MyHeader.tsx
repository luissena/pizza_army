import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"

export function MyHeader() {
  return (
    <header className="max-w-7xl mx-auto grid grid-cols-8 lg:grid-cols-12 items-center px-10 py-3 lg:py-4 lg:pl-32 lg:pr-6 text-sm">
      <h2 className="col-span-5 cursor-pointer hidden lg:block">
        Comprar <ExpandMoreOutlinedIcon />
      </h2>

      <div className="lg:hidden">
        <MenuOutlinedIcon className="lg:invisible col-span-2 cursor-pointer" />
      </div>

      <h1 className="col-span-6  lg:col-span-2 select-none text-center lg:text-left  text-2xl text-[#1F6D29] font-['Bebas_Neue'] tracking-[1.92px] ">
        PIZZA ARMY
      </h1>

      <div className=" lg:col-span-5 flex lg:justify-center items-center  lg:gap-10">
        <h2 className="font-medium hidden  lg:block">
          A segunda pizza com <span className="text-[#1F6D29]">20% OFF</span>
        </h2>
        <div className="lg:flex lg:items-center lg:gap-6">
          <div className="hidden lg:block ">
            <PersonOutlinedIcon />
          </div>
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </header>
  )
}
