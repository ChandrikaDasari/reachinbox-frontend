import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import googleIcon from '../../public/google-icon.svg';
import logo from '../../public/img-logo-12.svg';

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <Image src={logo} alt="Reachinbox Logo" width={50} height={50} />
      </div>
      <h1>Create a new account</h1>
      <button className="google-signup">
        <Image src={googleIcon} alt="Google Icon" width={20} height={20} />
        Sign Up with Google
      </button>
      <button className="create-account">
        Create an Account
      </button>
      <p>Already have an account? <Link href="/login">Sign In</Link></p>
    </div>
  );
};

export default Login;
