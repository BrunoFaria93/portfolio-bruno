import React from "react";
const Header = () => {
    return (
        <header className="py-5 bg-transparent relative overflow-hidden">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* <a href="#">
                        <img className="absolute w-28 -top-0 left-4" src={require("../assets/logo.png")} alt="logo" />
                    </a> */}
                    <button className="btn btn-sm ml-auto">Trabalhe comigo</button>
                </div>
            </div>
        </header>
    )
}

export default Header