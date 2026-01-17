import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/hero.jpg"
        alt="Café artesanal"
        fill
        priority
        className={styles.image}
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1>Raíz Café</h1>
        <p>
          Café artesanal de origen, tostado con intención y servido con respeto
          por el proceso.
        </p>
      </div>
    </section>
  );
}
