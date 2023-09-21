import { contentTags } from "@/utils/tags";
import { Mix_Content, Mix_Content_Tag } from "@/graphql/types";
import styles from "./OriginalCard.module.scss";

export default function OriginalCard({
  title,
  updatedate,
  authorname,
  mix_content_tags,
  imgurl,
  offlineapplyurl,
}: Mix_Content) {
  return (
    <div className={styles.originalBox}>
      <div
        className={styles.originalCard}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 43.23%, #000000 100%), url(${imgurl})`,
        }}
      >
        <div className={styles.badge}>
          {offlineapplyurl ? "Offline" : "Ambassador"}
        </div>
        <div className={styles.contentInfo}>
          <div className={styles.title}>{title}</div>
          <div className={styles.detail}>
            {updatedate} | {authorname}
          </div>
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
      </div>
      <div className={styles.contentInfoMobile}>
        <div className={styles.title}>{title}</div>
        <div className={styles.detail}>
          {updatedate} | {authorname}
        </div>
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
    </div>
  );
}
