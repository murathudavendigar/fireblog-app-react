import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import defaultAvatar from "../assets/default_avatar.png";
import { logout } from "../auth/firebase";

const Navbar = () => {
  const { userContext } = useAuthContext();

  return (
    <>
      <div className="h-[75px]"></div>
      <nav className="w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-white shadow-lg navbar navbar-expand-lg fixed-top">
        <div className="container-fluid w-full flex items-center justify-between px-6">
          <Link
            className="text-2xl  pr-2 font-semibold flex items-center gap-3"
            to="/">
            Captain Price Blog
          </Link>

          <div className="flex items-center relative">
            {userContext && (
              <h5 className="mr-2 capitalize">{userContext?.displayName}</h5>
            )}

            <div className="dropdown relative">
              <span
                className="dropdown-toggle flex items-center hidden-arrow"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <img
                  src={userContext?.photoURL || defaultAvatar}
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt="user"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </span>
              {userContext ? (
                <ul
                  className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                  aria-labelledby="dropdownMenuButton2">
                  <li>
                    <Link
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/newblog">
                      New Blog
                    </Link>
                  </li>
                  <li>
                    <span
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      role="button"
                      onClick={() => logout()}>
                      Logout
                    </span>
                  </li>
                </ul>
              ) : (
                <ul
                  className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                  aria-labelledby="dropdownMenuButton2">
                  <li>
                    <Link
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/register">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
