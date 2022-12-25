import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <div>
      <nav className="navbar fixed top-0 left-0 right-0 z-10 bg-white py-5 px-3">
        {/* nav items */}
        <div className="mx-auto flex items-center justify-between sm:max-w-[540px] md:max-w-[540px] lg:max-w-[740px] xl:max-w-[1140px]">
          {/* logo */}
          <div className="flex cursor-pointer items-center ">
            <div>
              <svg
                height="67"
                viewBox="0 0 70 67"
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

            <span className="hidden cursor-pointer select-none pl-1 text-3xl font-bold text-primaryPurple lg:block xl:block xl:text-3xl">
              TaskSheet
            </span>
          </div>

          {/* buttons */}
          <div className="flex items-center gap-2 ">
            <Link to="/sign-in">
              <a className="rounded-lg border border-solid border-primaryPurple py-2 px-6 text-sm font-extrabold text-primaryPurple hover:border-primaryPurpleShade hover:bg-primaryPurpleTint hover:text-primaryPurpleShade">
                Sign In
              </a>
            </Link>

            <Link to="/sign-up">
              <a className="rounded-lg border border-solid border-primaryPurple bg-primaryPurple py-2 px-6 text-sm font-extrabold text-white hover:bg-primaryPurpleShade sm:rounded-lg">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNavigation;
