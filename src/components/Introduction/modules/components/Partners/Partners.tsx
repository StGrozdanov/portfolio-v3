import styles from './Partners.module.scss';
import Image from 'next/image';

interface PartnerProps {
    partners: string[],
}

export default function Partners({ partners }: PartnerProps) {
    return (
        <ul className={styles['clients-ul']}>
            {
                partners.length > 0 && partners.map((partnerURL, index) =>
                    <li key={partnerURL + index}>
                        <Image
                            src={partnerURL}
                            alt=''
                            width={100}
                            height={100}
                            priority={true}
                        />
                    </li>)
            }
        </ul>
    );
}