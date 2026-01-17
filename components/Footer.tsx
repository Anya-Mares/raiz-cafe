import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacto">
      <div className={styles.container}>
        <p className={styles.brand}>Raíz Café</p>
        <p className={styles.copy}>Café artesanal con alma</p>
      <div className={styles.socials}>
  {/* Instagram */}
  <a href="#" aria-label="Instagram">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  </a>

  {/* Facebook */}
  <a href="#" aria-label="Facebook">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-.6.4-1 1-1z"
        fill="currentColor"
      />
    </svg>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/5210000000000"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.7 7.9c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.4 1 2.5c.1.1 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3l-1.8-.9c-.2-.1-.4-.1-.6.1-.2.2-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.9-1.7-2.2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.1-.3 0-.5l-.8-1.9z"
        fill="currentColor"
      />
    </svg>
  </a>

  {/* Teléfono */}
  <a href="tel:+5210000000000" aria-label="Teléfono">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.6 10.8c1.3 2.5 3.1 4.3 5.6 5.6l1.9-1.9c.2-.2.5-.3.8-.2 1 .3 2.1.5 3.1.5.4 0 .8.4.8.8V20c0 .4-.4.8-.8.8C10.4 20.8 3.2 13.6 3.2 4.8c0-.4.4-.8.8-.8h3.8c.4 0 .8.4.8.8 0 1 .2 2.1.5 3.1.1.3 0 .6-.2.8l-1.5 1.3z"
        fill="currentColor"
      />
    </svg>
  </a>
</div>

         <p className={styles.copy}>
          © {new Date().getFullYear()} Raíz Café. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
