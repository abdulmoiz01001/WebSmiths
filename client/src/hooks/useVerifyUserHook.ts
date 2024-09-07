import { apiClient } from "@/lib/apiClient";
import { VERIFY_USER_ROUTE } from "@/utils/constants";
import { toast } from "sonner";

export const useVerfyUserHook = async (values: any , email : string) => {
    try {
      console.log(values);
      const response = await apiClient.post(VERIFY_USER_ROUTE, {
             otp : values.otp,
             email : email
            });
            console.log(response);
  
            if(response.status === 200){
                toast.success('User verified successfully');
                return true;
            }else{
                toast.error('Failed to verify user');
                return false;
            }
            
            return true;
            
          } catch (error) {
          console.error(error);
          return false;
        }
      }
  