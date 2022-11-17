import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import defaultAvatar from "../assets/default_avatar.png";

const Profile = () => {
  const { userContext } = useAuthContext();

  return (
    <>
      <div className="flex items-center h-screen w-full justify-center ">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={userContext?.photoURL || defaultAvatar}
                alt="profile pic"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {userContext?.displayName}
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
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
                  View Profile
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
