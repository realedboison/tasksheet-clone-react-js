import Add from '../resources/plus.svg';
import HomeHeader from '../components/layouts/HomeHeader';
import { Link } from 'react-router-dom';
import Sheets from '../resources/sheets.svg';

function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="mt-[70px] bg-primaryPurpleTint">
        <div className="mx-auto py-12 px-3 sm:max-w-[540px] md:max-w-[540px] lg:max-w-[740px] xl:max-w-[1140px]">
          <div>
            <h1 className="text-2xl font-bold md:text-4xl">
              Howdy,
              <span className="ml-1 text-2xl font-bold text-primaryPurple md:text-4xl">
                Kweku Sam
              </span>
              <span className="text-2xl font-bold md:text-4xl">!</span>
            </h1>
            <p className="mt-5 text-2xl text-lighterGray md:text-2xl">
              Let's get some work done.
            </p>
          </div>

          <div>
            <nav className="mt-12 flex flex-col justify-between lg:flex-row xl:flex-row">
              <div className="flex w-full items-center gap-2 rounded-[16px] bg-primaryPurpleTint_two px-1.5 py-1.5 text-sm font-medium md:mb-5 md:text-base lg:w-[220px] xl:w-[220px]">
                <div className="w-full rounded-xl bg-white py-3 px-6 text-center text-primaryPurple lg:w-[100px]">
                  To do
                </div>
                <div className="w-full rounded-xl py-3 px-6 text-center lg:w-[100px]">
                  Done
                </div>
              </div>
              <div className="mt-3 justify-end md:mt-0 lg:mx-0 xl:mx-0">
                <div className="mx-auto md:w-[500px] lg:w-[350px] xl:w-[500px]">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="w-full rounded-xl px-5 py-4 pl-12 pr-16 text-lighterGray"
                      placeholder="Search your tasks"
                    />
                    <div className="absolute bottom-[1.1rem] left-[1.125rem]">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.66465 0.045166C3.89415 0.045166 0.045105 3.95109 0.045105 8.74669C0.045105 13.5423 3.89415 17.4482 8.66465 17.4482C13.4352 17.4482 17.2842 13.5423 17.2842 8.74669C17.2842 6.44234 16.3786 4.23023 14.7634 2.59758C13.1477 0.964561 10.9542 0.045166 8.66465 0.045166ZM2.0451 8.74669C2.0451 5.03543 5.01884 2.04517 8.66465 2.04517C10.4168 2.04517 12.0994 2.74859 13.3416 4.0042C14.5842 5.26018 15.2842 6.96591 15.2842 8.74669C15.2842 12.458 12.3105 15.4482 8.66465 15.4482C5.01884 15.4482 2.0451 12.458 2.0451 8.74669ZM17.0791 15.6767C16.6886 15.2862 16.0555 15.2862 15.6649 15.6767C15.2744 16.0672 15.2744 16.7004 15.6649 17.0909L18.2483 19.6743C18.6388 20.0648 19.272 20.0648 19.6625 19.6743C20.053 19.2838 20.053 18.6506 19.6625 18.2601L17.0791 15.6767Z"
                          fill="#B8B8B8"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="absolute bottom-[0.95rem] right-[1.125rem] inline-block text-sm font-bold uppercase text-primaryPurple"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                  <div class="visible">
                    <span class="inline-block min-h-[5px] text-sm font-medium text-red-600"></span>
                  </div>
                </div>
              </div>
            </nav>
            <div className="content">
              <div className="mt-24 flex flex-col items-center justify-center">
                <div className="relative h-[145] w-[150px]">
                  <span>
                    <img src={Sheets} alt="" />
                  </span>
                  <span></span>
                </div>
                <h3 class="mt-10 text-center text-[24px] font-bold">
                  There are no tasks in this category.
                </h3>
                <div className="mt-10">
                  <Link to="/new-task">
                    <button className="mb-[60px] flex items-center rounded-2xl border-2 border-primaryPurple bg-primaryPurple px-8 py-6 font-medium text-white hover:border-primaryPurpleShade hover:bg-primaryPurpleShade disabled:cursor-not-allowed disabled:opacity-50 lg:mb-[350px]">
                      Create New Task
                    </button>
                  </Link>
                  {/* to="/new-task" */}
                </div>
              </div>
            </div>
          </div>
          <Link to="/new-task">
            <div className="fixed bottom-4 right-0 flex w-full justify-end md:right-28 lg:bottom-4 xl:bottom-4 xl:right-5">
              {/*  */}
              <div className="mx-auto flex w-full justify-end px-3 sm:w-[540px] md:w-[740px] md:px-0 lg:w-[960px] xl:w-[1140px]">
                <button
                  type="button"
                  className="flex items-center rounded-full border-2 border-primaryPurple bg-primaryPurple py-4 px-4 font-medium text-white hover:border-primaryPurpleShade hover:bg-primaryPurpleShade disabled:cursor-not-allowed disabled:opacity-50 lg:px-10"
                >
                  <span className="flex items-center">
                    <span className="">
                      <img src={Add} alt="add" className="h-6 w-6" />
                    </span>
                    <span className="ml-5 hidden lg:inline">Create Task</span>
                  </span>
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
