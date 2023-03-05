import { HeartIcon, ProfileIcon, SearchIcon, SettingsIcon } from 'assets';
import { ROUTE } from 'router';

const ProfileRoute = (path: string) => `${ROUTE.PROFILE}/${path}`;

export const routes = [
  {
    to: ROUTE.PROFILE,
    text: 'Мои настройки',
    icon: ProfileIcon,
  },
  {
    to: ProfileRoute(ROUTE.PROFILE_HISTORY),
    text: 'Поиск',
    icon: SearchIcon,
  },
  {
    to: ProfileRoute(ROUTE.PROFILE_FAVORITE),
    text: 'Избранное',
    icon: HeartIcon,
  },
  {
    to: ProfileRoute(ROUTE.PROFILE_SETTINGS),
    text: 'Настройки',
    icon: SettingsIcon,
  },
];
