import { HomeIcon, Notification, Workspace } from '../icon';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import Dropdownlogout from '../../resources/dropdown-logout.svg';
import Dropdownuser from '../../resources/dropdown-user.svg';
import Menu from '../../resources/menu.svg';

// import Homeicon from '../../resources/home-icon-two.svg';

// CLICK OUTSIDE
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      console.log(event.target.id);
      // checks event target in the menu - then handler is passed
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });
  return domNode;
};

function HomeHeader() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // CLICK OUTSIDE
  let domNode = useClickOutside(() => {
    setOpenDropdown(false);
    setOpenMenu(false);
  });

  // MENU TOGGLER
  const toggleMenuOne = () => {
    if (openMenu) {
      setOpenMenu(!openMenu);
    }
    setOpenDropdown(!openDropdown);
  };

  const toggleMenuTwo = () => {
    if (openDropdown) {
      setOpenDropdown(!openDropdown);
    }
    setOpenMenu(!openMenu);
  };

  const clickedOne = openDropdown ? 'openedOne' : '';
  const clickedTwo = openMenu ? 'openedTwo' : '';

  if (openDropdown && clickedTwo === 'openMenu') {
    toggleMenuOne();
    toggleMenuTwo();
    {
    }
  }

  if (openMenu && clickedOne === 'openDropdown') {
    toggleMenuTwo();
    toggleMenuOne();
  }

  return (
    // NODE FOR OUTSIDE CLICKS
    <div ref={domNode}>
      <nav className="navbar fixed top-0 left-0 right-0 z-10 mx-auto bg-white px-3 py-3">
        {/* nav items */}
        <div className="mx-auto flex items-center justify-between sm:max-w-[540px] sm:px-2 md:max-w-[540px] md:px-2 lg:max-w-[740px] lg:px-2 xl:max-w-[1140px]">
          {/* humberger menu */}
          <div
            // id="humberger-menu"
            className="sm:block md:block lg:block xl:hidden"
          >
            <div className="relative">
              <div id="humbergerMenu" onClick={toggleMenuTwo}>
                <img src={Menu} alt="" />
              </div>
              <div
                className={`${clickedOne} absolute left-0 top-full mt-6 w-max min-w-[300px] overflow-hidden rounded-xl bg-white shadow-2xl`}
              >
                {/* dropdown */}
                {openMenu ? (
                  <div>
                    <ul>
                      <NavLink
                        to="/home"
                        className={({ isActive }) =>
                          [
                            `flex w-full py-2.5 px-5 text-darkerGray hover:bg-primaryPurpleTint`,
                            isActive
                              ? `bg-primaryPurpleTint text-primaryPurple`
                              : null,
                          ]

                            .filter(Boolean)
                            .join(' ')
                        }
                      >
                        {HomeIcon}
                        <p className="pl-3"> Home</p>
                      </NavLink>

                      <NavLink
                        to="/workspaces"
                        className={({ isActive }) =>
                          [
                            `flex w-full py-2.5 px-5 text-darkerGray hover:bg-primaryPurpleTint`,
                            isActive
                              ? `bg-primaryPurpleTint text-primaryPurple`
                              : null,
                          ]

                            .filter(Boolean)
                            .join(' ')
                        }
                      >
                        {Workspace}
                        <p className="pl-3">Workspaces</p>
                      </NavLink>

                      <NavLink
                        to="/notifications"
                        className={({ isActive }) =>
                          [
                            `flex w-full py-2.5 px-5 text-darkerGray hover:bg-primaryPurpleTint`,
                            isActive
                              ? `bg-primaryPurpleTint text-primaryPurple`
                              : null,
                          ]

                            .filter(Boolean)
                            .join(' ')
                        }
                      >
                        {Notification}
                        <p className="pl-3">Notifications</p>
                      </NavLink>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {/* logo */}
          <div className="flex cursor-pointer items-center">
            <div>
              <svg
                height="67"
                viewBox="0 0 80 67"
                className="h-10 sm:h-8 md:h-10 xl:w-14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.5015 62.2669C39.5909 62.6548 38.6103 63.0074 37.5596 63.36L32.0258 65.1936C18.1214 69.7071 10.8014 65.9341 6.28331 51.9352L1.80027 38.0069C-2.68278 24.008 1.02974 16.603 14.9342 12.0895L20.3278 10.2912C19.6624 11.9837 19.102 13.9231 18.5767 16.1093L15.1443 30.884C11.2917 47.4922 16.9305 56.6603 33.4267 60.6096L39.3107 62.0201C39.696 62.1258 40.1163 62.1964 40.5015 62.2669Z"
                  fill="#707aff"
                />
                <path
                  d="M53.1802 2.49844L47.3312 1.12324C35.6333 -1.66244 28.6635 0.629573 24.5658 9.1629C23.515 11.3139 22.6745 13.9232 21.974 16.9205L18.5417 31.6951C15.1093 46.4345 19.6274 53.6984 34.2323 57.1893L40.1163 58.5998C42.1477 59.0935 44.039 59.4108 45.7902 59.5518C56.7176 60.6097 62.5315 55.4615 65.4735 42.732L68.9059 27.9926C72.3382 13.2533 67.8552 5.95409 53.1802 2.49844Z"
                  fill="#707aff"
                />
              </svg>
            </div>

            <h3 className="hidden cursor-pointer select-none pl-1 text-3xl font-bold text-primaryPurple lg:block xl:block">
              TaskSheet
            </h3>
          </div>
          {/* nav links */}
          <div className="hidden xl:block">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                [
                  'border-primaryPurple px-8 py-8 pb-5 text-lg font-medium text-lighterGray hover:border-b-[4px] hover:border-solid hover:text-primaryPurple',
                  isActive
                    ? 'border-b-[4px] border-primaryPurple bg-primaryPurpleTint text-[rgb(92,104,255)]'
                    : null,
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/workspaces"
              className={({ isActive }) =>
                [
                  'border-primaryPurple px-8 py-8 pb-5 text-lg font-medium text-lighterGray hover:border-b-[4px] hover:border-solid hover:text-primaryPurple',
                  isActive
                    ? 'border-b-[4px] border-primaryPurple bg-primaryPurpleTint text-[rgb(92,104,255)]'
                    : null,
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              Workspaces
            </NavLink>

            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                [
                  'border-primaryPurple px-8 py-8 pb-5 text-lg font-medium text-lighterGray hover:border-b-[4px] hover:border-solid hover:text-primaryPurple',
                  isActive
                    ? 'border-b-[4px] border-primaryPurple bg-primaryPurpleTint text-[rgb(92,104,255)]'
                    : null,
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              Notifications
            </NavLink>
          </div>

          {/* drop down */}
          <div className="relative" id="dropDownMenu">
            <div className="flex items-center gap-2 ">
              {/* dropdown button */}
              <div
                className={`${clickedTwo} h-12 w-12 rounded-full bg-primaryPurple ring ring-primaryPurple focus:ring`}
                onClick={toggleMenuOne}
              ></div>
            </div>

            <div className="absolute right-0 top-full mt-1 w-max min-w-[300px] overflow-hidden rounded-xl bg-white shadow-2xl">
              {/* dropdown */}
              {openDropdown ? (
                <div className="text-left">
                  <div className="cursor-default px-5 py-3">
                    <p className="font-bold text-primaryPurple">Kweku Sam</p>
                    <p className="text-sm text-lighterGray">
                      kwekusam@gmail.com
                    </p>
                  </div>
                  <ul>
                    <Link to="/profile">
                      <li className="flex w-full py-2.5 px-5 hover:bg-primaryPurpleTint">
                        <a href="!#">
                          <img src={Dropdownuser} alt="" />
                        </a>
                        <p className="pl-2">Profile settings</p>
                      </li>
                    </Link>
                    <Link to="/sign-in">
                      <li className="flex w-full py-2.5 px-5 text-red-600 hover:bg-primaryPurpleTint">
                        <a href="!#">
                          <img src={Dropdownlogout} alt="" />
                        </a>
                        <p className="pl-2">Log out</p>
                      </li>
                    </Link>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeHeader;
