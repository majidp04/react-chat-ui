import React from 'react'
import { useState } from "react";
import { BsArrowLeftShort, BsBugFill, BsChevronDown, BsFillImageFill, BsPerson, BsReverseLayoutTextSidebarReverse, BsSearch } from "react-icons/bs"
import {  AiFillContacts, AiFillEnvironment, AiFillFolderAdd, AiOutlineBarChart, AiOutlineFileText, AiOutlineLoading, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai"
import {FaTwitter} from "react-icons/fa"
import {BiShow} from "react-icons/bi"
import {MdOutlineChangeCircle} from 'react-icons/md'

function LandingPage(){
    const [open, setOpen] = useState(false)
  const [submenuOpen, setsubmenuOpen] = useState(false)

  const Menus = [
    { title: "New PDF" },
    { title: "Show PDF", icon: <BiShow /> },
    { title: "Change API Key", spacing: true, icon: <MdOutlineChangeCircle /> },
    {
      title: "Recents",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "submenu 1" },
        { title: "submenu 2" },
        { title: "submenu 3" }

      ],
    },
    { title: "ABC", icon: <AiOutlineBarChart /> },
    { title: "Twitter", icon: <FaTwitter /> },
    { title: "Report Bug", spacing: true, icon: <BsBugFill /> },
    { title: "Contact Us", icon: <AiFillContacts /> },
    { title: "Logout", icon: <AiOutlineLogout /> }
  ];

  return (
<>
    <div className="flex">
      <div className={`bg-dark-purple h-screen p-5 pt-8  ${open ? "w-38" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white tex-dark-purple text-3xl rounded-full  border border-dark-purple cursor-pointer absolute -right-3 top-9 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex   ">
          <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}> Chat UI</h1>
        </div>


        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"} `}>
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <AiFillFolderAdd />}
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                  {menu.title}</span>
                {menu.submenu && open && (
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() =>
                    setsubmenuOpen(!submenuOpen)} />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li key={index} className={`text-gray-300 text-sm flex 
                  items-center gap-x-4 
                  cursor-pointer p-2
                   hover:bg-light-white 
                   rounded-md ${menu.spacing ? "mt-9" : "mt-2"} mt-2`}>

                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>

      <div className="flex items-end  justify-between gap-4 px-4 py-2 w-screen bg-white border rounded-lg dark:bg-transparent border-primary dark:border-semiLightText">
        <input type="text" className="w-full rounded-md  bg-transparent outline-none ring-0 disabled:cursor-not-allowed" placeholder="Your message..." />
        <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
          <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>

    </div>
    </>


  )
}

export default LandingPage
