import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const services = [
  {
    name: "Unigrande - Logística",
    date: "2016 - 2020",
    description:
      "Como estudante de Logística na Unigrande, tive a oportunidade de mergulhar em um ambiente de aprendizado dinâmico e prático. Aprendi a aplicar conceitos teóricos em situações reais, desenvolvendo habilidades essenciais para a gestão eficaz da cadeia de suprimentos. Minha experiência na Unigrande me preparou para enfrentar os desafios do mundo profissional com confiança e conhecimento sólido.",
    link: "https://unigrande.edu.br/cursos/UGD-LOGISTICA",
  },
  {
    name: "Uniateneu - Design de Moda",
    date: "2020 - 2022",
    description:
      "Minha experiência de formação em Designer de Moda na Uniateneu foi incrivelmente enriquecedora. Através de um currículo abrangente e prático, desenvolvi habilidades essenciais em design, modelagem e criação de peças únicas. Além disso, tive a oportunidade de colaborar em projetos criativos e explorar tendências emergentes na indústria da moda. Esta jornada me capacitou para ingressar no mercado de trabalho com confiança e criatividade, pronta para enfrentar os desafios e contribuir para a inovação no setor.",
    link: "https://uniateneu.edu.br/curso/design-de-moda/",
  },
];

const Services = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div 
        id="services"
        className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amout: 0.3,
            }}
            className="flex-1 mt-20 lg:mb-0"
          >
            <h2 
            className="h2 text-[#8b5cf6] mb-2">Formação</h2>
            {/* <h3 className="h3 max-w-[455px] mb-8">
              Programador Front-end com mais de 1 ano de experiência.
            </h3> */}
            {/* <Link to="work" activeClass="active" smooth={true} spy={true}>
                <a href="work" className="btn p-5">
                  Veja meu trabalho
                </a>
              </Link> */}
          </motion.div>
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
            <div className="">
              {services.map((service, index) => {
                const { name, date, description, link } = service;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 pb-5 h-auto mb-[38px] flex"
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
                        className="bg-[#8b5cf6] text-white rounded-full w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <span className="text-gradient text-sm">{date}</span>
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
