import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.flexUnit}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/mix-beta.svg"
            alt="mix beta icon"
            width={90}
            height={24}
          />
        </Link>
        <form className={styles.searchBox}>
          <Image
            className={styles.searchIcon}
            src="/icons/magnifier.svg"
            alt="search icon"
            width={16}
            height={16}
          />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="검색하세요"
          />
        </form>
      </div>
      <button className={styles.signIn}>로그인</button>
    </header>
  );
}