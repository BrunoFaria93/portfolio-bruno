import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amout: 0.3,
            }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-xl uppercase font-primary text-accent font-medium
              mb-2 tracking-wide"
              >
                Entre em contato
              </h4>
              <h2 className="text-[45px] lg:text-[70px] font-secondary leading-none mb-12">
                Vamos trabalhar <br /> juntos!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amout: 0.3,
            }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 item-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full 
                placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Seu nome"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full 
                placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Seu e-mail"
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full 
                placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Sua mensagem..."
            ></textarea>
            <button className="btn btn-lg w-2/3">Enviar mensagem</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
