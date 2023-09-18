import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";
import {
  FEATURED_CONTENT,
  ORIGINAL_CONTENT,
  LATEST_CONTENT,
} from "@/GraphQL/queries";
import Menus from "@/components/Menus/Menus";
import FeaturedCard from "@/components/FeaturedCard/FeaturedCard";
import Banner from "@/components/Banner/Banner";
import OriginalCard from "@/components/OriginalCard/OriginalCard";
import ContentCard from "@/components/ContentCard/ContentCard";
import styles from "./page.module.scss";

interface Tags {
  tag: string;
}
interface ContentProps {
  id: string;
  title: string;
  abstractcontents: string;
  updatedate: string;
  authorname: string;
  mix_content_tags: Tags[];
  imgurl: string;
  offlineapplyurl: string;
}

async function getContent(query: string) {
  try {
    const { data } = await getClient().query({
      query: gql`
        ${query}
      `,
    });
    return data;
  } catch (error) {
    console.error("GraphQL query error:", error);
    return null;
  }
}

export default async function Home() {
  const featured = await getContent(FEATURED_CONTENT);
  const original = await getContent(ORIGINAL_CONTENT);
  const latest = await getContent(LATEST_CONTENT);

  return (
    <div className={styles.home}>
      <Menus />
      <main className={styles.feed}>
        <section>
          <div className={styles.sectionTitle}>
            데일리 큐레이션
            <div className={styles.sectionDescription}>
              오늘 꼭 읽어봐야 할 추천 콘텐츠
            </div>
          </div>
          <div className={`${styles.cardContainer} ${styles.featured}`}>
            {featured.mix_content.map(
              ({
                id,
                title,
                abstractcontents,
                authorname,
                mix_content_tags,
                imgurl,
              }: ContentProps) => {
                return (
                  <FeaturedCard
                    key={id}
                    title={title}
                    abstractcontents={abstractcontents}
                    authorname={authorname}
                    mix_content_tags={mix_content_tags}
                    imgurl={imgurl}
                  />
                );
              }
            )}
          </div>
        </section>
        <section>
          <div className={`${styles.cardContainer} ${styles.banner}`}>
            <Banner />
          </div>
        </section>
        <section>
          <div className={styles.sectionTitle}>오리지널 콘텐츠</div>
          <div className={`${styles.cardContainer} ${styles.original}`}>
            {original.mix_content.map(
              ({
                id,
                title,
                updatedate,
                authorname,
                mix_content_tags,
                imgurl,
                offlineapplyurl,
              }: ContentProps) => {
                return (
                  <OriginalCard
                    key={id}
                    title={title}
                    updatedate={updatedate}
                    authorname={authorname}
                    mix_content_tags={mix_content_tags}
                    imgurl={imgurl}
                    offlineapplyurl={offlineapplyurl}
                  />
                );
              }
            )}
          </div>
        </section>
        <section>
          <div className={styles.sectionTitle}>최신 콘텐츠</div>
          <div className={`${styles.cardContainer} ${styles.latest}`}>
            {latest.mix_content.map(
              ({
                id,
                title,
                abstractcontents,
                updatedate,
                authorname,
                mix_content_tags,
                imgurl,
              }: ContentProps) => {
                return (
                  <ContentCard
                    key={id}
                    title={title}
                    abstractcontents={abstractcontents}
                    updatedate={updatedate}
                    authorname={authorname}
                    mix_content_tags={mix_content_tags}
                    imgurl={imgurl}
                  />
                );
              }
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
