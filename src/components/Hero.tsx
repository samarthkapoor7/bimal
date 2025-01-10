import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto pt-12 px-4 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center pt-8">
                <h1 className="text-6xl font-extrabold text-lime-950 tracking-tighter">
                    Bolo Zubaan <span className="text-lime-50">Canceri</span>
                </h1>
                <p className="text-xl text-lime-950">
                  More you eats, sooner you dies  
                </p>
            </div>
            <Image
               src="/hero-image.png"
               alt="Bolo Zubaan Canceri"
               width={500}
               height={500}
               className="w-[40%] h-full object-contain"
               unoptimized
            />
        </section>
    );
};

export default Hero;