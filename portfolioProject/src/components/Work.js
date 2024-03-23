import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/hotelProject.jpg";
import Img2 from "../assets/blitzbeePhoto.png";
import Img3 from "../assets/projeto3.png";

const Work = () => {
  return (
    <section className="py-8 lg:py-24 lg:h-screen flex items-center" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amout: 0.3,
            }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                Portfólio de Projetos <br />
              </h2>
              <p className="max-w-sm mb-16">
                Clique em uma das imagens abaixo para abrir projetos que fiz
                usando Reactjs, JS, HTML, CSS, entre outras tecnologias.
              </p>
              <button className="text-accent font-semibold text-gradient">
                Veja todos os projetos!
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amout: 0.3,
            }}
            className="flex-1 flex flex-col gap-y-10 lg:gap-y-5 h-[800px]"
          >
            <div className="group relative border-2 border-white/50 rounded-xl h-auto overflow-hidden">
              <a
                className="cursor-pointer group-hover:bg-black/70 w-full h-full absolute 
              z-40 text-transparent transition-all duration-30"
                href="https://hotel-project-three.vercel.app"
              >
                a
              </a>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
                 transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
                 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Bruno's Hotel</span>
              </div>
            </div>
            <div className="group relative border-2 border-white/50 rounded-xl h-auto overflow-hidden">
              <a
                href="https://blitzbee-bruno.vercel.app"
                className="text-transparent cursor-pointer group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              >
                a
              </a>
              <img
                className="group-hover:scale-125 object-cover transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
                 transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
                 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">BlitzBee - Rede Social</span>
              </div>
            </div>
            <div className="group relative border-2 border-white/50 rounded-xl h-auto overflow-hidden">
              <a
                href="https://chat-bruno-react.vercel.app"
                className="text-transparent cursor-pointer group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              >
                a
              </a>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
                 transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
                 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Chat</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
