import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ChangeNameType } from 'modules/Profile/types';
// import { UserRenameResponseType } from 'modules/Profile/types/userRename';

import { userRename } from '../../modules';

export const renameAction = createAsyncThunk<Awaited<ReturnType<typeof userRename>>>(
  'user/renameAction',
  (requestParams: any): any => {
    userRename(requestParams);
  },
);
