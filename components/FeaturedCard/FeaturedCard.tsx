import { contentTags } from "@/utils/tags";
import { Mix_Content, Mix_Content_Tag } from "@/graphql/types";
import styles from "./FeaturedCard.module.scss";

export default function FeaturedCard({
  title,
  abstractcontents,
  authorname,
  mix_content_tags,
  imgurl,
}: Mix_Content) {
  return (
    <div
      className={styles.featuredCard}
      style={{
        backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.1) 10%, #000000 100%), url(${imgurl})`,
      }}
    >
      <div className={styles.tags}>
        {mix_content_tags.map(({ tag }: Mix_Content_Tag) => {
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
      <div className={styles.tagsMobile}>
        {mix_content_tags.map(({ tag }: Mix_Content_Tag) => {
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
