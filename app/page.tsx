'use client'

import styles from "./page.module.css";
import YandexMap from "@/components/YandexMap";
import Image from 'next/image';

export default function Home() {
  const handleCall = () => {
    window.location.href = 'tel:+79214060896';
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Компания<br />ООО "Тара для Бизнеса"</h1>
          <p>Мы&nbsp;успешно ведем свою&nbsp;деятельность с&nbsp;2024&nbsp;года.
            В&nbsp;ассортименте все&nbsp;виды деревянных поддонов&nbsp;<span style={{ whiteSpace: 'nowrap' }}>б/у</span> и нестандарных размеров.
            Компания предоставляет услугу доставки поддонов быстро в&nbsp;необходимые сроки.
            Позвоните нам и&nbsp;мы&nbsp;подберем необходимый сорт для вашей организации,
            организуем доставку товара или&nbsp;самовывоз.
          </p>
          <button onClick={handleCall}>Позвонить</button>
        </div>
      </div>
      <div className={styles.trianglesSection}>
        <div className={styles.trianglesSectionContent}>
          <h1>Где нас найти?</h1>
          <p>
            Юридический адрес(офис):<br />
            г.Колпино , ул. Севастьянова,дом 12,  пом.1-Н
          </p>
          <p>
            Фактический адрес :<br />
            г. Колпино, ул. Финляндская, участок 1, сооружение 2, западнее дома 30, корпус 2, лит А по Финляндской улице
          </p>
        </div>
        <div className={styles.trianglesSectionPallets}>
          <Image src="/pallet.webp" alt="pallet" width={375} height={450} className={styles.trianglesSectionPalletsImage} />
        </div>
      </div>
      <div className={styles.mapContainer}>
        <YandexMap />
      </div>
    </div>
  );
}