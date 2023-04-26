import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description: "nasjnajsnjsn sanjsnj njsn jsa jsnaj nsj",
    link: "Leia mais",
  },
  {
    name: "Desenvolvimento",
    description: "nasjnajsnjsn sanjsnj njsn jsa jsnaj nsj",
    link: "Leia mais",
  },
  {
    name: "SEO",
    description: "nasjnajsnjsn sanjsnj njsn jsa jsnaj nsj",
    link: "Leia mais",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amout: 0.3,
            }}
            className="flex-1 mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">O que eu faço?</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Programdor Front-end com mais de 1 ano de experiência.
            </h3>
            <button className="btn btn-sm">Veja meu trabalho</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amout: 0.3,
            }}
            className="flex-1"
          >
            <div className="">
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
