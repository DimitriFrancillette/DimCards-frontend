import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '@/redux/reducers/user';

const DeleteModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [message, setMessage] = useState('');

  let user = useSelector((state) => state.user.value);

  const handleUserDelete = () => {
    fetch('http://localhost:3000/users/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
      }),
    })
      .then((response) => {
        console.log('RESPONSE', response);
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
        setMessage(data.message);
        dispatch(logout());
        router.push('/');
        return;
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <div>
      <button
        className='btn glass btn-wide btn-outline bg-red-600 border-4'
        onClick={() => document.getElementById('delete_modal').showModal()}
      >
        Delete your account
      </button>
      <dialog id='delete_modal' className='modal'>
        <div className='modal-box bg-warning'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>
            Are your sure you want to delete your account ?
          </h3>
          <p className='py-4'>
            <button
              className='btn btn-wide btn-outline bg-red-600 border-4'
              onClick={() => handleUserDelete()}
            >
              Confirm
            </button>
            <div className='mt-2 flex justify-center text-success font-bold text-xl'>
              {message}
            </div>
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteModal;
