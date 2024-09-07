import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { productFormSlice } from './slices/productFormSlice';
import { userSlice } from './slices/userSlice';

export const useStore = create(
  devtools((set, get) => ({
    ...productFormSlice(set),
    ...userSlice(set),
  }))
);  
export default useStore;
