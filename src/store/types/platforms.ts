import { IPlatform } from 'mocks';

export interface IPlatformsState {
  platforms: IPlatform[];
  favoritePlatforms: IPlatform[];
  visitedPlatforms: IPlatform[];
}
