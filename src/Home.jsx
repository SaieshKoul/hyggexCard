import homeimg from "./assets/home.png"
import tag from './assets/tag.png'

export default function Home() {
    return (
        <span>
            <div className="home flex justify-evenly items-center w-[487px] h-7 mt-32 ml-28">
                <img src={homeimg} alt="homeicon" />
                <img src={tag} alt="tag" />
                <span className="text-xl font-inter text-[#696671]">Flashcard</span>
                <img src={tag} alt="tag" />
                <span className="text-xl font-inter text-[#696671]">Mathematics</span>
                <img src={tag} alt="tag" />
                <span className="text-[#06286E] text-xl font-inter">Relation and Function</span>
            </div>
            <div className=" topic ml-[120px] mt-20 w-[676px]">
                <span className="text-3xl font-bold font-monsterrat">Relations and Functions ( Mathematics )</span>
            </div>
        </span>
    )
}
