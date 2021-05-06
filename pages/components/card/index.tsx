import Avatar from '../avatar';
import Title from '../title';
import Text from '../text';
import styles from './styles.module.scss';

export interface IProps {
  avatar: string;
  title: string;
  txt: string;
}

export default function Card({ txt, avatar, title }: IProps) {
  return (
    <div className={styles.container}>
      <Avatar
        src={avatar}
        alt="Picture of the author"
        width={250}
        height={250}
        styles={styles.avatar}
      />
      <Title txt={title} />
      <Text txt={txt} />
    </div>
  );
}
