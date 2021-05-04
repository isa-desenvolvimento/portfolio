export function animateRotate(containerClass: string, cardClass: string, itens: any = []) {
  const container = document.querySelector(containerClass);
  const card = document.querySelector(cardClass);

  container.addEventListener('mousemove', (e) => {
    const xaxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yaxis = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;
  });

  container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'all 0.5s ease';
  });

  container.addEventListener('mouseleave', (e) => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}
