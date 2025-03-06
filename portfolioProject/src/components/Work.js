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
              <p className="max-w-sm mb-5">
                Clique em uma das imagens abaixo para abrir projetos que fiz
                usando Reactjs, JS, HTML, CSS, entre outras tecnologias.
              </p>
            </div>
            <div className="w-full flex justify-center items-center gap-5">
              <div className="group relative border-2 border-white/50 rounded-xl overflow-hidden w-1/3 h-[180px]">
                <a
                  className="cursor-pointer group-hover:bg-black/70 w-full h-[200px] absolute 
              z-20 text-transparent transition-all duration-30"
                  href="https://hotel-project-three.vercel.app"
                >
                  a
                </a>
                <img
                  className="group-hover:scale-125 transition-all duration-500 h-full object-cover"
                  src={Img1}
                  alt=""
                />
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-24
                 transition-all duration-500 z-40"
                >
                  <span className="text-gradient">Site de hotel</span>
                </div>
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-14
                 transition-all duration-700 z-40"
                >
                  <span className="text-3xl text-white">Bruno's Hotel</span>
                </div>
              </div>
              <div className="group relative border-2 border-white/50 rounded-xl overflow-hidden  w-1/3 h-[180px]">
                <a
                  href="https://blitzbee-bruno.vercel.app"
                  className="group w-full h-full cursor-pointer block relative"
                >
                  <div className="absolute inset-0 bg-[#310E68] group-hover:bg-black/70 transition-all duration-300 z-30"></div>
                  <img
                    className="group-hover:scale-125 object-cover transition-all duration-500 ml-auto mr-auto z-30 relative"
                    src={Img2}
                    alt=""
                  />
                </a>

                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-24
                 transition-all duration-500 z-50"
                >
                  <span className="text-gradient">Rede Social</span>
                </div>
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-14
                 transition-all duration-700 z-50"
                >
                  <span className="text-3xl text-white">BlitzBee</span>
                </div>
              </div>
              <div className="group relative border-2 border-white/50 rounded-xl overflow-hidden  w-1/3 h-[180px]">
                <a
                  href="https://chat-bruno-react.vercel.app"
                  className="text-transparent cursor-pointer group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
                >
                  a
                </a>
                <img
                  className="group-hover:scale-125 transition-all duration-500 object-cover h-full"
                  src={Img3}
                  alt=""
                />
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-24
                 transition-all duration-500 z-50"
                >
                  <span className="text-gradient">Chat de Conversas</span>
                </div>
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-14
                 transition-all duration-700 z-50"
                >
                  <span className="text-3xl text-white">Bruno's Chat</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amout: 0.3,
            }}
            className="flex-1 flex  gap-y-10 lg:gap-y-5 h-[800px]"
          >
            
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
