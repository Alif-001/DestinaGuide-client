import React from 'react';
import useAuth from '../hooks/useAuth';

const useGoogleAuth = () => {

    const { googleSignIn } = useAuth(); // Assuming you have a custom hook for authentication


    const handleGoogleSignIn = async () => {


        try {
            const result = await googleSignIn();
            const user = result.user;
            console.log('User signed in:', user);
            // Handle successful sign-in (e.g., redirect, show success message)
        } catch (error) {
            console.error('Error signing in with Google:', error);
            // Handle sign-in error (e.g., show error message)
        }
    }
    return { handleGoogleSignIn };
};

export default useGoogleAuth;