import Image from 'next/image';
import styles from './styles.module.scss';

export interface IProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default function Avatar(props: IProps) {
  return (
    <div className={`${styles.avatar} avatar`}>
      <div className={styles.spin} />
      <Image {...props} className={styles.img} objectFit="unset" />
    </div>
  );
}
