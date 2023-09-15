import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>
        마케터들의 영감이 쌓이는 공간,
        <br />
        믹스로 초대합니다.
      </div>
      <div className={styles.description}>
        마케팅 인사이트가 돋보이는 콘텐츠를 엄선하여 소개합니다.
      </div>
    </div>
  );
}
