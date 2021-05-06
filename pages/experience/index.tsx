import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import styles from './styles.module.scss';
import 'react-vertical-timeline-component/style.min.css';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../components/card';

export interface IProps {
  txt: string;
}

export default function Experience({ txt }: IProps) {
  const experiences = [
    {
      empresa: 'IPAM',
      logo: '/img/ipam.png',
      cargo: 'Desenvolvedor Full-stack',
      periodo: 'fevereiro/2017 – maio/2018',
      principais_atividades: 'Desenvolvimento Front/Back-End de Sistemas de Informação Geográfica para WEB, utilizando JS E PHP',
    },
    {
      empresa: 'Transoft',
      logo: '/img/transoft.png',
      cargo: 'Desenvolvedor Full-stack',
      periodo: 'maio/2018 – julho/2019',
      principais_atividades: 'Desenvolvimento front/back-end de novas funcionalidades para o sistema TecView, utilizando AngularJs, PHP7, Bootstrap, Protractor e PHPUNIT',
    },
    {
      empresa: 'imMail Technology',
      logo: '/img/imMail.png',
      cargo: 'Front-end Enginner',
      periodo: 'outubro/2019 - julho/2020',
      principais_atividades: 'Desenvolvimento Front-End de Sistema de mensageria e videoconferência, utilizando as tecnologias Angular Js/ReactJs, NodeJs, Chai, Elasticsearch, Jest, Scrum e Docker',
    },
    {
      empresa: 'T3 Tecnologia',
      logo: '/img/t3.png',
      cargo: 'Desenvolvedor Full-stack  (Freelance)',
      periodo: 'Fevereiro/2020 - O momento',
      principais_atividades: 'Desenvolvimento de um sistema de cálculo jurídico utilizando as tecnologias Angular 9, Docker, Dotnet Core, MSSQL e AD AUTH',
    },
    {
      empresa: 'Logo IT',
      logo: '/img/logoit.jpeg',
      cargo: 'Front-end Enginner',
      periodo: 'julho/2020 – novembro/2020',
      principais_atividades: 'Atuava no desenvolvimento da plataforma de stream de vídeo web utilizando as tecnologias Angular 6-8, React Native, ReactJs, Scrum e Docker.',
    },

    {
      empresa: 'AIS DIGITAL',
      logo: '/img/ilia.jpeg',
      cargo: 'Front-end Mobile',
      periodo: 'novembro/2020 – até o momento',
      principais_atividades: 'Atuava no desenvolvimento da plataforma de stream de vídeo web utilizando as tecnologias Angular 6-8, React Native, ReactJs, Scrum e Docker.',
    },
  ];

  return (
    <div className={`title ${styles.container}`}>
      <VerticalTimeline>
        { experiences.map((expert) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'var(--cyan-3)',
              borderRadius: '2rem',
              backdropFilter: 'blur(2rem)',
              color: 'var(--gray)',
              transformStyle: 'preserve-3d',
            }}
            contentArrowStyle={{ borderRight: '7px solid  var(--cyan-3)', top: 30 }}
            date={expert.periodo}
            iconStyle={{ background: 'var(--rose)' }}
          >
            <Card avatar={expert.logo} title={expert.empresa} txt={expert.principais_atividades} />
          </VerticalTimelineElement>
        ))}

      </VerticalTimeline>
    </div>
  );
}
