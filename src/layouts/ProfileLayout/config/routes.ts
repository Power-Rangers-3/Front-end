import { MaterialsIcon, MyHistoryIcon, MyPageIcon, RatesIcon, SettingsIcon, WalletIcon } from 'assets';
import { ROUTE } from 'router';

export const routes = [
  {
    to: ROUTE.PROFILE_FAVORITE,
    icon: MyPageIcon,
    text: 'Дашборд',
  },
  {
    to: ROUTE.PROFILE,
    icon: MaterialsIcon,
    text: 'Подобрать решение',
  },
  {
    to: ROUTE.PROFILE_PLATFORMS,
    icon: MyHistoryIcon,
    text: 'Подобрать платформу',
  },
  {
    to: ROUTE.PROFILE,
    icon: WalletIcon,
    text: 'Профиль',
  },
  {
    to: ROUTE.PROFILE,
    icon: RatesIcon,
    text: 'Тарифы',
  },
  {
    to: ROUTE.PROFILE_SETTINGS,
    icon: SettingsIcon,
    text: 'Настройки',
  },
];
