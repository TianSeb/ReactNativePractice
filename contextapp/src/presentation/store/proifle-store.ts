import {create} from 'zustand';

export interface ProfileState {
  name: string;
  email: string;
}

export const useProfileStore = create<ProfileState>()(set => ({
  name: 'John Doe',
  email: 'john.doe@gmail.com',
}));
