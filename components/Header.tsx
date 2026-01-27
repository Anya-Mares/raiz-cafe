"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const[scrolled,setScrolled]=useState(false);

  useEffect(()=>{
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
   window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header 
    className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
    <Link href="/" className={styles.logo}>
  <Image
    src="/logo-circular.png"
    alt="Raíz Café"
    width={180}
    height={180}
    priority
    className={styles.logoImage}
  />
  
</Link>
    

<nav className={styles.nav}>
          <Link href="#productos">Productos</Link>
          <Link href="#origen">Origen</Link>
          <Link href="#contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

