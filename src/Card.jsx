import hint from "./assets/hint.png"
import volume from "./assets/volume.png"
import reset from "./assets/reset.png"
import backward from "./assets/backward.png"
import forward from "./assets/forward.png"
import fullscreen from "./assets/fullscreen.png"

export default function Card() {

    return (
        <section>
            <div className="card">
                <div className="flex mt-[40px] justify-center items-center w-[712px] h-96 ml-[520px] relative rounded-[44px]">
                    <img src={hint} alt="hinticon" className="absolute left-8 top-4 w-5 h-7" />
                    <img src={volume} alt="volumeicon" className="absolute top-5 right-8 w-6 h-6" />
                    <span className="text-[#FFFFFF] font-lato font-bold text-4xl"> 9 + 6 + 7x - 2x - 3</span>
                </div>
            </div>
            <div className="flex justify-evenly items-center w-[612px] h-[60px] ml-[575px] mt-[40px]">
                <img src={reset} alt="" className="w-[30px] h-[30px]" />
                <img src={backward} alt="" className="w-[60px] h-[60px]" />
                <span className="font-inter font-bold text-[#202B37]">01/10</span>
                <img src={forward} alt="" className="w-[60px] h-[60px]" />
                <img src={fullscreen} alt="" className="w-[30px] h-[30px]" />
            </div>
        </section>
    )
}
