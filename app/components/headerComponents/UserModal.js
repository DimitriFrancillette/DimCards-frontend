import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '@/redux/reducers/user';
import { IoSettingsSharp } from 'react-icons/io5';

const UserModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  let user = useSelector((state) => state.user.value);

  const handleUserChanges = () => {
    console.log('USER MODAL', username, password);

    fetch('http://localhost:3000/users/update', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            console.error(`${errorData.message}: ${errorData.error}`);
            throw new Error(errorData.message || 'Network response was not ok');
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.user) {
          dispatch(
            login({
              token: data.user.token,
              username: data.user.username,
              email: data.user.email,
            })
          );
          setMessage(data.message);
          setUsername('');
          setPassword('');
          return;
        }
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  const handleDisconnect = () => {
    dispatch(logout());
  };

  //TODO
  const handleClose = () => {
    // console.log('JE FERME');
  };

  return (
    <div>
      <IoSettingsSharp
        className='size-10'
        onClick={() => document.getElementById('my_modal_2').showModal()}
      />
      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box bg-gradient-to-br from-accent from-5% to-primary'>
          <h3 className='font-bold text-4xl text-center mb-4'>User settings</h3>

          <label className='input input-bordered flex items-center gap-2 mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
            </svg>
            <input
              type='text'
              className='grow bg-transparent placeholder:text-neutral'
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
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
              className='grow bg-transparent placeholder:text-neutral'
              placeholder='XXXXXXXXXX'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <div>{message}</div>
          <div className='w-full flex justify-center mt-6'>
            <button
              className='btn btn-wide btn-outline border-4'
              onClick={() => handleUserChanges()}
            >
              Save changes
            </button>
          </div>
          <div className='w-full flex justify-center mt-6'>
            <button
              className='btn btn-wide btn-outline btn-info border-4'
              onClick={() => handleDisconnect()}
            >
              Disconnect
            </button>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default UserModal;
