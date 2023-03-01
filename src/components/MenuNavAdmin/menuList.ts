import { DashboardIcon } from 'assets';

export interface MenuListType {
  text: string;
  url: string;
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  id: string;
}

export const menuList: Array<MenuListType> = [
  { text: 'Page 1', url: '/admin', image: DashboardIcon, id: '1' },
  { text: 'Page 2', url: '/admin/2', image: DashboardIcon, id: '2' },
  { text: 'Page 3', url: '/admin/3', image: DashboardIcon, id: '3' },
  { text: 'Page 4', url: '/admin/4', image: DashboardIcon, id: '4' },
  { text: 'Page 5', url: '/admin/5', image: DashboardIcon, id: '5' },
  { text: 'Page 6', url: '/admin/6', image: DashboardIcon, id: '6' },
];
