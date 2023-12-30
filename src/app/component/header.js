import dynamic from 'next/dynamic'
import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from './nav';

export default function Header() {
  return (
    <div className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/logo.jpg" alt="movie-app logo image" width={200} height={100} priority={false} />
        </Link>
      </div>
        <Nav/>
    </div>
  )
} 
