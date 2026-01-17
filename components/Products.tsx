import Image from "next/image";
import styles from "./Products.module.css";

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

export default function Products() {
  return (
    <section id="productos" className={styles.section}>
      <h2 className={styles.title}>Nuestros cafés</h2>

      <div className={styles.grid}>
        {products.map((product) => (
          <article key={product.id} className={styles.card}>
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
          </article>
        ))}
      </div>
    </section>
  );
}
