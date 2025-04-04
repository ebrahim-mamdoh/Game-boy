import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import NavLink from "./NavLink";
import Logo from "../logo/Logo";
export const Nav_links = [
  {
    label: "Home",
    link: "/",
    icon: <IoMdHome />,
  },
  {
    label: "Category",
    link: "/category",
    icon: <MdDashboard />,
  }, {
    label: "Games",
    link: "/games",
    icon: <MdDashboard />,
  },
  {
    label: "Wishlist",
    link: "/wishlist",
    icon: <FaHeart />,
  },
  {
    label: "Friends",
    link: "/friends",
    icon: <BsFillPeopleFill />,
  },
];

export default function SideBar() {
 
  return (
    <div className="col-span-2 hidden lg:flex flex flex-col gap-3 ">
      <div className="py-5 px-10 flex flex-col  item-start bg-black/30 h-screen text-gray-50 sticky inset-0" >
         <Logo />
      {Nav_links.map((navLink, index) => (
        <NavLink key={index} navlink={navLink} />
      ))}
      </div>
     
    </div>
  );
}
