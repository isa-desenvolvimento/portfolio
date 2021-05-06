import Lottie from 'react-lottie';
import { MouseEvent } from 'react';
import styles from '../styles/Home.module.scss';
import Glass from './components/glass';
import animationData from './utils/animationData.json';

export default function Home() {
  const txt = 'Tenho 26 anos, moro em brasília, tenho o gato mais lindo do mundo, gosto de gravar vídeos e jogar airsoft ☠️';

  const handleMouseMove = async (e: MouseEvent) => {
    const xaxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yaxis = (window.innerHeight / 2 - e.pageY) / 10;
    const card = await document.querySelector<HTMLElement>('.glass-profile');

    if (card) {
      card.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;
    }
  };

  const handleMouseleave = async () => {
    const card = await document.querySelector<HTMLElement>('.glass-profile');
    if (card) card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

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
      <div className={`container ${styles.glass}`} onMouseMove={(e:MouseEvent) => handleMouseMove(e)} onMouseLeave={handleMouseleave}>
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
