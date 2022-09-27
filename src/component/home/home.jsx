import React from 'react';
import NaverAPIMap from '../service/NaverApiMap';
import styles from './home.module.css'

const Home = () => {
    return (
            <div className={styles.map}>
                <span className={styles.text}> 
                    청춘상회는 엄선된 한우와 한돈만을 취급하여 제공하며, 축산물 뿐만 아닌
                    수산물이나 함께 드실 채소들도 같이 판매하여 다른 곳으로 가실 필요없이
                    청춘상회에서 저녁상을 담당하겠습니다.
               </span>
                <NaverAPIMap />
            </div>
    );
};

export default Home;