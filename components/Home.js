import styles from '../styles/Home.module.css';
import CounterSet from './CounterSet';
import Timer from './Timer';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>25 + 5 Clock</h1>
        <div className={styles.setterContainer}>
        <CounterSet name={"break"} initialTime={5}/>
        <CounterSet name={"session"} initialTime={25}/>
        </div>
        <Timer/>
      </main>
    </div>
  );
}

export default Home;
