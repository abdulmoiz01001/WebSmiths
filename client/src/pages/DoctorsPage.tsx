import DoctorsComp from '@/components/DoctorsComp'
import { useEffect } from 'react';
import { useStore } from '../store/store';
import { useNavigate } from 'react-router-dom';

const DoctorsPage = () => {
    const router = useNavigate(); // Get the router object from the react-router-dom
    const { user } : any = useStore(); // Get the user object from the global store
    useEffect(() => {
        // If user is not logged in (i.e., user is null), redirect to the login page
        if (!user) {
          router('/login');
        }
      }, [user, router]); // Run the effect when user or router changes
    
      // If user exists, render the protected content
      if (!user) {
        return null; // You can return a loading spinner or null while redirecting
      }
  return (
   <>
   <DoctorsComp />
   </>
  )
}

export default DoctorsPage
