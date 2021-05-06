/* eslint-disable import/prefer-default-export */
export async function animateRotate(containerClass: string, cardClass: string, itens: any = []) {
  const container = await document.querySelector(containerClass);
  const card = await document.querySelector(cardClass);

  container?.addEventListener('mousemove', (e) => {
    const xaxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yaxis = (window.innerHeight / 2 - e.pageY) / 10;

    card && (card.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`);
  });

  container?.addEventListener('mouseenter', (e) => {
    card && (card.style.transition = 'all 0.5s ease');
  });

  container?.addEventListener('mouseleave', (e) => {
    card && (card.style.transform = 'rotateY(0deg) rotateX(0deg)');
  });
}
