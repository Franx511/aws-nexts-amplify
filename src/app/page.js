import Image from "next/image";
import Client from "./client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Client />
      </div>
    </main>
  );
}
