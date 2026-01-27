"use client";
import Image from "next/image";
import styles from "./Products.module.css";
import {motion} from "framer-motion";

const products = [
  {
    id: 1,
    name: "Café de Altura",
    description: "Granos seleccionados de fincas de altura, perfil balanceado, acidez suave y aroma limpio.",
    image: "/coffee-1.jpg",
  },
  {
    id: 2,
    name: "Tueste Medio",
    description: "Tueste equilibrado que resalta notas dulces y cuerpo medio, ideal para espresso.",
    image: "/coffee-2.jpg",
  },
  {
    id: 3,
    name: "Origen Único",
    description: "Café de origen único, tostado artesanalmente para preservar su carácter.",
    image: "/coffee-3.jpg",
  },
];

// Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Products() {
  return (
    <section id="productos" className={styles.section}>
      {/*titulo*/}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut"}}
        viewport={{ once: true}}
      >
        Nuestros cafés
        </motion.h2>

{/*grid de productos*/}
      <motion.div
      className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true ,amount: 0.3}}
      >

        {products.map((product) => (
          <motion.article
            key={product.id}
            className={styles.card}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8 }}
          >
       
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className={styles.image}
            />

            <div className={styles.content}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <button className={styles.button}>
                Conoce más
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
