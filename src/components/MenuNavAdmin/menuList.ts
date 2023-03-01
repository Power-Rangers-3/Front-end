import { dashboardIcon } from 'assets';

export interface MenuListType {
  text: string;
  url: string;
  img: string;
  id: string;
}

export const menuList: Array<MenuListType> = [
  { text: 'Page 1', url: '/admin', img: dashboardIcon, id: '1' },
  { text: 'Page 2', url: '/admin/2', img: dashboardIcon, id: '2' },
  { text: 'Page 3', url: '/admin/3', img: dashboardIcon, id: '3' },
  { text: 'Page 4', url: '/admin/4', img: dashboardIcon, id: '4' },
  { text: 'Page 5', url: '/admin/5', img: dashboardIcon, id: '5' },
  { text: 'Page 6', url: '/admin/6', img: dashboardIcon, id: '6' },
];
