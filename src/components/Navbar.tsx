import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
            <Link href="/">
               <h1 className="text-2xl font-extrabold text-lime-900 tracking-tighter">
                bimal
               </h1>
            </Link>
            <div className="flex items-center gap-4">
                <Link
                  href="#products"
                  className="text-lime-950 font-medium tracking-tight hover:text-lime-900 transition-all duration-300"
                >
                    Products
                </Link>
                <button className="bg-lime-600 text-white font-medium px-4 py-2 hover:text-lime-700 transition-all duration-300 rounded-lg">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;