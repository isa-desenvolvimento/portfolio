import styles from '../styles/Home.module.scss';
import Glass from './components/glass';
import Hexagonal from './components/hexagonal';

export default function Home() {
  const txt = 'Tenho 26 anos, moro em brasília, tenho o gato mais lindo do mundo, gosto de gravar vídeos e jogar airsoft ☠️';

  return (
    <div className={styles.container}>
      <div className={styles.glass}>
        <Glass title="Andressa Novaes" avatar="/img/avatar.jpeg" txt={txt} />
      </div>
    </div>
  );
}
