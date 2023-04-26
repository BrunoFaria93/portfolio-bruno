import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
const services = [
  {
    name: "UI/UX Design",
    description: "Processo de criar uma interface e experiência de usuário intuitiva, agradável e eficiente para um produto digital.",
    link: "https://blog.cubos.academy/ux-ui-design-guia-completo/#:~:text=menus%20e%20tipografia.-,O%20objetivo%20do%20UI%20design%20é%20criar%20uma%20interface%20visual,uso%20contínuo%20e%20a%20fidelização.",
  },
  {
    name: "Desenvolvimento Web Front-end",
    description: "Criar a interface visual e interativa de um website, responsável por garantir que o design seja atraente e intuitivo para o usuário final.",
    link: "https://ebaconline.com.br/blog/desenvolvedor-front-end-o-que-faz#:~:text=O%20profissional%20desenvolvedor%20front-end,como%20HTML%2C%20CSS%20e%20JavaScript.",
  },
  {
    name: "SEO",
    description: "Conjunto de técnicas e estratégias que visam melhorar o posicionamento de um site em motores de busca, como o Google",
    link: "https://resultadosdigitais.com.br/marketing/o-que-e-seo/",
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
            <Link to="work" activeClass="active" smooth={true} spy={true}>
                <a href="work" className="btn p-5">
                  Veja meu trabalho
                </a>
              </Link>
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
                        href={link}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href={link} className="text-gradient text-sm">
                        Leia mais
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
