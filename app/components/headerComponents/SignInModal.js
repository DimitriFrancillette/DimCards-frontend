import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/reducers/user';

const SignInModal = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    console.log('Email:', email, ' / password:', password);
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          return response.json().then((errorData) => {
            if (!errorData.error) {
              console.error(`${errorData.message}`);
            } else {
              console.error(`${errorData.message}: ${errorData.error}`);
            }
            throw new Error(errorData.message || 'Network response was not ok');
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.token) {
          dispatch(
            login({
              token: data.token,
              username: data.username,
              email: data.email,
            })
          );
          setEmail('');
          setPassword('');
          return;
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <div>
      <button
        className='btn bg-neutral hover:bg-secondary'
        onClick={() => document.getElementById('sign_in_modal').showModal()}
      >
        Sign In
      </button>
      <dialog id='sign_in_modal' className='modal'>
        <div className='modal-box bg-gradient-to-tl from-secondary from-55% to-success'>
          <form method='dialog'>
            <button
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              onClick={() => handleClose()}
            >
              ✕
            </button>
          </form>
          <div>
            <h3 className='font-bold text-4xl text-center mb-4'>Sign In</h3>
            <label className='input input-bordered flex items-center gap-2 mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70'
              >
                <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
              </svg>
              <input
                type='text'
                className='grow bg-transparent placeholder:text-neutral'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label className='input input-bordered flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70'
              >
                <path
                  fillRule='evenodd'
                  d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                  clipRule='evenodd'
                />
              </svg>
              <input
                type='password'
                className='grow bg-transparent'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
          </div>
          <p className='mt-2 flex justify-center text-red-600 font-bold'>
            {errorMessage}
          </p>
          <div className='w-full flex justify-center mt-6'>
            <button
              className='btn btn-wide btn-outline border-4'
              onClick={() => handleSignIn()}
            >
              Sign In
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SignInModal;
