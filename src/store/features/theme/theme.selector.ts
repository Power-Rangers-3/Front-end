import { RootState } from 'store/types/types';

export const themeSelector = (state: RootState): RootState['theme']['themeVariant'] => state.theme.themeVariant;
