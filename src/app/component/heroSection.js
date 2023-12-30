import heroStyles from '@/styles/herosection.module.css';
import styles from '@/styles/common.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Mulish } from 'next/font/google';

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})



const HeroSection = ({ title, imageUrl }) => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>{title}</h1>
            <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
              our
              selection of the latest and greatest movies, and find your new favorite today.
            </p>
            <Link href="/movie">
              <button className={mulish.className}>Explore Movies</button>
            </Link>
          </div>
          <div className={heroStyles.hero_image}>
            <Image src={imageUrl} alt="watching netflix" width={500} height={500}></Image>
          </div>
        </div>
      </div>
      <div className={heroStyles["custom-shape-divider-bottom-1703955537"]}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={heroStyles["shape-fill"]}></path>
    </svg>
</div>
    </main>
  )
}

export default HeroSection;