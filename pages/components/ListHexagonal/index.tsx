import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Hexagonal from '../hexagonal';

import styles from './styles.module.scss';

export default function ListHexagonal() {
  const links = [
    { icon: faLinkedinIn, links: 'https://www.linkedin.com/in/andressa-novaes-b49ab7139/' },
    { icon: faGithub, links: 'https://www.linkedin.com/in/andressa-novaes-b49ab7139/' },
    { icon: faEnvelope, links: 'https://www.linkedin.com/in/andressa-novaes-b49ab7139/' },
  ];

  return (
    <div className={styles.container}>
      <Hexagonal children={links} />
    </div>
  );
}
