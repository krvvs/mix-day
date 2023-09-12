import styles from "./OriginalCard.module.scss";

interface ContentProps {
  title: string;
  updatedate: string;
  authorname: string;
  mix_content_tags: string[];
  imgurl: string;
}

export default function OriginalCard({
  title,
  updatedate,
  authorname,
  mix_content_tags,
  imgurl,
}: ContentProps) {
  return (
    <div className={styles.originalCard}>
      <div>{title}</div>
      <div>{updatedate}</div>
      <div>{authorname}</div>
      <div>{imgurl}</div>
    </div>
  );
}
