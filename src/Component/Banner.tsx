interface BannerImage {
    image: string
}
const HostBanner = ({image} : BannerImage) => {
    return (
        <div className="relative w-full h-[30vh] overflow-hidden mt-0.5 mx-auto">
            <img src={image} alt="Hackathon Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-gray-900"></div>
            </div>
        </div>
    )
}

export default HostBanner
