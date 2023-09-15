import { contentTags } from "@/utils/tags";
import styles from "./OriginalCard.module.scss";

interface Tags {
  tag: string;
}
interface Props {
  title: string;
  updatedate: string;
  authorname: string;
  mix_content_tags: Tags[];
  imgurl: string;
  offlineapplyurl: string;
}

export default function OriginalCard({
  title,
  updatedate,
  authorname,
  mix_content_tags,
  imgurl,
  offlineapplyurl,
}: Props) {
  return (
    <div
      className={styles.originalCard}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 43.23%, #000000 100%), url(${imgurl})`,
      }}
    >
      <div className={styles.badge}>
        {offlineapplyurl ? "Offline" : "Ambassador"}
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>
          {updatedate} | {authorname}
        </div>
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
    </div>
  );
}
