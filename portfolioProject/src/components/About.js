import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (window.innerWidth > 640) {
      setIsMobile(false);
    }
  }, []);
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:mb-10 lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* {!isMobile && (
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amout: 0.3,
              }}
              className="lg:flex-1 lg:bg-about lg:bg-contain lg:bg-no-repeat lg:h-[540px] lg:mix-blend-lighen mix-blend-lighten lg:bg-top"
            ></motion.div>
          )} */}
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
            <h2 className="h2 text-accent">Sobre mim</h2>
            <h3 className="h3 mb-4">Desenvolvedor Web Front-end</h3>
            <p className="mb-6">
              Adoro aprender novas tecnologias, cada novo aprendizado aumenta
              mais e mais meu fascínio pela área de TI. Habilidades em ReactJs |
              HTML | CSS | JS | TS | GIT | Redux | Context API | Jest | Cypress
              | Styled Components | Material UI | Chakra UI | SCRUM | Tailwind |
              NextJs
            </p>
            <div className="flex justify-start items-center gap-x-6 lg:gap-x-10 mb-12 mt-8">
              <div className="flex flex-col justify-center items-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : <></>}
                </div>
                <div className="font-primary text-sm tracking-tighter-[2px]">
                  Meses de <br />
                  Experiência
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : <></>}
                </div>
                <div className="font-primary text-sm tracking-tighter-[2px]">
                  Anos de <br />
                  Estudo
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg transition-all duration-400">Contato</button>
              <a href="#" className="text-gradient btn-link">
                Meu Portfólio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
