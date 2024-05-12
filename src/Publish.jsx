import logo from './assets/logo.png'
import H from "./assets/H.png"
import Y from "./assets/Y.png"
import G_1 from "./assets/G_1.png"
import G_2 from "./assets/G_2.png"
import E from "./assets/E.png"
import X from "./assets/X.png"

export default function Publish() {
    return (
        <section className='w-[300px] h-[100px] flex justify-evenly items-center ml-28 mt-[80px] relative'>
            <div className='flex justify-center items-center  bg-[#FFFF] w-[100px] h-[100px] rounded-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
                <img src={logo} alt="hyggexlogo" className='w-[50px] h-[45px]' />
            </div>
            <div className='flex-col'>
                <span className='font-inter font-bold text-[#696671] absolute top-[5px]'>Published by</span>
                <span className='flex'>
                    <img src={H} alt="" className='w-[20px] h-[22px]' />
                    <img src={Y} alt="" className='w-[20px] h-[22px]' />
                    <img src={G_1} alt="" className='w-[20px] h-[22px]' />
                    <img src={G_2} alt="" className='w-[20px] h-[22px]' />
                    <img src={E} alt="" className='w-[20px] h-[22px]' />
                    <img src={X} alt="" className='w-[25px] h-[22px]' />
                </span>
            </div>

        </section>
    )
}
