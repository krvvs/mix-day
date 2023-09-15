import { contentTags } from "@/utils/tags";
import styles from "./FeaturedCard.module.scss";

interface Tags {
  tag: string;
}
interface Props {
  title: string;
  abstractcontents: string;
  authorname: string;
  mix_content_tags: Tags[];
  imgurl: string;
}

export default function FeaturedCard({
  title,
  abstractcontents,
  authorname,
  mix_content_tags,
  imgurl,
}: Props) {
  return (
    <div
      className={styles.featuredCard}
      style={{
        backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.1) 10%, #000000 100%), url(${imgurl})`,
      }}
    >
      <div className={styles.tags}>
        {mix_content_tags.map(({ tag }: Tags) => {
          return (
            <span key={tag} className={styles.tag}>
              #{contentTags[tag]}
            </span>
          );
        })}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.abstractcontents}>{abstractcontents}</div>
      <div className={styles.authorname}>{authorname}</div>
    </div>
  );
}
