"use client";
import Image from "next/image";
import styles from "./Origen.module.css";
import {motion} from "framer-motion";

export default function Origen() {
  return (
    <section className={styles.origen} id="origen">
      <div className={styles.container}>
        {/*texto*/}
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Nuestro origen</h2>
          <p>
            En Raíz Café,cada grano cuenta una historia. Trabajamos directamente  con productores locales que cultivan el café respetando
            la tierra, los ciclos naturales y el proceso artesanal.</p>
            <p>Nuestro proceso de tostado resalta características únicas de cada origen,creando pperfiles de sabor complejos y balanceados.
            Cada grano tiene historia, intención y origen.
          </p>
    </motion.div>


        {/*omagen*/}
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
        <Image
            src="/origen.jpg"
            alt="Origen del café"
            width={500}
            height={350}
          />
          </motion.div>
        </div>
    
    </section>
  );
}
