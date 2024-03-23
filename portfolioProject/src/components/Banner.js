import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="section min-h-[85vh] lg:min-h-[78vh] flex items-center lg:pt-0"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amout: 0.7,
              }}
              className="text-[45px] font-bold leading-[0.8] lg:text-[110px]"
            >
              MILENE <span>SOUSA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amout: 0.7,
              }}
              className="mb-6 text-[36px] flex flex-col lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mt-3 text-[25px]">DESIGNER DE MODA</span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amout: 0.7,
              }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Sou uma designer de moda apaixonada por transformar ideias em
              realidade através das minhas criações. Cada peça que desenvolvo é
              uma expressão única de estilo e personalidade, buscando sempre
              inovar e surpreender.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amout: 0.7,
              }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button
                className="bg-[#8b5cf6] px-5 py-2 rounded-full text-white font-bold text-lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/55085996056772?text=Ol%C3%A1%2C%20eu%20vim%20do%20seu%20site%20portfólio%20e%20gostaria de trocar uma ideia!",
                    "_blank"
                  )
                }
              >
                Contato
              </button>
              <Link to="work" activeClass="active" smooth={true} spy={true}>
                <a href="work" className="text-gradient btn-link">
                  Meu Portfólio
                </a>
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            {/* <img className="h-[400px]" src={Image} alt=""></img> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
