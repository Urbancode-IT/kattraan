import IconTextFormInput from '@/components/form/IconTextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BsEnvelopeFill } from 'react-icons/bs';
import { FaLock, FaUser } from 'react-icons/fa';
import * as yup from 'yup';
import { registerService } from '@/services';
import axios from "axios"; // ✅ Add this line



const SignUpForm = () => {  
  const signUpFormSchema = yup.object({
    userName: yup.string().required('Please enter your Username'),
    userEmail: yup.string().email('Please enter a valid email').required('Please enter your Email'),
    password: yup.string().required('Please enter your Password'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your Password'),
  });

  const { control, handleSubmit, setError } = useForm({
    resolver: yupResolver(signUpFormSchema),
  });

  const onSubmit = async (formData) => {
    try {
      console.log("🔍 Sending request to:", "http://localhost:5000/auth/register");
  
      // ✅ Send only the required fields
      const requestData = {
        userName: formData.userName,
        userEmail: formData.userEmail,
        password: formData.password,
        role: "user", // Default role
      };
  
      console.log("🔍 Request Body:", requestData);
  
      const { data } = await axios.post("http://localhost:5000/auth/register", requestData);
      alert("User registered successfully!");
    } catch (error) {
      console.error("API Request Failed:", error);
      if (error.response) {
        console.error("Response Data:", error.response.data);
        console.error("Response Status:", error.response.status);
        console.error("Response Headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request Failed. No Response:", error.request);
      } else {
        console.error("Unexpected Error:", error.message);
      }
    }
  };
  
  
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <IconTextFormInput control={control} icon={FaUser} placeholder="Username" label="Username *" name="userName" />
      </div>
      <div className="mb-4">
        <IconTextFormInput control={control} icon={BsEnvelopeFill} placeholder="E-mail" label="Email address *" name="userEmail" />
      </div>
      <div className="mb-4">
        <IconTextFormInput control={control} icon={FaLock} placeholder="*********" label="Password *" name="password" />
      </div>
      <div className="mb-4">
        <IconTextFormInput control={control} icon={FaLock} placeholder="*********" label="Confirm Password *" name="confirmPassword" />
      </div>
      <div className="mb-4">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="checkbox-1" required />
          <label className="form-check-label" htmlFor="checkbox-1">
            By signing up, you agree to the <a href="#">terms of service</a>
          </label>
        </div>
      </div>
      <div className="align-items-center mt-0">
        <div className="d-grid">
          <button className="btn btn-primary mb-0" type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
