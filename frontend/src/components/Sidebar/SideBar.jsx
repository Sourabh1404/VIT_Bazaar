import React from 'react'
import { RiHome7Line } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { GoSignIn } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 w-14 h-screen m-0 flex flex-col bg-gray-950 text-white shadow-lg'>
    <SideBarIcon icon={<RiHome7Line size="30" />} text="Home 💡"></SideBarIcon>
    <SideBarIcon icon={<FaShopify size="30" />} text="Shop 💡"></SideBarIcon>
     <SideBarIcon icon={<IoIosAddCircle  size="30" />} text="Add Item 💡" ></SideBarIcon>
    <SideBarIcon icon={<MdOutlineAddIcCall size="30" />} text=" Contact 💡"></SideBarIcon>
     <SideBarIcon icon={<GoSignIn size="30" />} text="Login 💡"></SideBarIcon>
      {/* <Side icon={<CgProfile size="60" />}></Side> */}
   
   </div>
  )
}
const SideBarIcon = ({icon ,text= "Tooltip "}) => (
  <div className='sidebar-icon group'>{icon}
  <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
  </div>
);


export default SideBar