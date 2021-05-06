/* eslint-disable import/prefer-default-export */
import { MouseEvent } from 'react';

export async function animateRotate(containerClass: string, cardClass: string) {
  const container = await document.querySelector(containerClass);
  const card = await document.querySelector(cardClass);

  if (!container) return;

  container?.addEventListener('mousemove', (e) => {
    const xaxis = (window.innerWidth / 2 - (e.pageX || 0)) / 10;
    const yaxis = (window.innerHeight / 2 - (e.pageY || 0)) / 10;

    if (card) card.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;
  });

  container?.addEventListener('mouseenter', (e) => {
    if (card) card.style.transition = 'all 0.5s ease';
  });

  container?.addEventListener('mouseleave', (e) => {
    if (card) card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}
