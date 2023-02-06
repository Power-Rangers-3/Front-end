import { RootState } from 'store/index';

export const themeSelector = (state: RootState): RootState['theme']['themeVariant'] => state.theme.themeVariant;
