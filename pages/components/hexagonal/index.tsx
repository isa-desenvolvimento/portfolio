import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

export interface IProps {
  icon: IconDefinition;
  href: string;
}

export default function Hexagonal({ list }: any) {
  return (
    <div className={styles.container}>
      <ul>
        {
          list && list.map((item: IProps, index: number) => (
            <li key={index}>
              <a href={item.href}>
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
