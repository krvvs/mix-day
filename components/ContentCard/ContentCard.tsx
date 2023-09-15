import { contentTags } from "@/utils/tags";
import styles from "./ContentCard.module.scss";

interface Tags {
  tag: string;
}
interface Props {
  title: string;
  abstractcontents: string;
  updatedate: string;
  authorname: string;
  mix_content_tags: Tags[];
  imgurl: string;
}

export default function ContentCard({
  title,
  abstractcontents,
  updatedate,
  authorname,
  mix_content_tags,
  imgurl,
}: Props) {
  return (
    <div className={styles.contentCard}>
      <div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(${imgurl})`,
        }}
      ></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.abstractcontents}>{abstractcontents}</div>
      <div className={styles.authorname}>{authorname}</div>
      <div className={styles.tags}>
        {mix_content_tags.map(({ tag }: Tags) => {
          return (
            <span key={tag} className={styles.tag}>
              #{contentTags[tag]}
            </span>
          );
        })}
      </div>
    </div>
  );
}
