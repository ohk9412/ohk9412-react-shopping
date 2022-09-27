import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div>
            <p>고객센터</p>
            <p>051-000-0000</p>
            <p>
                상담시간 : 오전 9시 - 오후 5시<br />
                점심시간 : 오후 12시 - 오후 1시<br />
            </p>
            </div>
            <div>
            <p>
                프론트엔드 : 오현기<br />
                주소 : 부산광역시<br />
            </p>
            </div>
        </div>
    );
};

export default Footer;