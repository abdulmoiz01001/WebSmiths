import { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/hooks/useLoginUserHook'; // Adjusted import based on your hook
import { apiClient } from '@/lib/apiClient';
import { LOGIN_ROUTE } from '@/utils/constants';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

// Define types for form values and errors
interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

// Validation function
const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
};

const LoginComp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
 
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form values
    const values: FormValues = { email, password };
    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
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
      }// Perform login action
      setLoading(false);
      // Handle successful login (e.g., redirect or show a success message)
      console.log('Login successful');
    } catch (error) {
      setLoading(false);
      console.error(error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="max-w-[100vw] h-[100vh] overflow-hidden py-8 flex justify-center items-center">
      <div className="w-[50%] flex justify-center items-center">
        <img src="login.png" alt="img" className="w-full h-full" />
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[50%] flex flex-col gap-6">
          <h1 className="text-4xl font-bold">Log in to Exclusive</h1>
          <p className="text-lg">Welcome back! Please login to your account</p>

          <Input
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className={`outline-none border-none ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}

          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className={`outline-none border-none ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
          {errors.password && (
            <div className="text-red-500 text-sm">{errors.password}</div>
          )}

          <div className="w-full flex justify-between items-center">
            <Button type="submit" className="w-[48%] active:scale-95 cursor-pointer" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          <Link to="/signup" >
            <Label className="text-sm cursor-pointer">Sign Up</Label>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;
