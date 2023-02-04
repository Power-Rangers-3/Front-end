import { Outlet } from 'react-router-dom';
import { getGlobalStyles } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import { themeSelector } from 'store/features/theme/theme.selector';
import { useAppSelector } from 'store';

export function MainLayout() {
  return (
    <div>
      <Global styles={getGlobalStyles(useAppSelector(themeSelector))} />
      <Outlet />
    </div>
  );
}
