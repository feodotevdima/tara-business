'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const pointCoordinates = [59.752917, 30.549867];
    const centerCoordinates = [59.7534, 30.551];
    const centerCoordinatesSmall = [59.754, 30.549867];
    const center = mounted && windowWidth > 700? centerCoordinates: centerCoordinatesSmall;

    return (
        <YMaps>
            <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 10, marginTop: mounted && windowWidth > 550? '-280px': '-80px' }}>
                <Map
                    defaultState={{
                        center: center,
                        zoom: mounted && windowWidth > 700? 18: 17,
                        controls: ['zoomControl', 'fullscreenControl'],
                    }}
                    width="100%"
                    height= {mounted && windowWidth > 550? "80vh": "60vh"}
                    instanceRef={(ref) => {
                        if (ref) {
                            ref.behaviors.disable('scrollZoom');
                        }
                    }}
                    modules={['control.ZoomControl', 'control.FullscreenControl']}
                >
                    <Placemark
                        geometry={pointCoordinates}
                        properties={{
                            hintContent: 'ООО "Тара для Бизнеса"',
                        }}
                    />
                </Map>
            </div>
        </YMaps>
    );
};

export default YandexMap;