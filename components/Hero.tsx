"use client"; {/*todos los eventos llevan esto*/}
import Image from "next/image";
import styles from "./Hero.module.css";
import {motion} from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero}>
     {/*magen*/}
     <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}   
      >
      <Image
        src="/hero.jpg"
        alt="Café artesanal"
        fill
        priority
        className={styles.image}
      />
      </motion.div>

      {/*overlay*/}
<motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1}}   
      />

{/*contenido*/}
   <div className={styles.content}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Raíz Café
        </motion.h1>

        <motion.p
        initial={{ opacity: 0,y:30 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 1, delay: 0.2}}
      >
       
          Café artesanal de origen, tostado con intención y servido con respeto
          por el proceso.
        </motion.p>
      </div>
    </section>
  );
}
