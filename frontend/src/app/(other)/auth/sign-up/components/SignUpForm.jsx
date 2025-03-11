import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuthContext } from '@/context/useAuthContext'
import * as yup from 'yup'
import { registerUser } from '../../services/auth-service' // ✅ Ensure correct import
import { useNavigate } from 'react-router-dom' // ✅ Import for redirection
import IconTextFormInput from '@/components/form/IconTextFormInput'
import { BsEnvelopeFill } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'

const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const navigate = useNavigate() // ✅ Initialize navigate function
  const { saveSession } = useAuthContext()

  // ✅ Validation Schema
  const signupSchema = yup.object({
    userName: yup.string().required('⚠️ Username is required'),
    email: yup.string().email('⚠️ Invalid email').required('⚠️ Email is required'),
    password: yup.string().min(6, '⚠️ Password must be at least 6 characters').required('⚠️ Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], '⚠️ Passwords do not match')
      .required('⚠️ Please confirm your password'),
  })

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  })

  const onSubmit = async (data) => {
    console.log('✔️ Submitting form data:', data)

    setErrorMessage('')
    setSuccessMessage('')

    const result = await registerUser({
      userName: data.userName,
      userEmail: data.email,
      password: data.password,
      role: 'user',
    })

    console.log('✅ API Response:', result)

    if (result.success) {
      setSuccessMessage('🎉 User registered successfully!')

      // ✅ Save authentication session
      saveSession({
        userName: result.user.userName,
        userEmail: result.user.userEmail,
        token: result.token, // Assuming API returns a token
      })

      // ✅ Redirect user to home page
      setTimeout(() => {
        navigate('/demos/default/home') // React navigation
        
      }, 2000)
    } else {
      setErrorMessage(result.message || 'Signup failed')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      {successMessage && <p className="text-success">{successMessage}</p>}

      <div className="mb-4">
        <IconTextFormInput control={control} placeholder="Username" label="Username *" name="userName" {...register('userName')} />
        {errors.userName && <p className="text-danger">{errors.userName.message}</p>}
      </div>

      <div className="mb-4">
        <IconTextFormInput control={control} icon={BsEnvelopeFill} placeholder="E-mail" label="Email address *" name="email" {...register('email')} />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <IconTextFormInput
          control={control}
          icon={FaLock}
          placeholder="*********"
          label="Password *"
          name="password"
          type="password"
          {...register('password')}
        />
        {errors.password && <p className="text-danger">{errors.password.message}</p>}
      </div>

      <div className="mb-4">
        <IconTextFormInput
          control={control}
          icon={FaLock}
          placeholder="*********"
          label="Confirm Password *"
          name="confirmPassword"
          type="password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
      </div>

      <div className="mb-4">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="checkbox-1" />
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
  )
}

export default SignUpForm
