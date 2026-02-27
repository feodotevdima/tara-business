import React from 'react';
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerInfo}>
                    <div>
                        <strong className={styles.footerLogo}>Тара для Бизнеса</strong>
                    </div>
                    <div className={styles.footerEmail}>
                        <strong>Адрес</strong>
                        <br />
                        г. Колпино, ул. Финляндская, участок 1,< br/>
                        сооружение 2, западнее дома 30, корпус 2, лит А
                    </div>
                    <div className={styles.footerEmail}>
                        <strong>Контакты</strong>
                        <br />
                        <a href="tel:+79214060896">Номер для заказа: 8-921-406-08-96</a> < br/>
                        <a href="mailto:tara@tara-business.ru">Почта: tara@tara-business.ru</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;