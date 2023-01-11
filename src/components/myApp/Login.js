import React from 'react'
import './test.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const diffToast =() => {
        toast.success("Login Successfull..", {
            position:"top-center"
        });
        toast.error("Login Successfull..", {
            position:"top-right"
        });
        toast.warn("Login Successfull..", {
            position:"top-left"
        });
        toast.dark("Login Successfull..", {
            position:"bottom-center"
        });
    }
  return (
    <>
        <div className='main-div'>
        <h2>Welcome to signin page</h2>
        <button type="button" class="btn btn-primary" 
        onClick={diffToast}
        >Login</button>
        </div>
        <ToastContainer />
    </>
  )
}

export default Login