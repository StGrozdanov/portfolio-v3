import { Partner } from '@/app/api/basic-user-info/route';
import styles from './Partners.module.scss';
import Image from 'next/image';

interface PartnerProps {
    partners: Partner[],
}

export default function Partners({ partners }: PartnerProps) {
    return (
        <ul className={styles['clients-ul']}>
            {
                partners.length > 0 && partners.map((partner, index) =>
                    <li key={partner.imgURL + index}>
                        <Image
                            src={partner.imgURL}
                            alt=''
                            width={partner.width}
                            height={partner.height}
                            priority={true}
                        />
                    </li>)
            }
        </ul>
    );
}