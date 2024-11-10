import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import Page1Bottom from '../components/Page1Bottom'
import TiltText from '../components/TiltText'


import { close, logo, menu } from "../assets"
import { navLinks } from "../constants"
import { styles } from "../styles"
const Page1 = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };


        window.addEventListener("scroll", handleScroll);


        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    if (location.pathname !== "/") return null;

    const tiltRef = useRef(null)
    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)
    const mouseMoving = (e) => {
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 50)
        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 50)



    }

    useGSAP(function () {
        gsap.to(tiltRef.current, {
            transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration: 2,
            ease: 'power4.out'
        })
    }, [xVal, yVal])

    return (
        // <div id='page1' onMouseMove={(e) => { mouseMoving(e) }} className='h-screen sm:p-7 relative w-full '>


        //     <div id='page1-in' className=' relative shadow-xl sm:p-[2vw]  shadow-gray-700 h-[100%] bg-contain w-full bg-[url(https://media.istockphoto.com/id/1341606908/photo/beautiful-and-simple-background-of-black.jpg?s=612x612&w=0&k=20&c=tqCraKd0jwUygttJ6n6tzKJNR0Rg1LQ6hDuoWur0VQ4=)] rounded-[50px] bg-no-repeat'>
        //         <nav
        //             className={`${styles.paddingX
        //                 } w-full flex items-center py-5 mt-0 top-0 z-20 ${scrolled ? "bg-primary" : "display-none"
        //                 }`}
        //         >
        //             <div className='  w-full flex justify-between items-center max-w-7xl mx-auto'>
        //                 <Link
        //                     to='/'
        //                     className='flex items-center gap-2'
        //                     onClick={() => {
        //                         setActive("");
        //                         window.scrollTo(0, 0);
        //                     }}
        //                 >
        //                     <img src={logo} alt='logo' className='w-20 h-20 object-contain' />
        //                     <p className='text-white text-[40px] font-bold cursor-pointer flex '>
        //                         Hitesh &nbsp;
        //                         <span className='sm:block hidden'> |Portfolio</span>
        //                     </p>
        //                 </Link>

        //                 <ul className='list-none hidden sm:flex flex-eow gap-8 ml-[10vw] '>
        //                     {navLinks.map((nav) => (
        //                         <li
        //                             key={nav.id}
        //                             className={`${active === nav.title ? "text-[##FFFFFF]" : "text-[##FFFFFF]"
        //                                 } bg-[#FF4A3F] border-0 px-4 py-2 rounded-full text-l hover:bg-gray-500  text-[18px] font-medium cursor-pointer`}
        //                             onClick={() => setActive(nav.title)}
        //                         >
        //                             <a href={`#${nav.id}`}>{nav.title}</a>
        //                         </li>
        //                     ))}
        //                 </ul>
        //                 {/* //for small devices */}
        //                 <div className='sm:hidden flex flex-1 justify-end items-center'>
        //                     <img
        //                         src={toggle ? close : menu}
        //                         alt='menu'
        //                         className='w-[28px] h-[28px] object-contain cursor-pointer'
        //                         onClick={() => setToggle(!toggle)}
        //                     />

        //                     <div
        //                         className={`${!toggle ? "hidden" : "flex"
        //                             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        //                     >
        //                         <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
        //                             {navLinks.map((nav) => (
        //                                 <li
        //                                     key={nav.id}
        //                                     className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
        //                                         }`}
        //                                     onClick={() => {
        //                                         setToggle(!toggle);
        //                                         setActive(nav.title);
        //                                     }}
        //                                 >
        //                                     <a href={`#${nav.id}`}>{nav.title}</a>
        //                                 </li>
        //                             ))}
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </nav>

        //         {/* <img className='h-32 ' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" /> */}
        //         <TiltText abc={tiltRef} />

        //         <div className='absolute xs:bottom-10 bottom-2 w-full flex justify-center items-center'>
        //             <div className='w-[35px] h-[64px]  rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-red-600'>
        //                 <motion.div
        //                     animate={{
        //                         y: [0, 24, 0],
        //                     }}
        //                     transition={{
        //                         duration: 1.5,
        //                         repeat: Infinity,
        //                         repeatType: "loop",
        //                     }}
        //                     className='w-3 h-3 rounded-full bg-white mb-1'
        //                 />
        //             </div>
        //         </div>

        //         <Page1Bottom />

        //     </div>
        // </div>
        // <div id='page1' onMouseMove={(e) => { mouseMoving(e) }} className='sm:h-[100vh]  p-4 sm:p-7 relative w-full bg-red-600'>

        //     <div id='page1-in' className='relative shadow-xl p-[5vw] sm:p-[2vw] shadow-gray-700 sm:h-full bg-contain w-full bg-[url(https://media.istockphoto.com/id/1341606908/photo/beautiful-and-simple-background-of-black.jpg?s=612x612&w=0&k=20&c=tqCraKd0jwUygttJ6n6tzKJNR0Rg1LQ6hDuoWur0VQ4=)] rounded-[30px] sm:rounded-[50px] bg-red-600'>
        //         <nav
        //             className={`${styles.paddingX} w-full flex items-center py-3 sm:py-5 mt-0 top-0 z-20 ${scrolled ? "bg-primary" : "display-none"}`}
        //         >
        //             <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        //                 <Link
        //                     to='/'
        //                     className='flex items-center gap-2'
        //                     onClick={() => {
        //                         setActive("");
        //                         window.scrollTo(0, 0);
        //                     }}
        //                 >
        //                     <img src={logo} alt='logo' className='w-16 h-16 sm:w-20 sm:h-20 object-contain' />
        //                     <p className='text-white text-[28px] sm:text-[40px] font-bold cursor-pointer flex'>
        //                         Hitesh &nbsp;
        //                         <span className='sm:block hidden'> | Portfolio</span>
        //                     </p>
        //                 </Link>

        //                 <ul className='list-none hidden sm:flex flex-eow gap-4 sm:gap-8 ml-[10vw]'>
        //                     {navLinks.map((nav) => (
        //                         <li
        //                             key={nav.id}
        //                             className={`${active === nav.title ? "text-white" : "text-white"
        //                                 } bg-[#FF4A3F] border-0 px-4 py-2 rounded-full text-sm sm:text-l hover:bg-gray-500 text-[16px] sm:text-[18px] font-medium cursor-pointer`}
        //                             onClick={() => setActive(nav.title)}
        //                         >
        //                             <a href={`#${nav.id}`}>{nav.title}</a>
        //                         </li>
        //                     ))}
        //                 </ul>

        //                 {/* Small screen menu */}
        //                 <div className='sm:hidden flex flex-1 justify-end items-center'>
        //                     <img
        //                         src={toggle ? close : menu}
        //                         alt='menu'
        //                         className='w-[28px] h-[28px] object-contain cursor-pointer'
        //                         onClick={() => setToggle(!toggle)}
        //                     />

        //                     <div
        //                         className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        //                     >
        //                         <ul className='list-none flex flex-col gap-4'>
        //                             {navLinks.map((nav) => (
        //                                 <li
        //                                     key={nav.id}
        //                                     className={`font-poppins font-medium cursor-pointer text-[14px] ${active === nav.title ? "text-white" : "text-secondary"}`}
        //                                     onClick={() => {
        //                                         setToggle(!toggle);
        //                                         setActive(nav.title);
        //                                     }}
        //                                 >
        //                                     <a href={`#${nav.id}`}>{nav.title}</a>
        //                                 </li>
        //                             ))}
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </nav>

        //         <TiltText abc={tiltRef} />

        //         <div className='absolute xs:bottom-10 bottom-2 w-full flex justify-center items-center'>
        //             <div className='w-[25px] h-[44px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-red-600'>
        //                 <motion.div
        //                     animate={{
        //                         y: [0, 24, 0],
        //                     }}
        //                     transition={{
        //                         duration: 1.5,
        //                         repeat: Infinity,
        //                         repeatType: "loop",
        //                     }}
        //                     className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white mb-1'
        //                 />
        //             </div>
        //         </div>

        //         <Page1Bottom />
        //     </div>
        // </div>
        <div
            id='page1'
            onMouseMove={(e) => { mouseMoving(e) }}
            className='relative w-full h-screen p-4 sm:p-7'
        >
            <div
                id='page1-in'
                className='relative shadow-xl p-[6vw] sm:p-[2vw] shadow-gray-700 bg-[] bg-cover bg-center h-full w-full rounded-[20px] sm:rounded-[50px] bg-no-repeat'
                style={{
                    backgroundImage: `url(./assets/hit2.jpg)`,
                }}
            >
                <nav
                    className={`${styles.paddingX} w-full flex items-center py-3 sm:py-5 top-0 z-20 ${scrolled ? "bg-primary" : "display-none"}`}
                >
                    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                        <Link
                            to='/'
                            className='flex items-center gap-2'
                            onClick={() => {
                                setActive("");
                                window.scrollTo(0, 0);
                            }}
                        >
                            <img src={logo} alt='logo' className='w-14 h-14 sm:w-20 sm:h-20 object-contain' />
                            <p className='text-white text-[28px] sm:text-[40px] font-bold cursor-pointer flex'>
                                Hitesh &nbsp;
                                <span className='hidden sm:block'>| Portfolio</span>
                            </p>
                        </Link>

                        <ul className='hidden sm:flex flex-row gap-4 sm:gap-8 ml-[5vw]'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`text-white bg-[#FF4A3F] px-3 py-2 rounded-full text-sm sm:text-[18px] font-medium cursor-pointer hover:bg-gray-500`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>

                        {/* Small screen menu */}
                        <div className='sm:hidden flex flex-1 justify-end items-center'>
                            <img
                                src={toggle ? close : menu}
                                alt='menu'
                                className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] object-contain cursor-pointer'
                                onClick={() => setToggle(!toggle)}
                            />

                            <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                                <ul className='flex flex-col gap-4'>
                                    {navLinks.map((nav) => (
                                        <li
                                            key={nav.id}
                                            className='font-medium cursor-pointer text-[14px] text-white'
                                            onClick={() => {
                                                setToggle(!toggle);
                                                setActive(nav.title);
                                            }}
                                        >
                                            <a href={`#${nav.id}`}>{nav.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <TiltText abc={tiltRef} />

                <div className='absolute bottom-4 sm:bottom-10 w-full flex justify-center items-center'>
                    <div className='w-[25px] h-[44px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white mb-1'
                        />
                    </div>
                </div>

                <Page1Bottom />
            </div>
        </div>

    )
}

export default Page1