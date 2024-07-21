import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FacetedSearchVolleyball.module.css";

// Expanded dummy data for volleyball players with famous names and representation across different leagues, age ranges, and genders
const players = [
  { id: 1, name: "Karch Kiraly", age: 60, gender: "Male", league: "AVP", imageUrl: "image-10@2x.png" },
  { id: 2, name: "Misty May-Treanor", age: 44, gender: "Female", league: "AVP", imageUrl: "image-10@2x.png" },
  { id: 3, name: "Phil Dalhausser", age: 41, gender: "Male", league: "AVP", imageUrl: "image-10@2x.png" },
  { id: 4, name: "Kerri Walsh Jennings", age: 42, gender: "Female", league: "FIVB", imageUrl: "image-10@2x.png" },
  { id: 5, name: "Matt Anderson", age: 34, gender: "Male", league: "FIVB", imageUrl: "image-10@2x.png" },
  { id: 6, name: "Jordan Larson", age: 35, gender: "Female", league: "FIVB", imageUrl: "image-10@2x.png" },
  { id: 7, name: "Ivan Zaytsev", age: 32, gender: "Male", league: "CEV", imageUrl: "image-10@2x.png" },
  { id: 8, name: "Paola Egonu", age: 23, gender: "Female", league: "CEV", imageUrl: "image-10@2x.png" },
  { id: 9, name: "Bruno Rezende", age: 35, gender: "Male", league: "FIVB", imageUrl: "image-10@2x.png" },
  { id: 10, name: "Gabi Guimarães", age: 28, gender: "Female", league: "FIVB", imageUrl: "image-10@2x.png" },
  { id: 11, name: "Max Holt", age: 34, gender: "Male", league: "FIVB", imageUrl: "image-10@2x.png" },
  { id: 12, name: "Thaisa Menezes", age: 34, gender: "Female", league: "FIVB", imageUrl: "image-10@2x.png" },
  { id: 13, name: "Wilfredo León", age: 27, gender: "Male", league: "CEV", imageUrl: "image-10@2x.png" },
  { id: 14, name: "Zhu Ting", age: 27, gender: "Female", league: "CEV", imageUrl: "image-10@2x.png" },
  { id: 15, name: "Simone Giannelli", age: 25, gender: "Male", league: "CEV", imageUrl: "image-10@2x.png" },
  { id: 16, name: "Kim Yeon-koung", age: 34, gender: "Female", league: "CEV", imageUrl: "image-10@2x.png" },
  // Additional players to ensure each age group has at least one player in each league
  { id: 17, name: "Taylor Sander", age: 29, gender: "Male", league: "FIVB", imageUrl: "image-10@2x.png" },
  { id: 18, name: "Lonneke Slöetjes", age: 30, gender: "Female", league: "CEV", imageUrl: "image-10@2x.png" },
  { id: 19, name: "Micah Christenson", age: 28, gender: "Male", league: "FIVB", imageUrl: "image-10@2x.png" },
  { id: 20, name: "Tatyana Kosheleva", age: 33, gender: "Female", league: "CEV", imageUrl: "image-10@2x.png" },
];

const FacetedSearchVolleyball = () => {
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [leagueFilter, setLeagueFilter] = useState("");

  const filteredPlayers = players.filter(player => {
    const [minAge, maxAge] = ageFilter.split("-").map(Number);
    return (
      (ageFilter === "" || (player.age >= minAge && player.age <= maxAge)) &&
      (genderFilter === "" || player.gender === genderFilter) &&
      (leagueFilter === "" || player.league === leagueFilter)
    );
  });

  return (
    <div className={styles.facetedSearchVolleyball}>
      <div className={styles.facetedSearchVolleyballChild} />
      <i className={styles.searchPlayers}>Search Players</i>
      <div className={styles.sportsCentral}>Sports Central</div>
      <Link className={styles.image2} to="/" />

      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <label htmlFor="age">Age</label>
          <select id="age" value={ageFilter} onChange={e => setAgeFilter(e.target.value)}>
            <option value="">All</option>
            <option value="20-25">20-25</option>
            <option value="26-30">26-30</option>
            <option value="31-35">31-35</option>
            <option value="36-40">36-40</option>
            <option value="41-45">41-45</option>
            <option value="46-50">46-50</option>
          </select>
        </div>
        <div className={styles.filter}>
          <label htmlFor="gender">Gender</label>
          <select id="gender" value={genderFilter} onChange={e => setGenderFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className={styles.filter}>
          <label htmlFor="league">Volleyball League</label>
          <select id="league" value={leagueFilter} onChange={e => setLeagueFilter(e.target.value)}>
            <option value="">All</option>
            <option value="AVP">AVP</option>
            <option value="FIVB">FIVB</option>
            <option value="CEV">CEV</option>
          </select>
        </div>
      </div>

      <div className={styles.playerList}>
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map(player => (
            <div key={player.id} className={styles.playerCard}>
              <img src={player.imageUrl} alt={player.name} />
              <h3>{player.name}</h3>
              <p>Age: {player.age}</p>
              <p>Gender: {player.gender}</p>
              <p>League: {player.league}</p>
            </div>
          ))
        ) : (
          <p>No players found</p>
        )}
      </div>
    </div>
  );
};

export default FacetedSearchVolleyball;
