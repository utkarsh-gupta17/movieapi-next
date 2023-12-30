import styles from '@/styles/common.module.css'
import MovieCard from '../component/movieCard';

const Movie = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cb8d82c0b0msh4cbf40156ebd0adp13fe7djsn484633daf53b',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data.jawSummary)


  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {
              main_data.map((ele) => {
                return <MovieCard key={ele.id} {...ele} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie
