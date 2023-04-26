// import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

// const Contact = () => {
//   return (
//     <section className="py-16 lg:section" id="contact">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           <motion.div
//             variants={fadeIn("right", 0.2)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{
//               once: false,
//               amout: 0.3,
//             }}
//             className="flex-1 flex justify-start items-center"
//           >
//             <div>
//               <h4
//                 className="text-xl uppercase font-primary text-accent font-medium
//               mb-2 tracking-wide"
//               >
//                 Entre em contato
//               </h4>
//               <h2 className="text-[45px] lg:text-[70px] font-secondary leading-none mb-12">
//                 Vamos trabalhar <br /> juntos!
//               </h2>
//             </div>
//           </motion.div>
//           <motion.form
//             variants={fadeIn("left", 0.2)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{
//               once: false,
//               amout: 0.3,
//             }}
//             className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 item-start"
//           >
//             <input
//               className="bg-transparent border-b py-3 outline-none w-full
//                 placeholder:text-white focus:border-accent transition-all"
//               type="text"
//               placeholder="Seu nome"
//             />
//             <input
//               className="bg-transparent border-b py-3 outline-none w-full
//                 placeholder:text-white focus:border-accent transition-all"
//               type="text"
//               placeholder="Seu e-mail"
//             />
//             <textarea
//               className="bg-transparent border-b py-3 outline-none w-full
//                 placeholder:text-white focus:border-accent transition-all resize-none mb-12"
//               placeholder="Sua mensagem..."
//             ></textarea>
//             <button className="btn btn-lg w-2/3">Enviar mensagem</button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
const services = [
  {
    name: "Kenzie Academy - COACH de Ensino (MONITOR)",
    date: "08/21 - 02/22",
    description: "Tirava dúvida e aplicava provas para devs novatos da instituição. Assunto: HTML, CSS e JS.",
    link: "https://kenzie.com.br/blog/como-e-ser-coach-na-kenzie-academy/",
  },
  {
    name: "Muzie Online - Desenvolvedor Web Front-end",
    date: "05/22 - 02/23",
    description: "Criação de novas features da rede social (Chat, Feed de fotos, novas formas de pagamento etc), criação de novos designs para páginas, manutenção e refatoração do código.",
    link: "https://www.muzieonline.com.br/welcome",
  }
];

const Contact = () => {
  return (
    <section className="section" id="contact">
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
            <h2 className="h2 text-accent mb-6">Experiências</h2>
            <h3 className="h3 max-w-[455px] mb-8">
              Programador Front-end com mais de 1 ano de experiência.
            </h3>
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

export default Contact;
