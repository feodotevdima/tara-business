import { Pallet } from "../models";
import styles from "./palletCart.module.css";
import Image from 'next/image';


export default function PalletCart({ photoPath, name }: Pallet) {
    const handleCall = () => {
        window.location.href = 'tel:+79214060896';
    };

    return (
        <div className={styles.palletCart}>
            <div className={styles.imageWrapper}>
                <Image
                    src={photoPath}
                    className={styles.Image}
                    alt={name}
                    width={350}
                    height={250}
                    draggable="false"
                    priority={true} 
                />
            </div>
            <div className={styles.content}>
                <p>
                    {name}
                </p>
                <button onClick={handleCall}>Узнать цену</button>
            </div>
        </div>
    );
}