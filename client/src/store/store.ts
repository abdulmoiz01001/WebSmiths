import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { productFormSlice } from './slices/productFormSlice';

export const useStore = create(
  devtools((set, get) => ({
    ...productFormSlice(set),
  }))
);  
export default useStore;
