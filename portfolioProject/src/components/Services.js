import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
const services = [
  {
    name: "Uninassau - Análise e Desenvolvimento de Sistemas",
    date: "02/23 - atualmente",
    description: "Com a graduação em Análise e Desenvolvimento de Sistemas da UNINASSAU você estará apto para concorrer as melhores oportunidades que o mercado de Tecnologia da Informação oferece. Com essa formação você vai poder atuar em profissões como Engenheiro Front-End, Desenvolvedor de Java, Cientista de dados, Gerente de Produto e Engenheiro de DevOps.",
    link: "https://graduacao.uninassau.digital/nossos-cursos/analise-e-desenvolvimento-de-sistemas/85/60/2?utm_source=google&utm_medium=search&utm_campaign=um-uninassau-graduacao_ead_20221-conversao-google-&utm_content=um-uninassau-graduacao_ead_20221-conversao-google--search-generico_-interesses-&utm_term=um-uninassau-graduacao_ead_20221-conversao-google--search-generico_-interesses--na--&gad=1&gclid=CjwKCAjwl6OiBhA2EiwAuUwWZXK-KEdGd-6yBpOdfiRSEPObyfgVnOt8hY-NksLXEpno9mjDhVid1BoChosQAvD_BwE",
  },
  {
    name: "Kenzie Academy - Desenvolvedor Web Fullstack",
    date: "07/21 - 07/22",
    description: "Curso de 2.000 horas de Desenvolvimento Full Stack que abrange as tecnologias Front End e Back End além de soft skills disponíveis para o mercado de trabalho. Entre as linguagens e tecnologias aprendidas, estão HTML5, CSS3, JavaScript (ES6 +), React, Redux, Python (Django e Flask) e SQL.",
    link: "https://kenzie.com.br/quem-somos?utm_medium=google-ads&hsa_ad=648094279880&hsa_acc=2166776305&hsa_src=g&gclid=CjwKCAjwl6OiBhA2EiwAuUwWZXPav0L4a_ripnYYNEQFHrLHHQVJYe4L1DCduoVjn9s-qqLOkN2SxBoCopEQAvD_BwE&hsa_grp=137371409172&utm_term=kenzie%20academy&utm_source=adwords&gad=1&hsa_cam=15853756022&utm_campaign=INSC-PER-2022-TERMOS-MARCA-SEARCH"
  }
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
            <h2 className="h2 text-accent mb-2">Formação</h2>
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
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <span 
                       className="text-gradient text-sm">
                        {date}
                      </span>
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
