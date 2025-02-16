import { Bookmark } from "lucide-react"; // Lucide icon (alternative: FontAwesome)

const BookmarkButton = () => {
    return (
        <button className="relative flex items-center justify-center w-16 h-12 !rounded-xl border-2 border-black bg-transparent 
        hover:!bg-[#8F83FF] hover:!text-[#FAFAFA] hover:!border-[#8F83FF] transition-all ease-in-out duration-300">
            {/* Icon */}
            <Bookmark className="w-6 h-6 text-black" />

            {/* Background Fix (Optional) */}
            <div className="absolute inset-0 bg-white rounded-xl -z-10"></div>
        </button>
    );
};

export default BookmarkButton