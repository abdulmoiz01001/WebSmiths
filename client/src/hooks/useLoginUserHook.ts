import { apiClient } from "@/lib/apiClient";
import { toast } from "sonner";
import { LOGIN_ROUTE } from '@/utils/constants'; 
import { useNavigate } from "react-router-dom";

export const useLogin = async (values: any) => {
    const navigate = useNavigate();
    try {
      console.log(values);
      const response = await apiClient.post(LOGIN_ROUTE, {
        email: values.email,
        password: values.password
      },
      { withCredentials: true }
    );
      console.log(response.data.data);

      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data));

      if(response.status === 200){
        toast.success('User logged in successfully');
        navigate('/');
      }
      // Add your login logic here
    } catch (error) {
        toast.error('Failed to login user');
      toast.error('Failed to login user');
      console.error(error);
    }
  }