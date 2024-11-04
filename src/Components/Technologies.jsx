import { RiReactjsLine } from "react-icons/ri"
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si"
import { TbBrandCpp, TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs } from "react-icons/tb"
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { FaGitAlt, FaSass } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import {motion} from "framer-motion"

const iconVarients = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="pb-20 flex flex-col items-center" id="technologies">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-150}}
        transition={{duration:1.5,}}
        className="my-16 text-center font-semibold text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center w-[90%] xl:w-[80%] justify-center gap-4">
            
            <motion.div 
             initial="initial"
             animate="animate"
             variants={iconVarients(2.0)}
            className="p-4">
                <TbBrandHtml5 className="text-7xl text-orange-400" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(2.0)}
            className="p-4">
                <TbBrandCss3 className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(1.75)}
            className="p-4">
                <TbBrandJavascript className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(2.0)}
            className="p-4">
                <RiReactjsLine className="text-7xl text-cyan-400 "/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(2.25)}
            className="p-4">
               <SiTailwindcss className="text-7xl text-cyan-400" />
             </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(2.5)}
            className="p-4">
               <FaSass className="text-7xl text-pink-600" />
             </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(2.0)}
            className="p-4">
                <TbBrandNextjs className="text-7xl" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(1.75)}
            className="p-4">
                <IoLogoNodejs className="text-7xl text-green-400" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(2.0)}
            className="p-4">
                <SiExpress className="text-7xl text-black px-1 text-bold rounded-full bg-yellow-400" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(2.25)}
            className="p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(2.5)}
            className="p-4">
                <SiMysql className="text-7xl text-[#0075bf]" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(2.0)}
            className="p-4">
            <TbBrandCpp className="text-7xl" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(1.75)}
            className="p-4">
            <FaGitAlt className="text-7xl text-red-500"  />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(2.0)}
            className="p-4">
            <FaSquareGithub className="text-7xl "  />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVarients(2.25)}
            className="p-4">
            <IoLogoFirebase className="text-7xl text-yellow-500"/>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies
