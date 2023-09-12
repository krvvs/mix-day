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

interface ContentProps {
  id: string;
  title: string;
  abstractcontents?: string;
  updatedate: string;
  authorname: string;
  mix_content_tags: string[];
  imgurl: string;
}

async function getContent(query: string) {
  const endpoint = process.env.GRAPHQL_API_ENDPOINT as string;
  const result: any = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
    }),
  }).then((res) => res.json());

  return result;
}

export default async function Home() {
  const featured = await getContent(FEATURED_CONTENT);
  const original = await getContent(ORIGINAL_CONTENT);
  const latest = await getContent(LATEST_CONTENT);
  console.log(featured.data);
  console.log(original.data);
  console.log(latest.data);

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
            <FeaturedCard />
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
            {original.data.mix_content.map(
              ({
                id,
                title,
                updatedate,
                authorname,
                mix_content_tags,
                imgurl,
              }: ContentProps) => {
                return (
                  <OriginalCard
                    key={id}
                    title={title}
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
        <section>
          <div className={styles.sectionTitle}>최신 콘텐츠</div>
          <div className={`${styles.cardContainer} ${styles.latest}`}>
            <ContentCard />
          </div>
        </section>
      </main>
    </div>
  );
}
