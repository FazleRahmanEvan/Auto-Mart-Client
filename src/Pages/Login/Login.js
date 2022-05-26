
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useTooken';
import Loading from '../Shared/Loading';



const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
        ] = useSignInWithEmailAndPassword(auth);

        const [token]= useToken(user || gUser)
         
        let signInError;

        const navigate = useNavigate();
        const location = useLocation();
        let from = location.state?.from?.pathname || "/dashboard";

        useEffect(() =>{
            if (token) {
                navigate(from, { replace: true });
            }
        },[token,from, navigate])

      if(loading || gLoading){
          return <Loading></Loading>
      }

      if(error || gError){
          signInError= <p className='text-red-400'>{error?.message || gError?.message}</p>
      }


    const onSubmit = data => {
        // console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                    <h2 className=" text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required:{
                                        value: true.valueOf,
                                        message:'Email is Required'
                                    },
                                    pattern:{
                                        value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        meesage: 'Provide a Valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">
                               {errors.email.message} </span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">
                               {errors.email.message} </span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required:{
                                        value: true.valueOf,
                                        message:'Password is Required'
                                    },
                                    minLength:{
                                        value:6,
                                        meesage: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-400">
                               {errors.password.message} </span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400">
                               {errors.password.message} </span>}
                                
                            </label>
                        </div>

                          {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login"/>
                    </form>

                    <p><small>New to Auto Mart <Link className='text-primary' to= "/signup">Create New Account</Link></small></p>
                      

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
            </div>
          </div>
     </div>
       
       
    );
};

export default Login;