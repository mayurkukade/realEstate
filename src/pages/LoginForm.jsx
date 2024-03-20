import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (emailError) setEmailError('');
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
    } else if (passwordError) {
      setPasswordError('');
    }
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      setIsSubmitting(false);
      return;
    }

    console.log({ Email: email, Password: password });
    alert('Login successful!');
    setIsSubmitting(false);
    // Here, integrate with your authentication logic or API call
  };

  return (
    <Card color="transparent" shadow={false} className="place-items-center mt-28">
      <Typography variant="h4" color="blue-gray">
        Login To Your Account
      </Typography>
     
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
          />
          {emailError && (
            <Typography color="red" className="text-sm mt-1">
              {emailError}
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
            error={!!passwordError}
          />
          {passwordError && (
            <Typography color="red" className="text-sm mt-1">
              {passwordError}
            </Typography>
          )}
        </div>
        <div className="text-sm">
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </a>
        </div>
        <Button type="submit" className="mt-6" fullWidth disabled={isSubmitting}>
          Log In
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal ">
          Not have an account?{" "}
          <a href="#" className="font-medium text-indigo-600">
            Sign Up
          </a>
        </Typography>
      </form>
    </Card>
  );
}
