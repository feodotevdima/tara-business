import { Group } from "../models";
import PalletCart from "./PalletCart";
import styles from "./groupCart.module.css";

interface GroupCartProps extends Group {
    isActive?: boolean;
}

export default function GroupCart({ groupName, pallets, isActive = false }: GroupCartProps) {
    return (
        <div className={`${styles.groupCart} ${isActive ? styles.active : ''}`}>
            <h1>{groupName}</h1>
            <div>
                {pallets.map((pallet) =>
                    <div key={pallet.name}>
                        <PalletCart name={pallet.name} photoPath={pallet.photoPath} />
                    </div>
                )}
            </div>
        </div>
    );
}