import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import { useForm } from "../hooks/useForm";
import styles from "../styles/Oracion.module.scss";

const initialForm = {
  nombre: "",
  email: "",
  peticion: "",
};

export default function Oracion() {
  const { nombre, email, peticion, formState, onInputChange, onResetForm } =
    useForm(initialForm);

  function handlePost(e) {
    e.preventDefault();
    try {
      console.log(formState);
    } catch (error) {}

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
                name="nombre"
                type="text"
                placeholder="¿Cuál es tu nombre?"
                onChange={onInputChange}
                value={nombre}
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
                name="peticion"
                placeholder="Escribe tu petición"
                onChange={onInputChange}
                value={peticion}
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
