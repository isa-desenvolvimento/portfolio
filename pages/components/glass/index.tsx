import { useImperativeHandle } from 'react';
import styles from './styles.module.scss';
import Avatar from '../avatar';
import Title from '../title';
import Text from '../text';
import ListHexagonal from '../ListHexagonal';

export interface IGlass {
  title: string;
  avatar: string;
  txt: string;
}

export default function Glass({
  title, avatar, txt,
}: IGlass) {
  return (
    <div className={`glass-profile ${styles.container}`}>
      <Avatar
        src={avatar}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <Title txt={title} />
      <Text txt={txt} />
      <ListHexagonal />

    </div>
  );
}
