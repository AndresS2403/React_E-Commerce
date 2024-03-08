import React from "react";

const NavBar = () => {
    return (
    <div className="sticky top-0 bg-white z10">
        <div className="container hidden lg:block">
            <div className="flex justify-between items-center p-8">
                <h1 className="text-4x1 font-medium">Logo</h1>
                <div className="relative w-full max-w-[500px]">
                    <input className="bg-[#f2f3f5] border-none" type="text" placeholder="Buscar Bebidas.." />
                </div>
            </div>
        </div>
    </div>
    )
}

export default NavBar;