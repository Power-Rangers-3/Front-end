import AiMyLogic from './assets/AiMyLogic.png';
import Artsend from './assets/Artsend_.jpg';
import BotHelp1 from './assets/BotHelp1.png';
import BotKits from './assets/botkits_.png';
import Botmaker from './assets/Botmaker.png';
import Botsify from './assets/botsify.png';
import Buisnessbot from './assets/businessbot.png';
import Photo from './assets/photo.png';
import Sberbb from './assets/sberbb.png';

export interface IPlatform {
  title: string;
  picture: string;
  text: string;
  link: string;
  id: string;
  isFavorite: boolean;
  date?: Date;
}

export const platformsData: IPlatform[] = [
  {
    title: 'Aimylogic',
    picture: AiMyLogic,
    text: 'Мультиканальная платформа для создания чат- ботов с искусственным интеллектом и голосовых ботов.',
    link: 'https://townsend.pro/',
    id: '1',
    isFavorite: false,
  },
  {
    title: 'Buisnessbot',
    picture: Buisnessbot,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '2',
    isFavorite: false,
  },
  {
    title: 'Botvsem',
    picture: Photo,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '3',
    isFavorite: false,
  },
  {
    title: 'Artsend',
    picture: Artsend,
    text: 'Сервис массовых рассылок сообщений и автоворонок',
    link: 'https://townsend.pro/',
    id: '4',
    isFavorite: false,
  },

  {
    title: 'BotKits',
    picture: BotKits,
    text: 'Мультиканальная платформа для автоматизации общения с клиентами в социальных сетях и мессенджерах.',
    link: 'https://townsend.pro/',
    id: '5',
    isFavorite: false,
  },
  {
    title: 'Botmaker',
    picture: Botmaker,
    text: 'Одноканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '6',
    isFavorite: false,
  },
  {
    title: 'Botsify',
    picture: Botsify,
    text: 'Мультиканальная платформа для автоматизации общения с клиентами в мессенджерах.',
    link: 'https://townsend.pro/',
    id: '7',
    isFavorite: false,
  },
  {
    title: 'Sberbb',
    picture: Sberbb,
    text: 'Мультиканальная платформа для создания чат-ботов с "искусственным интеллектом" и голосовых ботов.',
    link: 'https://townsend.pro/',
    id: '8',
    isFavorite: false,
  },
  {
    title: 'BotHelp1',
    picture: BotHelp1,
    text: 'Мультиканальная платформа.',
    link: 'https://townsend.pro/',
    id: '9',
    isFavorite: false,
  },
  {
    title: 'Aimylogic',
    picture: AiMyLogic,
    text: 'Мультиканальная платформа для создания чат- ботов с искусственным интеллектом и голосовых ботов.',
    link: 'https://townsend.pro/',
    id: '10',
    isFavorite: false,
  },
  {
    title: 'Buisnessbot',
    picture: Buisnessbot,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '11',
    isFavorite: false,
  },
  {
    title: 'Botvsem',
    picture: Photo,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '12',
    isFavorite: false,
  },
  {
    title: 'Artsend',
    picture: Artsend,
    text: 'Сервис массовых рассылок сообщений и автоворонок',
    link: 'https://townsend.pro/',
    id: '13',
    isFavorite: false,
  },

  {
    title: 'BotKits',
    picture: BotKits,
    text: 'Мультиканальная платформа для автоматизации общения с клиентами в социальных сетях и мессенджерах.',
    link: 'https://townsend.pro/',
    id: '14',
    isFavorite: false,
  },
  {
    title: 'Botmaker',
    picture: Botmaker,
    text: 'Одноканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '15',
    isFavorite: false,
  },
];
