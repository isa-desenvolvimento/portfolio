import { useEffect } from 'react';
import Lottie from 'react-lottie';
import styles from '../styles/Home.module.scss';
import Glass from './components/glass';
import { animateRotate } from './utils/animateCard';
import animationData from './utils/animationData.json';

export default function Home() {
  const txt = 'Tenho 26 anos, moro em brasília, tenho o gato mais lindo do mundo, gosto de gravar vídeos e jogar airsoft ☠️';

  useEffect(() => {
    animateRotate('.container', '.glass-profile');
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={styles.container}>
      <div className={`container ${styles.glass}`}>
        <Glass title="Andressa Novaes" avatar="/img/avatar.jpeg" txt={txt} />
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}
