import Image from "next/image";
import styles from "./Menus.module.scss";

export default function Menus() {
  return (
    <section>
      <ul className={styles.menus}>
        <li className={styles.menu}>
          <Image src="/icons/all.svg" alt="all icon" width={20} height={20} />
          <span>모든 콘텐츠</span>
        </li>
        <li className={styles.menu}>
          <Image
            src="/icons/original.svg"
            alt="original icon"
            width={20}
            height={20}
          />
          <span>오리지널 콘텐츠</span>
        </li>
        <li className={styles.menu}>
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark icon"
            width={20}
            height={20}
          />
          <span>북마크</span>
        </li>
        <li className={styles.menu}>
          <Image src="/icons/cs.svg" alt="cs icon" width={20} height={20} />
          <span>고객센터</span>
        </li>
      </ul>
    </section>
  );
}
