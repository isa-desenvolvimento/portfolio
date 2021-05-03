import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import styles from './styles.module.scss';

export interface IProps {
  icon: IconDefinition;
  className: string;
  link: string;
}

export default function Hexagonal({ children }: Array<IProps>) {
  return (
    <div className={styles.container}>
      <ul>
        {
          children && children.map((item: IProps) => (
            <li className={item.className}>
              <a>
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
