import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

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
            variants={fadeIn("left", 0.3)}
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
              <br />
              E-mail: brunofaria7.dev@gmail.com
            </p>
            <div className="flex justify-start items-center gap-x-6 lg:gap-x-10 mb-8">
              <div className="flex flex-col justify-center items-center h-auto">
                <div className="text-[40px] h-[43px] font-tertiary text-gradient mb-1 p-1">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : <></>}
                </div>
                <div className="font-primary text-sm tracking-tighter-[2px]">
                  Meses de <br />
                  Experiência
                </div>
              </div>
              <div className="flex flex-col justify-center h-auto items-center">
                <div className="text-[40px] h-[43px] font-tertiary text-gradient mb-1 p-1">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : <></>}
                </div>
                <div className="font-primary text-sm tracking-tighter-[2px]">
                  Anos de <br />
                  Estudo
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button
                className="btn btn-lg transition-all duration-400"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
