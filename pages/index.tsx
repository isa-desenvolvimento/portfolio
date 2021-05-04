import { useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import Glass from './components/glass';
import { animateRotate } from './utils/animateCard';

export default function Home() {
  const txt = 'Tenho 26 anos, moro em brasília, tenho o gato mais lindo do mundo, gosto de gravar vídeos e jogar airsoft ☠️';

  useEffect(() => {
    animateRotate('.container', '.glass-profile', ['.avatar']);
  });
  return (
    <div className={styles.container}>
      <div className={`container ${styles.glass}`}>
        <Glass title="Andressa Novaes" avatar="/img/avatar.jpeg" txt={txt} />
      </div>
    </div>
  );
}
