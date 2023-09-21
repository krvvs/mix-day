import { contentTags } from "@/utils/tags";
import { Mix_Content, Mix_Content_Tag } from "@/graphql/types";
import styles from "./ContentCard.module.scss";

export default function ContentCard({
  title,
  abstractcontents,
  updatedate,
  authorname,
  mix_content_tags,
  imgurl,
}: Mix_Content) {
  return (
    <div className={styles.contentCard}>
      <div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(${imgurl})`,
        }}
      ></div>
      <div className={styles.authornameMobile}>{authorname}</div>
      <div className={styles.contentInfo}>
        <div className={styles.contentInfoText}>
          <div className={styles.title}>{title}</div>
          <div className={styles.abstractcontents}>{abstractcontents}</div>
          <div className={styles.authorname}>{authorname}</div>
          <div className={styles.tags}>
            {mix_content_tags.map(({ tag }: Mix_Content_Tag) => {
              return (
                <span key={tag} className={styles.tag}>
                  #{contentTags[tag]}
                </span>
              );
            })}
          </div>
        </div>
        <div
          className={styles.cardImageMobile}
          style={{
            backgroundImage: `url(${imgurl})`,
          }}
        ></div>
      </div>
    </div>
  );
}
