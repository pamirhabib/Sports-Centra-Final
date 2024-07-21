import { Link } from "react-router-dom";
import styles from "./Poll.module.css";

const Poll = () => {
  return (
    <div className={styles.poll}>
      <div className={styles.pollChild} />
      <i className={styles.polls}>Polls</i>
      <div className={styles.sportsCentral}>Sports Central</div>
      <Link className={styles.image2} to="/" />
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
    </div>
  );
};

export default Poll;
