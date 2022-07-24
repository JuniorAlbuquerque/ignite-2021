import Image from "next/image";
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="LOGO" width="112" height="38" />
        <nav>
          <a href="" className={styles.active}>Home</a>
          <a href="">Posts</a>
        </nav>
      </div>
    </header>
  );
}
