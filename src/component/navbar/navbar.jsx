import React from 'react';
import { useState } from "react";
import styles from './navbar.module.css'
import Navitem from './../navitem/navitem';

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const menu = [
        { id:1, name: "축산물", address: "/livestock" },
        { id:2, name: "농산물", address: "/produce" },
        { id:3, name: "수산물", address: "/seafood" },
    ];
    return(
        <nav className={styles.navigation__wrapper}>
      <div
        className={!menuToggle ? styles.burger__menu : styles.x__menu}
        onClick={() =>
          menuToggle ? setMenuToggle(false) : setMenuToggle(true)
        }
      >
        <div className={styles.burger_line1}></div>
        <div className={styles.burger_line2}></div>
        <div className={styles.burger_line3}></div>
      </div>

      <div
        className={[
          styles.menu__box,
          !menuToggle ? styles.menu__box__hidden : styles.menu__box__visible,
        ].join(" ")}
      >
        <div className={styles.menu__list}>
          {menu.map((data) => (
            <Navitem
              name={data.name}
              address={data.address}
              offNav={() => setMenuToggle(false)}
              key={data.id}
            />
          ))}
        </div>
      </div>
    </nav>
    )
};

export default Navbar;