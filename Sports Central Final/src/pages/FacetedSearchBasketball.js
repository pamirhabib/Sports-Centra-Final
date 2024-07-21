import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FacetedSearchBasketball.module.css";

// Expanded dummy data for basketball players with famous names and representation across different leagues, age ranges, and genders
const players = [
  { id: 1, name: "LeBron James", age: 36, gender: "Male", league: "NBA", imageUrl: "image-9@2x.png" },
  { id: 2, name: "Sue Bird", age: 40, gender: "Female", league: "WNBA", imageUrl: "image-9@2x.png" },
  { id: 3, name: "Stephen Curry", age: 33, gender: "Male", league: "NBA", imageUrl: "image-9@2x.png" },
  { id: 4, name: "Diana Taurasi", age: 39, gender: "Female", league: "WNBA", imageUrl: "image-9@2x.png" },
  { id: 5, name: "Kevin Durant", age: 32, gender: "Male", league: "NBA", imageUrl: "image-9@2x.png" },
  { id: 6, name: "Breanna Stewart", age: 27, gender: "Female", league: "WNBA", imageUrl: "image-9@2x.png" },
  { id: 7, name: "Giannis Antetokounmpo", age: 26, gender: "Male", league: "NBA", imageUrl: "image-9@2x.png" },
  { id: 8, name: "Candace Parker", age: 35, gender: "Female", league: "WNBA", imageUrl: "image-9@2x.png" },
  { id: 9, name: "Anthony Davis", age: 28, gender: "Male", league: "NBA", imageUrl: "image-9@2x.png" },
  { id: 10, name: "Elena Delle Donne", age: 31, gender: "Female", league: "WNBA", imageUrl: "/image-9@2x.png" },
  { id: 11, name: "Luka Dončić", age: 22, gender: "Male", league: "NBA", imageUrl: "image-9@2x.png" },
  { id: 12, name: "A'ja Wilson", age: 25, gender: "Female", league: "WNBA", imageUrl: "image-9@2x.png" },
  { id: 13, name: "James Harden", age: 31, gender: "Male", league: "NBA", imageUrl: "image-9@2x.png" },
  { id: 14, name: "Sylvia Fowles", age: 35, gender: "Female", league: "WNBA", imageUrl: "image-9@2x.png" },
  { id: 15, name: "Jayson Tatum", age: 23, gender: "Male", league: "NBA", imageUrl: "image-9@2x.png" },
  { id: 16, name: "Nneka Ogwumike", age: 30, gender: "Female", league: "WNBA", imageUrl: "image-9@2x.png" },
  // Additional players to ensure each age group has at least one player in each league
  { id: 17, name: "Ja Morant", age: 22, gender: "Male", league: "NBA", imageUrl: "image-9@2x.png" },
  { id: 18, name: "Courtney Vandersloot", age: 32, gender: "Female", league: "WNBA", imageUrl: "image-9@2x.png" },
  { id: 19, name: "Nikola Jokić", age: 26, gender: "Male", league: "NBA", imageUrl: "image-9@2x.png" },
  { id: 20, name: "Alyssa Thomas", age: 29, gender: "Female", league: "WNBA", imageUrl: "image-9@2x.png" },
];

const FacetedSearchBasketball = () => {
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
    <div className={styles.facetedSearchBasketball}>
      <div className={styles.facetedSearchBasketballChild} />
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
          <label htmlFor="league">Basketball League</label>
          <select id="league" value={leagueFilter} onChange={e => setLeagueFilter(e.target.value)}>
            <option value="">All</option>
            <option value="NBA">NBA</option>
            <option value="WNBA">WNBA</option>
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
          <p className={styles.noPlayersFound}>No players found</p>
        )}
      </div>
    </div>
  );
};

export default FacetedSearchBasketball;
