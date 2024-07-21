import { Link } from "react-router-dom";
import styles from "./News.module.css";

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.newsChild} />
      <div className={styles.sportsCentral}>Sports Central</div>
      <Link className={styles.image2} to="/" />
      <div className={styles.race9803}>Race98 - 03 June 2023</div>
      <div className={styles.race98031}>Race98 - 03 June 2023</div>
      <div className={styles.race98032}>Race98 - 03 June 2023</div>
      <img className={styles.raceHose2Icon} alt="" src="/racehose-21@2x.png" />
      <div className={styles.newYorka6YearOld}>
        NEW YORK—A 6-year-old horse, being the youngest in the oscar
        championship has come first place
      </div>
      <i className={styles.yearOldHorseWins}>
        6-Year-Old Horse wins first place at belmont
      </i>
      <div className={styles.newsItem} />
      <div className={styles.lastYearSavilia}>
        Last year, Savilia Blunk took a more conservative approach to her first
        season as an Elite Class athlete, skipping some
      </div>
      <i className={styles.saviliaBlunkEmbraces}>
        Savilia Blunk Embraces Longer Season
      </i>
      <img
        className={styles.cyclistLeadsActionfrontViewIcon}
        alt=""
        src="/cyclistleadsactionfrontviewmanridingbicycleracingroad-21@2x.png"
      />
      <div className={styles.newsInner} />
      <div className={styles.lastYearSavilia1}>
        Last year, Savilia Blunk took a more conservative approach to her first
        season as an Elite Class athlete, skipping some
      </div>
      <i className={styles.ryanGaricaIs}>Ryan Garica is Fighting Again</i>
      <Link className={styles.emptyBoxingArenaWaitingNew} to="/news" />
      <i className={styles.news1}>NEWS</i>
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
    </div>
  );
};

export default News;
