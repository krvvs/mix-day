import Menus from "@/components/Menus/Menus";
import FeaturedCard from "@/components/FeaturedCard/FeaturedCard";
import Banner from "@/components/Banner/Banner";
import OriginalCard from "@/components/OriginalCard/OriginalCard";
import styles from "./page.module.scss";
import ContentCard from "@/components/ContentCard/ContentCard";

export default function Home() {
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

          <FeaturedCard />
        </section>
        <section>
          <Banner />
        </section>
        <section>
          <div className={styles.sectionTitle}>오리지널 콘텐츠</div>
          <OriginalCard />
        </section>
        <section>
          <div className={styles.sectionTitle}>최신 콘텐츠</div>
          <ContentCard />
        </section>
      </main>
    </div>
  );
}
