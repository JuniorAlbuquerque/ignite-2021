import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  const { asPath } = useRouter()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="LOGO" width="112" height="38" />
        <nav>
          <Link href="/">
            <a className={asPath === '/' ? styles.active : ''}>
              Home
            </a>
          </Link>
       
          <Link href="/posts" prefetch>
            <a className={asPath === '/posts' ? styles.active : ''}>Posts</a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
