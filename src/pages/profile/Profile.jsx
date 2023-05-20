import { getAuth } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const main_div = `
    bg-[#07B96F]
    w-full
    h-[100vh]
  `;

  const header = `
   text-white
   font-bold
   text-[1.6rem]
   text-center
  `;

  const user_profile = `
     h-[70vh]
     w-[50vw]
     bg-black
     mt-[3rem]
     translate-x-[50%]
     flex
     flex-col
     justify-between
     pb-[3rem]
   `;

  const auth = getAuth();
  const Navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        // Sign out successful
        Navigate('/UMatter')
      })
      .catch(error => {
        // Handle sign out error
        console.log(error);
      });
  };

  return (
    <div className={main_div}>
      <div className={header}>UMatter</div>
      <div className={user_profile}>
        <div className="data">
          <p className='text-white pt-4 text-center text-[1.2rem] tracking-[3px]'>Welcome to UMatter</p>
          <p className='text-center  mt-[3rem]'>
            <span className='text-white p-3  bg-[#01BF71] rounded-md '>
              {auth.currentUser.displayName}
            </span>
          </p>
        </div>
        <div className="btn">
          <button className='bg-white text-black px-[8rem] py-[1rem] shadow-md hover:shadow-[#01BF71] hover:text-[#01BF71] transition duration-150 ease-in-out' onClick={handleSignOut}>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

