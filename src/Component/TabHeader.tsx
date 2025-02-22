import { useState } from "react";

interface TabHeaderProps {
    tabs: string[]
}
const TabHeader = ({tabs} : TabHeaderProps) => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <>

        {/* Top part / Tabs */}
        <div className="border-1 border-[#c5c5c5] shadow-sm">
            <div className="w-full px-60 py-2 flex justify-start">
                <div className="hidden sm:block">
                    <nav className="flex" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <button
                            key={tab}
                            className={`shrink-0 p-3 text-sm font-bold no-underline !rounded-md
                                ${
                                    activeTab === tab.toLowerCase()
                                    ? "bg-[#EBE5FC] text-[#2b2b2b]"
                                    : "text-[#2b2b2b] hover:bg-gray-100 hover:text-gray-700"
                                }`}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
        {/* Content part */}
        <div className="px-60 py-12 min-h-screen">
            {activeTab === "description" && (
                <div className="">
                    <h1>A</h1>
                </div>
            )}
            {activeTab === "rules" && (
                <div className="">
                    <h1>B</h1>
                </div>
            )}
            {activeTab === "requirements" && (
                <div className="">
                    <h1>C</h1>
                </div>
            )}
            {activeTab === "participants" && (
                <div className="">
                    <h1>D</h1>
                </div>
            )}
            {activeTab === "resources" && (
                <div className="">
                    <h1>E</h1>
                </div>
            )}
            {activeTab === "submissions" && (
                <div className="">
                    <h1>F</h1>
                </div>
            )}
            {activeTab === "schedule" && (
                <div className="">
                    <h1>G</h1>
                </div>
            )}
        </div>
        </>
    );
};

export default TabHeader;
