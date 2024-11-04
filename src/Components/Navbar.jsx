import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo from "../assets/logo.png"
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className='flex pl-2 items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center w-[60px] '>
        <a href="/" aria-label="Home">
            <img src={logo} alt="Logo" className="mx-2 " 
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center"
              }}></img>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/wakode-nikhil/" 
        target="_blank"
        rel="noopener noreferer"
        aria-label="LinkedIn">
            <FaLinkedin className="hover:scale-110 transition-all duration-200" />
        </a>
        <a href="https://github.com/NikhilNWakode" 
        target="_blank"
        rel="noopener noreferer"
        aria-label="GitHub">
            <FaGithub className="hover:scale-110 transition-all duration-200" />
        </a>
        <a href="https://x.com/NikhilWakode003?t=GUAAE7R13NizTN0-g8FsIQ&s=09" 
        target="_blank"
        rel="noopener noreferer"
        aria-label="Twitter">
            <FaSquareXTwitter className="hover:scale-110 transition-all duration-200" />
        </a>
        <a href="https://www.instagram.com/nikhil__wakode358/" 
        target="_blank"
        rel="noopener noreferer"
        aria-label="Instagram">
            <FaInstagram className="hover:scale-110 transition-all duration-200" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
