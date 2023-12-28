import React, { useState} from "react";
import { Link, NavLink } from "react-router-dom";
import MenuBar from "../../Images/menu-bar.png";
import Close from "../../Images/close.png";
import OnClickSound from "../../Helpers/OnClickSound";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        {
            title: "Home",
            path: "/#home",
        },
        {
            title: "About",
            path: "/#about",
        },
        {
            title: "Skills",
            path: "/#skills",
        },
        {
            title: "Services",
            path: "/#services",
        },

        {
            title: "Portfolio",
            path: "/#portfolio",
        },
        {
            title: "Blogs",
            path: "/#blogs",
        },
        {
            title: "Contact",
            path: "/#contact",
        },
    ];

    const menuHandler = () => {
        OnClickSound("/keypress.mp3").catch()
        setMenuOpen(value => !value)
    };

    return (
        <nav className="fixed z-50   w-screen">

            <div
                className={`  ${menuOpen ? " m-3 rounded-xl bg-gradient-to-tr from-[#5e2594ec] to-[#270257fd]" +
                    " lg:from-[#0a0e36] lg:to-[#0a0e36] lg:m-0 lg:rounded-none" : " bg-gradient-to-tr from-[#0a0e36] to-[#0a0e36] "} ${!menuOpen && " bg-[#0a0e36]"}`}>
                <div>
                    <div className="flex  justify-between items-center md:px-8 px-5 py-4   ">
                        <div>
                            <Link to="/#home">
                                <button
                                    onClick={()=>OnClickSound("/keypress.mp3")}
                                     className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text text-[22px] font-bold font-['Roboto'] tracking-[2px] ">Rukon.PRO</button>
                            </Link>

                        </div>

                        <div className=" hidden lg:block">

                            <div>
                                <ul className="flex items-center gap-5 text-white font-bold px-5 text-xl  ">
                                    {
                                        navLinks?.map((nav, index) =>
                                            <li className="animated-button" key={index}>
                                                <a href={nav?.path}>
                                                    <button
                                                        onClick={()=>OnClickSound("/keypress.mp3")}
                                                        className="tracking-[2px] text-[#fccdff]">
                                                        {nav?.title}
                                                    </button>
                                                </a>
                                            </li>
                                        )
                                    }
                                    <li>
                                        <button
                                            className=" bg-gradient-to-r from-[#5e2594ec] to-[#270257fd] px-5 py-1 rounded-lg  animated-button tracking-[3px]  text-[#fccdff]"
                                            onClick={() =>{
                                                document.getElementById("loginModal").showModal()
                                                OnClickSound("/keypress.mp3").catch()
                                            }}><span
                                            className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">Login</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button id="threeDotButton" onClick={menuHandler}
                                className="lg:hidden p-2  bg-gradient-to-tr from-[#030b55ec] to-[#994cd0f5] rounded-full block">
                            {
                                !menuOpen ? <img className="h-5 w-5" src={MenuBar || undefined} alt="icon"/> :
                                    <img className="h-5 w-5" src={Close || undefined} alt="icon"/>
                            }
                        </button>
                    </div>
                </div>

                <div className={`lg:hidden p-1 rounded-b-xl  ${menuOpen ? "block" : "hidden"}`}>


                    <ul className=" text-white font-bold  text-xl   ">
                        {
                            navLinks?.map((nav, index) =>
                                <li key={index}>
                                    <NavLink to={nav?.path}
                                             onClick={() => {
                                                 OnClickSound("/keypress.mp3").catch()
                                                 setMenuOpen(false)
                                             }}
                                             className="animated-button w-full rounded-l-full inline-block transition-opacity hover:bg-gradient-to-l hover:transition-opacity   from-[#9a4cd00d] to-[#270257fd] px-5 py-3 tracking-[2px] text-[#fccdff]">{nav?.title}</NavLink>
                                </li>
                            )
                        }
                        <li className=" bg-gradient-to-l from-[#0a0cd00d] to-[#9a4cd09d] px-5 py-3 rounded-l-full my-3 animated-button w-full">
                            <button type="button" id="loginbuttion1"
                                    onClick={() => {
                                        OnClickSound("/keypress.mp3").catch()
                                        document.getElementById("loginModal").showModal()

                                    }}
                                    className="w-full tracking-[3px] "><span
                                className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">Login</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>


        </nav>
    );
};

export default Navigation;