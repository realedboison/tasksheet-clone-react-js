function MainNavigation() {
  return (
    <div>
      <nav className="navbar fixed top-0 left-0 right-0 z-10 bg-white py-5 px-4 md:px-8 lg:px-12 xl:px-10">
        {/* nav items */}
        <div className="mx-auto flex items-center justify-between lg:max-w-screen-lg xl:flex xl:max-w-screen-xl ">
          {/* logo */}
          <div className="flex cursor-pointer items-center ">
            <div>
              <svg
                height="67"
                viewBox="0 0 70 67"
                className="h-12 sm:h-8 md:h-11 xl:w-16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.5015 62.2669C39.5909 62.6548 38.6103 63.0074 37.5596 63.36L32.0258 65.1936C18.1214 69.7071 10.8014 65.9341 6.28331 51.9352L1.80027 38.0069C-2.68278 24.008 1.02974 16.603 14.9342 12.0895L20.3278 10.2912C19.6624 11.9837 19.102 13.9231 18.5767 16.1093L15.1443 30.884C11.2917 47.4922 16.9305 56.6603 33.4267 60.6096L39.3107 62.0201C39.696 62.1258 40.1163 62.1964 40.5015 62.2669Z"
                  fill="#5C68FF"
                />
                <path
                  d="M53.1802 2.49844L47.3312 1.12324C35.6333 -1.66244 28.6635 0.629573 24.5658 9.1629C23.515 11.3139 22.6745 13.9232 21.974 16.9205L18.5417 31.6951C15.1093 46.4345 19.6274 53.6984 34.2323 57.1893L40.1163 58.5998C42.1477 59.0935 44.039 59.4108 45.7902 59.5518C56.7176 60.6097 62.5315 55.4615 65.4735 42.732L68.9059 27.9926C72.3382 13.2533 67.8552 5.95409 53.1802 2.49844Z"
                  fill="#5C68FF"
                />
              </svg>
            </div>

            <span className="hidden cursor-pointer pl-1 text-2xl font-extrabold text-primaryPurple sm:block lg:text-4xl">
              TaskSheet
            </span>
          </div>

          {/* buttons */}
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5">
            <button className=" h-10 w-20 rounded-lg border-2 border-solid border-primaryPurple text-sm font-extrabold text-primaryPurple hover:border-primaryPurpleShade hover:bg-primaryPurpleTint hover:text-primaryPurpleShade sm:h-8 sm:rounded-lg md:h-9 lg:h-12 lg:w-28 xl:h-12 xl:w-28 xl:rounded-xl xl:text-xl">
              Log In
            </button>

            <button className=" h-10 w-20 rounded-lg bg-primaryPurple text-sm font-extrabold text-white hover:border-2 hover:border-primaryPurple hover:bg-primaryPurpleShade sm:h-8 sm:rounded-lg md:h-9 lg:h-12 lg:w-28 xl:h-12 xl:w-28 xl:rounded-xl xl:text-xl">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNavigation;
