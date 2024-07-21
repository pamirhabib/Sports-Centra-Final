import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FacetedSearchFootball.module.css";

// Expanded dummy data for players with famous names and representation across different leagues, age ranges, and genders
const players = [
  { id: 1, name: "Lionel Messi", age: 34, gender: "Male", league: "Ligue 1", imageUrl: "image-11@2x.png" },
  { id: 2, name: "Megan Rapinoe", age: 36, gender: "Female", league: "NWSL", imageUrl: "image-11@2x.png" },
  { id: 3, name: "Cristiano Ronaldo", age: 37, gender: "Male", league: "Premier League", imageUrl: "image-11@2x.png" },
  { id: 4, name: "Sam Kerr", age: 28, gender: "Female", league: "WSL", imageUrl: "image-11@2x.png" },
  { id: 5, name: "Kylian Mbappé", age: 23, gender: "Male", league: "Ligue 1", imageUrl: "image-11@2x.png" },
  { id: 6, name: "Alex Morgan", age: 32, gender: "Female", league: "NWSL", imageUrl: "image-11@2x.png" },
  { id: 7, name: "Neymar Jr.", age: 29, gender: "Male", league: "Ligue 1", imageUrl: "image-11@2x.png" },
  { id: 8, name: "Lucy Bronze", age: 30, gender: "Female", league: "NWSL", imageUrl: "image-11@2x.png" },
  { id: 9, name: "Robert Lewandowski", age: 33, gender: "Male", league: "Bundesliga", imageUrl: "image-11@2x.png" },
  { id: 10, name: "Ada Hegerberg", age: 26, gender: "Female", league: "Division 1 Féminine", imageUrl: "image-11@2x.png" },
  { id: 11, name: "Zlatan Ibrahimović", age: 40, gender: "Male", league: "Serie A", imageUrl: "image-11@2x.png" },
  { id: 12, name: "Caroline Graham Hansen", age: 26, gender: "Female", league: "La Liga", imageUrl: "image-11@2x.png" },
  { id: 13, name: "Sadio Mané", age: 29, gender: "Male", league: "Bundesliga", imageUrl: "image-11@2x.png" },
  { id: 14, name: "Vivianne Miedema", age: 25, gender: "Female", league: "WSL", imageUrl: "image-11@2x.png" },
  { id: 15, name: "Sergio Ramos", age: 25, gender: "Male", league: "La Liga", imageUrl: "image-11@2x.png" },
  { id: 16, name: "Wendie Renard", age: 31, gender: "Female", league: "Division 1 Féminine", imageUrl: "image-11@2x.png" },
  { id: 17, name: "Paulo Dybala", age: 28, gender: "Male", league: "Serie A", imageUrl: "image-11@2x.png" },
  { id: 18, name: "Irene Paredes", age: 30, gender: "Female", league: "Premier League", imageUrl: "image-11@2x.png" },
  { id: 19, name: "Erling Haaland", age: 21, gender: "Male", league: "Bundesliga", imageUrl: "image-11@2x.png" },
  { id: 20, name: "Amandine Henry", age: 31, gender: "Female", league: "Bundesliga", imageUrl: "image-11@2x.png" },
  { id: 21, name: "Joshua Kimmich", age: 26, gender: "Male", league: "Bundesliga", imageUrl: "image-11@2x.png" },
  { id: 22, name: "Tobin Heath", age: 33, gender: "Female", league: "Premier League", imageUrl: "image-11@2x.png" },
  { id: 23, name: "Giorgio Chiellini", age: 37, gender: "Male", league: "Serie A", imageUrl: "image-11@2x.png" },
  { id: 24, name: "Marta", age: 35, gender: "Female", league: "La Liga", imageUrl: "image-11@2x.png" },
  { id: 25, name: "Jan Oblak", age: 29, gender: "Male", league: "La Liga", imageUrl: "image-11@2x.png" },
  { id: 26, name: "Pernille Harder", age: 28, gender: "Female", league: "Bundesliga", imageUrl: "image-11@2x.png" },
  { id: 27, name: "Marcus Rashford", age: 24, gender: "Male", league: "Premier League", imageUrl: "image-11@2x.png" },
  { id: 28, name: "João Félix", age: 22, gender: "Male", league: "La Liga", imageUrl: "image-11@2x.png" },
  { id: 29, name: "Federico Chiesa", age: 24, gender: "Male", league: "Serie A", imageUrl: "image-11@2x.png" },
  { id: 30, name: "Angel Di Maria", age: 34, gender: "Male", league: "Ligue 1", imageUrl: "image-11@2x.png" },
  { id: 31, name: "Becky Sauerbrunn", age: 36, gender: "Female", league: "Premier League", imageUrl: "image-11@2x.png" },
];

const FacetedSearchFootball = () => {
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
    <div className={styles.facetedSearchFootball}>
      <div className={styles.facetedSearchFootballChild} />
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
          <label htmlFor="league">Soccer League</label>
          <select id="league" value={leagueFilter} onChange={e => setLeagueFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Premier League">Premier League</option>
            <option value="La Liga">La Liga</option>
            <option value="Bundesliga">Bundesliga</option>
            <option value="Serie A">Serie A</option>
            <option value="Ligue 1">Ligue 1</option>
            <option value="NWSL">NWSL</option>
            <option value="WSL">WSL</option>
            <option value="Division 1 Féminine">Division 1 Féminine</option>
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

export default FacetedSearchFootball;
