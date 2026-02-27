'use client'

import { useState, useRef  } from "react";
import styles from "./page.module.css";
import PalletCart from "./ui/PalletCart";
import { Group } from "./models";
import GroupCart from "./ui/GroupCart";

export default function Catalog() {
    const [selectGroup, setSelectGroup] = useState<number>(1);
    const groupRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

    const groups: Group[] = [
        {
            id: 1,
            groupName: "Евро группа",
            pallets: [
                {
                    name: "ГОСТ 9557-87,  Европоддон б/у 800х1200х145 мм 1 сорт (EUR)",
                    photoPath: "/catalog/euro/variety1.webp"
                },
                {
                    name: "ГОСТ 9557-87, Европоддон б/у 800х1200х145 мм 2 сорт (EUR)",
                    photoPath: "/catalog/euro/variety2.webp"
                }
            ]
        },
        {
            id: 2,
            groupName: "Евро группа (БК)",
            pallets: [
                {
                    name: "ГОСТ 9557-87, Европоддон б/у 800х1200х145 мм 1 сорт (БК)",
                    photoPath: "/catalog/euroBk/variety1.webp"
                },
                {
                    name: "ГОСТ 9557-87, Европоддон б/у 800х1200х145 мм 2 сорт (БК)",
                    photoPath: "/catalog/euroBk/variety2.webp"
                }
            ]
        },
        {
            id: 3,
            groupName: "Типовая группа",
            pallets: [
                {
                    name: "ГОСТ 9078-84, Поддон б/у 800х1200х145 мм 1 сорт, грузоподъемность 1500 кг",
                    photoPath: "/catalog/typical/variety1.webp"
                },
                {
                    name: "ГОСТ 9078-84, Поддон б/у 800х1200х145 мм 2 сорт, грузоподъемность 1500 кг",
                    photoPath: "/catalog/typical/variety2.webp"
                }
            ]
        },
        {
            id: 4,
            groupName: "Широкая группа",
            pallets: [
                {
                    name: "ГОСТ9078-84, Поддон бу 1000х1200х145 мм 1 сорт, грузоподъемность 1500 кг",
                    photoPath: "/catalog/wide/variety1.webp"
                },
                {
                    name: "ГОСТ9078-84, Поддон бу 1000х1200х145 мм 2 сорт, грузоподъемность 1500 кг",
                    photoPath: "/catalog/wide/variety2.webp"
                }
            ]
        }
    ]

        const handleGroupClick = (groupId: number) => {
        setSelectGroup(groupId);
        groupRefs.current[groupId]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };

    return (
        <div className={styles.page}>
            <h1>Каталог поддонов</h1>
            <h2>Выберите нужный тип и получите цену за 5 минут </h2>

            <div className={styles.groups}>
                {groups.map((g) =>
                    <button
                        key={g.id}
                        className={`${styles.groupButton} ${g.id === selectGroup ? styles.activeGroupButton : ''}`}
                        onClick={() => handleGroupClick(g.id)}
                    >
                        {g.groupName}
                    </button>
                )}
            </div>
                
            {groups.map((group) => (
                <div
                    key={group.id}
                    ref={(el) => { groupRefs.current[group.id] = el; }}
                >
                    <GroupCart 
                        id={group.id} 
                        isActive={group.id === selectGroup} 
                        groupName={group.groupName} 
                        pallets={group.pallets}
                    />
                </div>
            ))}
        </div>
    );
}