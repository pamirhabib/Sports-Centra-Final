import { Link } from "react-router-dom";
import styles from "./Rank.module.css";

const Rank = () => {
  return (
    <div className={styles.rank}>
      <div className={styles.rankChild} />
      <i className={styles.ranking}>Ranking</i>
      <div className={styles.sportsCentral}>Sports Central</div>
      <Link className={styles.image2} to="/" />
      <div className={styles.recentNewsClubsRanking}>
        <div className={styles.recentNewsClubsRankingChild} />
        <div className={styles.clubTable}>
          <div className={styles.club}>club</div>
          <div className={styles.points}>
            <div className={styles.gp}>GP</div>
            <div className={styles.w}>w</div>
            <div className={styles.d}>d</div>
            <div className={styles.l}>l</div>
            <div className={styles.f}>F</div>
            <div className={styles.a}>A</div>
            <div className={styles.gd}>GD</div>
          </div>
          <div className={styles.line}>
            <div className={styles.div}>38</div>
            <div className={styles.div1}>29</div>
            <div className={styles.div2}>6</div>
            <div className={styles.div3}>3</div>
            <div className={styles.div4}>99</div>
            <div className={styles.div5}>26</div>
            <div className={styles.div6}>73</div>
            <div className={styles.club1}>
              <div className={styles.div7}>1</div>
              <div className={styles.manchesterCity}>Manchester City</div>
              <img
                className={styles.imgteam09Icon}
                alt=""
                src="/imgteam09@2x.png"
              />
            </div>
          </div>
          <div className={styles.line1}>
            <div className={styles.div8}>38</div>
            <div className={styles.div9}>28</div>
            <div className={styles.div10}>8</div>
            <div className={styles.div11}>2</div>
            <div className={styles.div12}>94</div>
            <div className={styles.div13}>26</div>
            <div className={styles.div14}>68</div>
            <div className={styles.club2}>
              <div className={styles.div15}>2</div>
              <div className={styles.liverpool}>Liverpool</div>
              <img
                className={styles.imgteam07Icon}
                alt=""
                src="/imgteam07@2x.png"
              />
            </div>
          </div>
          <div className={styles.line2}>
            <div className={styles.div16}>38</div>
            <div className={styles.div17}>21</div>
            <div className={styles.div18}>11</div>
            <div className={styles.div19}>6</div>
            <div className={styles.div20}>76</div>
            <div className={styles.div21}>33</div>
            <div className={styles.div6}>43</div>
            <div className={styles.club3}>
              <div className={styles.div23}>3</div>
              <div className={styles.chelsea}>Chelsea</div>
              <img
                className={styles.imgteam07Icon}
                alt=""
                src="/imgteam06@2x.png"
              />
            </div>
          </div>
          <div className={styles.line3}>
            <div className={styles.background} />
            <div className={styles.div24}>38</div>
            <div className={styles.div25}>22</div>
            <div className={styles.div26}>5</div>
            <div className={styles.div27}>11</div>
            <div className={styles.div28}>69</div>
            <div className={styles.div29}>40</div>
            <div className={styles.div30}>29</div>
            <div className={styles.club4}>
              <div className={styles.div31}>4</div>
              <div className={styles.tottenhamHotspur}>Tottenham Hotspur</div>
              <img
                className={styles.imgteam07Icon}
                alt=""
                src="/imgteam05@2x.png"
              />
            </div>
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <div className={styles.frameChild} />
              <div className={styles.frameChild} />
              <div className={styles.frameChild} />
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.line4}>
            <div className={styles.div16}>38</div>
            <div className={styles.div17}>22</div>
            <div className={styles.div34}>3</div>
            <div className={styles.div35}>13</div>
            <div className={styles.div20}>61</div>
            <div className={styles.div21}>48</div>
            <div className={styles.div6}>13</div>
            <div className={styles.club5}>
              <div className={styles.div39}>5</div>
              <div className={styles.arsenal}>Arsenal</div>
              <img
                className={styles.imgteam07Icon}
                alt=""
                src="/imgteam04@2x.png"
              />
            </div>
          </div>
          <div className={styles.line5}>
            <div className={styles.div8}>38</div>
            <div className={styles.div9}>16</div>
            <div className={styles.div42}>10</div>
            <div className={styles.div43}>12</div>
            <div className={styles.div12}>57</div>
            <div className={styles.div13}>57</div>
            <div className={styles.div46}>0</div>
            <div className={styles.club6}>
              <div className={styles.div15}>6</div>
              <div className={styles.manchesterUnited}>Manchester United</div>
              <img
                className={styles.imgteam07Icon}
                alt=""
                src="/imgteam08@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rank;
