import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/icons/all.svg"
        alt="all icon"
        width={24}
        height={24}
      />
    </main>
  );
}
