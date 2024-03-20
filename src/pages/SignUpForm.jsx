import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Select from "react-select";

const countryCodes = [
  { label: "+1 (USA)", value: "+1" },
  { label: "+44 (UK)", value: "+44" },
  { label: "+91 (IND)", value: "+91" },
];

export function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: null,
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setValidationErrors({ ...validationErrors, [field]: "" });
  };

  const validateForm = () => {
    const errors = {};
    const { firstName, lastName, phoneNumber, email, password, confirmPassword } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firstName.length < 3) errors.firstName = "First name must be at least 3 characters long.";
    if (lastName.length < 3) errors.lastName = "Last name must be at least 3 characters long.";
    if (phoneNumber.length !== 10) errors.phoneNumber = "Contact number must be 10 digits.";
    if (!emailRegex.test(email)) errors.email = "Email is not valid.";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match.";

    return errors;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      console.error("Form validation failed:", errors);
    } else {
      console.log("Form is valid, proceed with sign up");
      console.log("Form Data:", formData);
      alert("user succesfully Sign Up")
    }
  };

  return (
    <Card color="transparent" shadow={false} className="place-items-center mt-10">
      <Typography variant="h5" color="blue-gray" className="mt-1">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-md">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-3 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col gap-4">
        <div>
          {/* First Name */}
          <Input
            label="First name"
            size="sm"
            placeholder="First Name"
            className="text-sm  "
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
          {/* Error Message Placeholder for First Name */}
          {validationErrors.firstName && (
            <Typography color="red" variant="small">
              {validationErrors.firstName}
            </Typography>
          )}
        </div>
        <div>
          {/* Last Name */}
          <Input
            label="Last Name"
            size="sm"
            placeholder="Last Name"
            className="text-sm "
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
          {/* Error Message Placeholder for Last Name */}
          {validationErrors.lastName && (
            <Typography color="red" variant="small">
              {validationErrors.lastName}
            </Typography>
          )}
        </div>
        <div className="flex items-center gap-4">
          {/* Contact Number */}
          <Select
            options={countryCodes}
            value={formData.countryCode}
            onChange={(selectedOption) =>
              handleInputChange("countryCode", selectedOption)
            }
            className="w-32 text-sm"
          />
          <Input
            label="contact Number"
            type="tel"
            size="sm"
            placeholder="Mobile Number"
            className="text-sm "
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          />
        </div>
        <div>
          {/* Email */}
          <Input
            label="Email"
            size="sm"
            placeholder="name@mail.com"
            className="text-sm "
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {/* Error Message Placeholder for Email */}
          {validationErrors.email && (
            <Typography color="red" variant="small">
              {validationErrors.email}
            </Typography>
          )}
        </div>
        <div>
          {/* Password */}
          <Input
            label="Password"
            type="password"
            size="sm"
            placeholder="********"
            className="text-sm "
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
          {/* Error Message Placeholder for Password */}
          {validationErrors.password && (
            <Typography color="red" variant="small">
              {validationErrors.password}
            </Typography>
          )}
        </div>
        <div>
          {/* Confirm Password */}
          <Input
            label="Confirm Password"
            type="password"
            size="sm"
            placeholder="********"
            className="text-sm "
            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
          />
          {/* Error Message Placeholder for Confirm Password */}
          {validationErrors.confirmPassword && (
            <Typography color="red" variant="small">
              {validationErrors.confirmPassword}
            </Typography>
          )}
        </div>
        {/* Terms and Conditions */}
        <div className="flex items-center gap-2 mt-2">
          <Checkbox
            color="blueGray"
            id="agreeTerms"
            onChange={(e) => handleInputChange("agreedToTerms", e.target.checked)}
          />
          <label htmlFor="agreeTerms" className="text-md cursor-pointer">
            I agree to the terms and conditions
          </label>
        </div>
        {/* Sign Up Button */}
        <Button
          color="blueGray"
          variant="gradient"
          fullWidth
          className="mt-2 mb-1 text-sm py-2"
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <Typography color="gray" className="mt-3 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-indigo-600">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}

export default SignUpForm;
