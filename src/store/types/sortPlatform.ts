import { IPlatform } from 'mocks';

export interface IPlatformsState {
  platforms: IPlatform[];
  sortKey: string;
  sortDirection: 'asc' | 'desc';
}
