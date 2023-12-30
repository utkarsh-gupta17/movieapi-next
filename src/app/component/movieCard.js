import styles from '@/styles/common.module.css';
import Image from 'next/image';
import Link from 'next/link';
const MovieCard = (ele) => {
  const {id,type,title,synopsis} = ele.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image src={ele.jawSummary.backgroundImage.url} alt={title} width={270} height={200}/>
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0,20)}</h2>
          <p>{`${synopsis.substring(0,70)} ...`}</p>
          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MovieCard;
