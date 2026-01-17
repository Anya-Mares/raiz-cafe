import Image from "next/image";
import styles from "./Origen.module.css";

export default function Origen() {
  return (
    <section className={styles.origen} id="origen">
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Nuestro origen</h2>
          <p>
            En Raíz Café,cada grano cuenta una historia. Trabajamos directamente  con productores locales que cultivan el café respetando
            la tierra, los ciclos naturales y el proceso artesanal.</p>
            <p>Nuestro proceso de tostado resalta características únicas de cada origen,creando pperfiles de sabor complejos y balanceados.
            Cada grano tiene historia, intención y origen.
          </p>
        </div>

        <div className={styles.image}>
          <Image
            src="/origen.jpg"
            alt="Origen del café"
            width={500}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}
