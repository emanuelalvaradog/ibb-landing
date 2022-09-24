import Link from "next/link";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import { RouteLinks } from "../RouteLinks/RouteLinks";
import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/">
          <Image
            src="/ibbLogo.png"
            alt="Iglesia Bautista Bethel logo"
            layout="fixed"
            width="100%"
            height="60%"
          />
        </Link>
        <Menu right disableAutoFocus>
          <RouteLinks />
        </Menu>
      </div>
    </nav>
  );
}
