import { useState } from 'react';
import { apiClient } from '../lib/apiClient'; // Adjust the import path as necessary
import { REGISTER_ROUTE } from '../utils/constants';
import { useStore } from '../store/store';
import { toast } from 'sonner';

interface SignupData {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  success: boolean;
  message: string;
  user?: any; // Adjust this to your user data structure
}

interface useRegisterUserHookReturn {
  signup: (data: SignupData) => Promise<SignupResponse | undefined>;
  loading: boolean;
  error: string | null;
}

const useRegisterUserHook = (): useRegisterUserHookReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { user , setUser } : any = useStore()

  const signup = async (data: SignupData): Promise<SignupResponse | undefined> => {
    setLoading(true);
    console.log("data",data);
    try {
        
        console.log("data here",data);
      const response = await apiClient.post<SignupResponse>(REGISTER_ROUTE, data);
        console.log(" register response",response.data);
       toast.success('User registered successfully');
       
      setUser(response.data)

      return response.data;
    } catch (err) {
        console.log("error",err);   
       toast.error('Failed to register user');
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};

export default useRegisterUserHook;
