import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import defaultAvatar from "../assets/default_avatar.png";
import { updateProfile } from "firebase/auth";
import { auth } from "../auth/firebase";

const Profile = () => {
  const { userContext } = useAuthContext();
  const [profilePic, setProfilePic] = useState("");
  const [fullName, setFullName] = useState("");

  const profileUpdater = async () => {
    await updateProfile(auth.currentUser, {
      photoURL: auth?.currentUser?.photoURL || profilePic,
      displayName: auth?.currentUser?.displayName || fullName,
    });
  };

  return (
    <>
      <div className="flex items-center mt-5 w-full justify-center ">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={userContext?.photoURL || defaultAvatar}
                alt="profile pic"
              />
              {auth?.currentUser?.photoURL ? (
                <></>
              ) : (
                <>
                  <div class="mb-3  mx-auto">
                    <input
                      type="text"
                      className="mx-auto 
          form-control
          block
          w-25
          px-2
          py-1
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                      id="exampleFormControlInput4"
                      placeholder=" Add Profile Picture URL"
                      onChange={(e) => setProfilePic(e.target.value)}
                    />
                    <button
                      type="button"
                      class="inline-block px-6 py-1 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mt-3"
                      onClick={profileUpdater}>
                      Add
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {userContext?.displayName || (
                  <>
                    <div class="mb-3  mx-auto">
                      <input
                        type="text"
                        className="mx-auto 
          form-control
          block
          w-25
          px-2
          py-1
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                        id="exampleFormControlInput4"
                        placeholder=" Add Your Name"
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      <button
                        type="button"
                        class="inline-block px-6 py-1 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mt-3"
                        onClick={profileUpdater}>
                        Add
                      </button>
                    </div>
                  </>
                )}
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <hr className="my-4" />
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Last Sign In Time
                    </td>
                    <td className="px-2 py-2">
                      {userContext?.lastSignInTime.slice(0, 17)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Sign Up Date
                    </td>
                    <td className="px-2 py-2">
                      {userContext?.creationTime.slice(0, 17)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2">{userContext?.email}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center my-3">
                <Link
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  to="/">
                  Go Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
