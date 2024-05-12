export default function FAQ() {
    return (
        <div className="mt-[180px] ml-[120px]" >
            <span className=" faq font-inter font-bold text-5xl">FAQ</span>
            <div className="flex-col mt-[100px] w-[900px] h-[300px]">
                <div className='border-[1px]  border-[#082299] rounded-2xl'>
                    <select name="" id="" disabled className="font-inter text-[16px] font-semibold text-[#28262C] w-[848px] h-[60px] disabled:opacity-100 pl-[20px] ml-[20px] ">
                        <option>Can education flashcards be used for all age groups?</option>
                    </select>
                </div>

                <div className='mt-[35px] border-[1px] border-[#082299] rounded-2xl '>
                    <select name="" id="" disabled className="font-inter text-[16px] font-semibold text-[#28262C] w-[848px] h-[60px] disabled:opacity-100 pl-[20px] ml-[20px] ">
                        <option value="">How do education flashcards work?</option>
                    </select>
                </div>

                <div className='mt-[35px] border-[1px] border-[#082299] rounded-2xl'>
                    <select name="" id="" disabled className=" font-inter text-[16px] font-semibold text-[#28262C] w-[848px] h-[60px] disabled:opacity-100 pl-[20px] ml-[20px]">
                        <option value="">Can education flashcards be used for test preparation?</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
