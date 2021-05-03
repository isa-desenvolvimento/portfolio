import styles from './styles.module.scss';

export interface IProps {
  txt: string;
}

export default function Title({ txt }: IProps) {
  return (
    <div className={styles.container}>
      <h1>{txt}</h1>
    </div>
  );
}
