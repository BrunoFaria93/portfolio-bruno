import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/projeto1.png";
import Img2 from "../assets/projeto2.png";
import Img3 from "../assets/projeto3.png";

const Work = () => {
  return (
    <section className="section" id="work">
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
                kmsamsk sakm akmsk mskam kmask maksm kmska maksm kamsakm assets
                sakm ksamsmkam sksk maksm ksamksa msm kms makm aksm akmas kamsm
              </p>
              <button className="btn btn-sm">Veja todos os projetos!</button>
            </div>
            <div
              className="group relative overflow-hidden border-2 border-white/50
            rounded-xl"
            >
              <div
                className="cursor-pointer group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              ></img>
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
                <span className="text-3xl text-white">Netflix Clone</span>
              </div>
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
            className="flex-1 flex flex-col gap-y-10 lg:gap-y-12"
          >
            <div
              className="group relative overflow-hidden border-2 border-white/50
            rounded-xl"
            >
              <div
                className="cursor-pointer group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale-125 object-cover transition-all duration-500"
                src={Img2}
                alt=""
              ></img>
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
                <span className="text-3xl text-white">Glamour Photos</span>
              </div>
            </div>
            <div
              className="group relative overflow-hidden border-2 border-white/50
            rounded-xl"
            >
              <div
                className="cursor-pointer group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              ></img>
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
