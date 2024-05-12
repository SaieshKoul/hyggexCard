import addimg from "./assets/add.png"
export default function CreateCard() {
    return (
        
        <div className="flex w-[400px] h=[60px] items-center justify-evenly mt-[-85px] ml-[1275px]">
            <img src={addimg} alt="addicon" className="w-[50px] h-[50px]" />
            <span className="createcard font-bold font-inter text-3xl">Create FlashCard</span>
        </div>
        
    )
}
