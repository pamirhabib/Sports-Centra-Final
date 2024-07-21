import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };
  }, []);

  // Function to trigger Google Translate
  const handleTranslate = () => {
    const element = document.querySelector(".goog-te-combo");
    if (element) {
      element.value = "fr";
      element.dispatchEvent(new Event("change"));
    }
  };

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.landingPage}>
      <div className={styles.header}>
        <div id="google_translate_element"></div>
      </div>
      <div className={styles.landingPageChild} />
      <Link className={styles.closeUpBasketballOutdoors1} to="/basketball" />
      <Link className={styles.soccerBallGreenGrassSoccer} to="/football" />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.theGoatOfContainer}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{`“The `}</p>
        <p className={styles.blankLine}>{`goat of `}</p>
        <p className={styles.blankLine}>{`football” `}</p>
      </div>
      <div className={styles.landingPageItem} />
      <div className={styles.landingPageInner} />
      <div className={styles.navListItemParent}>
        <div className={styles.navListItem} onClick={() => handleScroll('home')}>
          <b className={styles.home}>Home</b>
        </div>
        <div className={styles.navListItem1} />
        <div className={styles.navListItem2} onClick={() => handleScroll('trending-news')}>
          <div className={styles.home}>Trending News</div>
        </div>
        <div className={styles.navListItem2} onClick={() => handleScroll('discussions-button')}>
          <div className={styles.home}>Discussions</div>
        </div>
        <div className={styles.pollsAndVotingWrapper} onClick={() => handleScroll('clubs-ranking')}>
          <div className={styles.home}>Clubs Ranking</div>
        </div>
        <div className={styles.pollsAndVotingWrapper} onClick={() => handleScroll('sports-article')}>
          <div className={styles.home}>Sports Article</div>
        </div>
      </div>
      <div className={styles.sportsCentral}>Sports Central</div>
      <div className={styles.sportsCentral1}>Sports Central</div>
      <a className={styles.image2} />
      <a className={styles.image4} />
      <Link className={styles.image3} to="/volleyball" />
      <i className={styles.basketball}>Basketball</i>
      <i className={styles.trendingNews1} id="trending-news">
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>TRENDING</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{` NEWS `}</p>
      </i>
      <i className={styles.football1}>Football</i>
      <i className={styles.volleball}>volleball</i>
      <Link className={styles.moreFootyWrapper} to="/football">
        <b className={styles.moreFooty}>more footy</b>
      </Link>
      <div className={styles.theEuroleagueFinals}>
        The EuroLeague Finals Top Scorer is the individual award for the player
        that gained the highest points in the EuroLeague Finals
      </div>
      <div className={styles.boxingStarRyan}>
        Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De
        La Hoya, reignited their war of words via Twitter on
      </div>
      <i className={styles.ryanGarciaIs}>Ryan Garcia is fighting again.</i>
      <div className={styles.kingf03}>King.F - 03 June 2023</div>
      <Link className={styles.emptyBoxingArenaWaitingNew} to="/news" />
      <div className={styles.lastYearSavilia}>
        Last year, Savilia Blunk took a more conservative approach to her first
        season as an Elite Class athlete, skipping some
      </div>
      <i className={styles.saviliaBlunkEmbraces}>
        Savilia Blunk Embraces Longer Season
      </i>
      <div className={styles.jonyls03}>Jony.Ls - 03 June 2023</div>
      <Link className={styles.cyclistLeadsActionfrontView} to="/news" />
      <div className={styles.race9803}>Race98 - 03 June 2023</div>
      <Link className={styles.raceHose2} to="/news" />
      <div className={styles.newYorka6YearOld}>
        NEW YORK—A 6-year-old horse, being the youngest in the oscar
        championship has come first place
      </div>
      <i className={styles.yearOldHorseWins}>
        6-Year-Old Horse wins first place at belmont
      </i>
      <div className={styles.june2023Parent}>
        <div className={styles.june2023}>04 June 2023</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img
          className={styles.americanFootballPlayerPosinIcon}
          alt=""
          src="/americanfootballplayerposingwithballwhite-1@2x.png"
        />
        <div className={styles.newsletterSubscription}>
          Newsletter Subscription
        </div>
      </div>
      <div className={styles.groupParent}>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
        <img className={styles.groupIcon1} alt="" src="/group1.svg" />
        <img className={styles.vectorIcon1} alt="" src="/group2.svg" />
      </div>
      <div className={styles.sportsArticleParent} id="sports-article">
        <div className={styles.sportsArticle1}>{`Sports Article `}</div>
        <div className={styles.basketballEquipment1Parent}>
          <img
            className={styles.basketballEquipment1Icon}
            alt=""
            src="/basketballequipment-1@2x.png"
          />
          <div className={styles.exercisesBasketballPlayersContainer}>
            <p className={styles.blankLine}>
              5 Exercises Basketball Players Should Be Using To Develop Strength
            </p>
          </div>
          <div className={styles.thisArticleWas}>
            This article was written by Jake Willhoite from Healthlisted.com
            Strength in basketball isn’t all about a massive body mass or ripped
            muscles.
          </div>
          <div className={styles.content}>
            <img
              className={styles.imgavatar03Icon}
              alt=""
              src="/imgavatar03@2x.png"
            />
            <div className={styles.text}>
              <div className={styles.header}>Jake Will.</div>
            </div>
          </div>
          <img
            className={styles.heartSg2001Transparent3Icon}
            alt=""
            src="/heartsg2001transparent-3@2x.png"
          />
          <div className={styles.june20231}>04 June 2023</div>
          <div className={styles.basketballWrapper}>
            <div className={styles.hockey}>Basketball</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <input
              className={styles.comment}
              placeholder="comment"
              type="text"
            />
            <img className={styles.frameItem} alt="" src="/arrow-4.svg" />
          </div>
        </div>
        <div className={styles.hockeyPlayers1Parent}>
          <img
            className={styles.basketballEquipment1Icon}
            alt=""
            src="/hockeyplayers-1@2x.png"
          />
          <div className={styles.goldenKnightsOut}>
            Golden Knights out to fulfill owner's quest to win Stanley Cup in
            6th year
          </div>
          <div className={styles.thisArticleWas}>
            The Vegas Golden Knights will play the Florida Panthers in the
            Stanley Cup Final beginning Saturday.
          </div>
          <div className={styles.content1}>
            <img
              className={styles.imgavatar03Icon}
              alt=""
              src="/imgavatar031@2x.png"
            />
            <div className={styles.text}>
              <div className={styles.header}>Foxi.zacon</div>
            </div>
          </div>
          <div className={styles.june20232}>03 June 2023</div>
          <div className={styles.basketballWrapper}>
            <div className={styles.hockey}>hockey</div>
          </div>
          <div className={styles.exercisesBasketballPlayersContainer1}>
            <p className={styles.blankLine}>
              5 Exercises Basketball Players Should Be Using To Develop Strength
            </p>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.frameInner}
              alt=""
              src="/rectangle-21981.svg"
            />
            <input
              className={styles.comment1}
              placeholder="comment"
              type="text"
            />
            <img className={styles.frameItem} alt="" src="/arrow-4.svg" />
          </div>
          <div className={styles.heartSg2001Transparent1} />
          <img
            className={styles.heartSg2001Transparent4Icon}
            alt=""
            src="/heartsg2001transparent-3@2x.png"
          />
        </div>
        <div className={styles.threeWhiteShuttlecocksBadmiParent}>
          <img
            className={styles.basketballEquipment1Icon}
            alt=""
            src="/threewhiteshuttlecocksbadmintonracquet-1@2x.png"
          />
          <div className={styles.outdoorBadmintonGets}>
            ‘Outdoor’ Badminton Gets Support From Local Federation
          </div>
          <div className={styles.thisArticleWas}>
            The Badminton World Federation is developing Air Badminton and the
            country’s governing body, Philippine Badminton Association.
          </div>
          <div className={styles.content}>
            <img
              className={styles.imgavatar03Icon}
              alt=""
              src="/imgavatar032@2x.png"
            />
            <div className={styles.text}>
              <div className={styles.header}>Bong Lozada</div>
            </div>
          </div>
          <div className={styles.june20231}>01 June 2023</div>
          <div className={styles.basketballWrapper}>
            <div className={styles.hockey}>badminton</div>
          </div>
          <img
            className={styles.heartSg2001Transparent5Icon}
            alt=""
            src="/heartsg2001transparent-3@2x.png"
          />
          <div className={styles.vectorGroup}>
            <img
              className={styles.frameInner}
              alt=""
              src="/rectangle-21981.svg"
            />
            <input
              className={styles.comment2}
              placeholder="comment"
              type="text"
            />
            <img className={styles.frameItem} alt="" src="/arrow-4.svg" />
          </div>
        </div>
      </div>
      <Link className={styles.discussionsWrapper} to="/discussion" id="discussions-button">
        <b className={styles.discussions}>Discussions!</b>
      </Link>
      <div className={styles.recentNewsClubsRanking} >
        <div className={styles.recentNewsClubsRankingChild} />
        <div className={styles.recentNewsClubsRankingChild} />
        <Link className={styles.clubTable} to="/rank">
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
          <div className={styles.line} id="clubs-ranking">
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
            <div className={styles.div22}>43</div>
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
        </Link>
        <div className={styles.clubsRanking}>Clubs Ranking</div>
        <div className={styles.recentNews}>Recent News</div>
        <Link className={styles.recentNewsClubsRankingInner} to="/news" />
        <div className={styles.navListItem4}>
          <div className={styles.more}>More</div>
          <img className={styles.navListItemChild} alt="" src="/arrow-41.svg" />
        </div>
        <div className={styles.post1Parent}>
          <div className={styles.post1}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.goftToni}>#Pollar. 87 - 12 July 2023</div>
            <div className={styles.baku2023Taekwondo}>
              Baku 2023 Taekwondo Championships
            </div>
          </div>
          <div className={styles.post1}>
            <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
            <div className={styles.goftToni}>#Goft. Toni - 20 July 2023</div>
            <div className={styles.baku2023Taekwondo}>
              Open Championship Royal Liverpool Golf
            </div>
          </div>
          <div className={styles.post1}>
            <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
            <div className={styles.goftToni}>#Cricket. Toni - 27 July 2023</div>
            <div className={styles.baku2023Taekwondo}>
              Ireland Tour of England Test 2023
            </div>
          </div>
        </div>
        <div className={styles.day5Highlights}>Day 5 Highlights</div>
        <img
          className={styles.basketballPlayerActionSunseIcon}
          alt=""
          src="/basketballplayeractionsunset-2@2x.png"
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <input
          className={styles.shovonkhan0099gmailcom}
          placeholder="shovon.khan0099@gmail.com"
          type="text"
        />
        <img className={styles.frameChild2} alt="" src="/arrow-42.svg" />
      </div>
      {/* Add the button below */}
      <button onClick={handleTranslate} style={{ position: 'fixed', bottom: '10px', right: '10px', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Translate to French
      </button>
    </div>
  );
};

export default LandingPage;
