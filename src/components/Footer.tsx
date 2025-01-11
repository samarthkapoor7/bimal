import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="py-4 px-4 flex items-center justify-center flex-col gap-4">
            <div className="flex flex-col items-center justify-center gap-2 max-w-sm">
                <Link href="/">
                  <h1 className="text-2xl font-extrabold text-lime-50 tracking-tighter hover:text-lime-700 transition-all duration-300">
                    bimal
                  </h1>
                </Link>
                <p className="text-sm text-lime-50 text-center">
                  Bimal cannot be held accountable for any health issues, including
                  cancer, that may arise from consumption.
                </p>
            </div>
            <p className="text-sm text-lime-100">
               &copy; {new Date().getFullYear()} Bolo Zubaan Canceri. All rights
               reserved.
            </p>
        </footer>
    );
};

export default Footer;