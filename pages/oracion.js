import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import { useForm } from "../hooks/useForm";
import styles from "../styles/Oracion.module.scss";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Oracion() {
  const { name, email, message, formState, onInputChange, onResetForm } =
    useForm(initialForm);

  function handlePost(e) {
    e.preventDefault();

    try {
      fetch("http://localhost:3000/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
    } catch (error) {
      console.log(error);
    }

    onResetForm();
  }

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Iglesia Bautista Bethel</title>
        <meta property="og:title" content="Iglesia Bautista Bethel - Oración" />
        <meta
          property="og:image"
          content="https://www.navidadenlasmontanas.com/ibbShare.png"
        />
        <meta
          name="description"
          content="Queremos orar por ti. Envíanos tu petición de oración."
        />
        <meta
          property="og:description"
          content="Queremos orar por ti. Envíanos tu petición de oración."
        />
      </Head>
      <Navbar />
      <div className={styles.formContainer}>
        <div className={styles.formCard}>
          <div className={styles.formContent}>
            <div className={styles.formContentText}>
              <h1>Queremos orar por ti</h1>
              <h3>Envíanos tu petición de oración.</h3>
            </div>
            <form onSubmit={handlePost}>
              <input
                name="name"
                type="text"
                placeholder="¿Cuál es tu nombre?"
                onChange={onInputChange}
                value={name}
                required="required"
              />
              <input
                name="email"
                type="text"
                placeholder="¿Cuál es tu correo?"
                onChange={onInputChange}
                value={email}
                required="required"
              />
              <textarea
                name="message"
                placeholder="Escribe tu petición"
                onChange={onInputChange}
                value={message}
                required="required"
              ></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
