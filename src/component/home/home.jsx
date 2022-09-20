import React from 'react';
import NaverAPIMap from '../service/NaverApiMap';
import styles from './home.module.css'

const Home = () => {
    return (
            <div className={styles.map}>
                <span className={styles.text}> 
                    우리 청춘상회는 나도 못받아본 A+ 받은
                    한우로 쓰르가 마 도축하고 돼지도 한돈으로
                    하고 닭도 있고 채소도 있고 생선류도 뭐 있고
                    최상급 품질을 보장 뭐시기 저기시하고 샬라 샬라 얄라리
                    얄라 에베베베베베베베베 하고 거시기가 저기시 하고 합니다.<br/>
                    계속해서 좋은 품질을 약속드리는 청춘상회가 되겠습니다.
                </span>
                <NaverAPIMap />
            </div>
    );
};

export default Home;