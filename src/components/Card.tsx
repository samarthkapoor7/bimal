import Image from "next/image";
import React from "react";

const Card = () => {
    return (
        <div className="w-full h-full bg-lime-100 rounded-2xl flex flex-col md:flex-row items-center justify-center p-6 gap-12">
            <Image 
               src="/card-image.png"
               alt="Card Image"
               width={270}
               height={270}
               className="object-contain"
            />
            <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                    <h3 className="lg:text-2xl text-xl font-semibold text-lime-950 tracking-tighter">
                        <span className="text-lime-600">bimal</span> Elaichi
                    </h3>
                    <p className="lg:text-lg text-lime-950">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
                        Die Now
                    </button>
                    <button className="bg-lime-50 text-lime-950 px-4 py-2 rounded-lg hover:bg-lime-50/50 transition-all duration-300">
                        Die Later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;