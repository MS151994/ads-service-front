import {useEffect, useState} from "react";
import {AdEntity} from '../../../../ads-service-back/types/index';

interface Props {
    id: string;
}

export const SingleAd = (props: Props) => {
    const [ad, setAd] = useState<AdEntity | null>(null)
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/${props.id}`);
            const data = await res.json();
            setAd(data);
        })();
    }, [])

    if (ad === null) {
        return <p>Loading...</p>
    }

    return (
        <div className="single_ad">
            <p>{ad.name}</p>
            <p>{ad.description}</p>
            {!!ad.price && <p>{ad.price} zł</p>}
            <a href={ad.url} target="_blank" rel="noreferrer"> Show ads!</a>
        </div>
    )
}