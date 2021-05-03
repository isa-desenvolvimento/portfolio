import styles from './styles.module.scss';

export interface IProps {
  txt: string;
}

export default function Text({ txt }: IProps) {
  return (
    <div className={styles.container}>
      <h3>{txt}</h3>
    </div>
  );
}
