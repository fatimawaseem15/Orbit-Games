import React from "react";

export default function Banner() {
    return (
        <div className="Banner">
            <div className="container">
                <h2 className="font-Neuropolitical text-3xl sm:text-4xl lg:text-5xl mb-4">Web3 Gaming in Orbit on Orb</h2>
                <div className="sub_container">
                <h1 className="mb-2 text-2xl sm:text-3xl">Play,</h1>
                <h1 className="text-2xl sm:text-3xl">Prosper, Build</h1>
                </div>
                <button type="button" className="mt-10 text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                    Read Whitepaper
                </button>
            </div>
        </div>
    );
}
