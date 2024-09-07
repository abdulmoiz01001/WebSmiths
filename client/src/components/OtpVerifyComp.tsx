import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useVerfyUserHook } from '@/hooks/useVerifyUserHook';
import useStore from '@/store/store';

// Define types for form values and errors
interface FormValues {
  otp: string;
  email: string;
}

interface FormErrors {
  otp?: string;
  email?: string;
}

// Validation function
const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};
  if (!values.otp) {
    errors.otp = 'OTP is required';
  } else if (values.otp.length < 6) {
    errors.otp = 'OTP must be at least 6 characters';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const OtpVerifyComp = () => {
  const { user }: any = useStore();
  const [otp, setOtp] = useState<string>('');
  const [email, setEmail] = useState<string>(user.email || '');
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values: FormValues = { otp, email };
    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await useVerfyUserHook(values);
      if (res) {
        toast.success('User verified successfully');
        navigate('/login');
      } else {
        toast.error('Failed to verify user');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to verify user');
    }
  };

  return (
    <div className="max-w-[100vw] h-[100vh] overflow-hidden py-8 flex justify-center items-center">
      <div className="w-[50%] flex justify-center items-center">
        <img src="login.png" alt="img" className="w-full h-full" />
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[50%] flex flex-col gap-6">
          <h1 className="text-4xl font-bold">Verify An Account</h1>
          <p className="text-lg">Enter your OTP below</p>

          {/* OTP */}
          <Input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full"
          />
          {errors.otp && <Label className="text-red-500">{errors.otp}</Label>}

          {/* Submit Button */}
          <div className="w-full flex justify-between items-center">
            <Button type="submit" className="w-full active:scale-95 cursor-pointer">
              Verify OTP
            </Button>
          </div>

          {/* Navigation Link */}
          <Label className="text-sm cursor-pointer">
            Already have an account? <Link to="/login" className="text-blue-500">Log in</Link>
          </Label>
        </form>
      </div>
    </div>
  );
};

export default OtpVerifyComp;
