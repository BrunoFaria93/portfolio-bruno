import React from "react";
const Header = () => {
  return (
    <header className="py-5 bg-transparent relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* <a href="#">
                        <img className="absolute w-28 -top-0 left-4" src={require("../assets/logo.png")} alt="logo" />
                    </a> */}
          <button
            className="btn btn-sm ml-auto"
            onClick={() =>
              window.open(
                "https://wa.me/55085996056772?text=Ol%C3%A1%2C%20eu%20vim%20do%20seu%20site%20portfólio%20e%20gostaria de trocar uma ideia!",
                "_blank"
              )
            }
          >
            Trabalhe comigo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
