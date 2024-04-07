import {create} from 'zustand';

type Store = {
  count: number;
  inc: (value: number) => void;
};

export const useCounterStore = create<Store>()((set, get) => ({
  count: 1,
  inc: (value) => set({count: get().count + value}),
}));
