import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.logo}
        src="/mix.svg"
        alt="mix logo"
        width={50}
        height={20}
      />
      <div>
        <div className={styles.info}>
          (주)팀민트 | 대표 : 한만형 | 사업자등록번호 : 417-88-02499
        </div>
        <div className={styles.info}>
          06092 서울특별시 강남구 선릉로 648 유라테크빌딩, 6층 | 대표번호 :
          070-4327-5067
        </div>
        <div className={styles.copyright}>
          © 2022 teammint, inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
