import Profile_pic from "../assets/Profile_pic.jpg"
import { HERO_CONTENT } from "../constant/constant"
import {motion} from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8, 
            staggerChildren: 0.3, 
            when: "beforeChildren" 
        }
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5, ease: "easeInOut" } } 
};

const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } } 
};


const Header = () => {
  return (
    <div className="pl-2 pb-4 lg:mb-36" id="header">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full  lg:w-1/2">
                <div className="flex justify-center  lg:p-8">
                    <motion.img src={Profile_pic} alt="ProfilePicture" className="border border-stone-900 rounded-3xl" 
                    initial={{x:100, opacity:0}}
                    animate={{x:0,opacity:1}}
                    width={650}
                    transition={{duration:1, delay:1.5}}/>
                </div>  

            </div>
            <div className="w-full lg:w-1/2">
                <motion.div 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="flex flex-col items-center lg:items-start mt-10">
                    <motion.h2
                    variants={childVariants}
                    className="pb-2 text-4xl  tracking-tighter lg:text-6xl font-sans ">Nikhil Wakode</motion.h2>
                    <motion.span
                    variants={childVariants}
                    className="bg-gradient-to-r from-stone-300 to bg-stone-500 bg-clip-text text-3xl tracking-tight text-transparent">FullStack Developer</motion.span>
                    <motion.p
                    variants={childVariants}
                    className="my-2 max-w-lg py-6 text-xl leading-relaxed">{HERO_CONTENT}</motion.p>
                    <motion.a 
                    variants={childVariants}
                    href="./NikhilWakode.pdf" target="_blank" rel="noopener noreferer" download={"Resume.pdf"} className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
                    Download Resume</motion.a>
                </motion.div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
