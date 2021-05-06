/* eslint-disable react/destructuring-assignment */
import Image from 'next/image';
import styles from './styles.module.scss';

export interface IProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  styles?: any;
}

export default function Avatar(props: IProps) {
  return (
    <div className={props.styles ? props.styles : `${styles.avatar} avatar`}>
      <div className={styles.spin} />
      <Image {...props} className={styles.img} objectFit="unset" />
    </div>
  );
}
