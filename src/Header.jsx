import logo from "./assets/logo.png"
import H from "./assets/H.png"
import Y from "./assets/Y.png"
import G_1 from "./assets/G_1.png"
import G_2 from "./assets/G_2.png"
import E from "./assets/E.png"
import X from "./assets/X.png"


export default function Header() {
    return (
        <section className="header flex">
            <span className="flex items-center w-48 h-10 mt-8 ml-28">
                <img src={logo} className="w-12 h-10" alt="hyggex_logo" />
                <img src={H} alt="" />
                <img src={Y} alt="" />
                <img src={G_1} alt="" />
                <img src={G_2} alt="" />
                <img src={E} alt="" />
                <img src={X} alt="" />
            </span>

            <nav className="w-[550px] h-12 flex justify-evenly items-center mt-8 ml-[812px]">
                <a href="" className="text-xl font-normal font-inter">Home</a>
                <a href="" className="text-xl font-normal font-inter">Flashcard</a>
                <a href="" className="text-xl font-normal font-inter">Contact</a>
                <a href="" className="text-xl font-normal font-inter">FAQ</a>
                <button className="w-32 h-12 text-xl font-normal font-inter text-[#FFFF] rounded-[32px]">Login</button>
            </nav>
        </section>
    )
}
