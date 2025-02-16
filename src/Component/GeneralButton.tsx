
function GeneralButton({text}) {
    const buttonText = text;
    return (
        <button className="px-[40px] py-[5px] text-[10px] 
            bg-[#FAFAFA] text-[#2b2b2b] font-bold 
            !rounded-xl border-[#2b2b2b] border-[1px] 
            hover:bg-[#8F83FF] hover:text-[#FAFAFA] hover:border-[#8F83FF] transition-all ease-in-out duration-300" >
            {buttonText}
        </button>
    );
};

export default GeneralButton