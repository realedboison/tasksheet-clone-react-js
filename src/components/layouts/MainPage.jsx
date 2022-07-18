import Easy from '../../resources/easy.svg';
import Free from '../../resources/free.svg';
import Image from '../../resources/hero.png';
import Open from '../../resources/open.svg';
import Sitting from '../../resources/sitting.svg';
import Talking from '../../resources/talking.svg';
import Walking from '../../resources/walking.svg';

function MainPage() {
  return (
    <main className="min-h-screen">
      {/* main header */}
      <div className="mx-auto px-5 md:max-w-lg lg:max-w-xl xl:mt-16 xl:max-w-3xl ">
        <div className="mx-auto">
          <h1 className="pt-36 text-center text-3xl font-bold leading-tight md:pt-40 lg:pt-44 lg:text-[2.5rem] xl:pt-[180px] xl:text-6xl">
            An <span className="text-primaryPurple">open-source</span> project
            management tool built with
            <span className="text-primaryPurple"> software developers </span>
            in mind.
          </h1>
        </div>

        <div className="mx-auto mt-4 max-w-[380px] md:max-w-lg lg:mt-9 lg:mb-12 lg:max-w-xl xl:mb-14 xl:mt-8 xl:max-w-3xl">
          <p className="my-5 mb-12 text-center text-xl font-medium leading-7 text-lighterGray">
            Manage everything from personal projects to freelance projects with
            a simple, intuitive interface that gives you only the features
            needed to get the job done.
          </p>
        </div>

        {/* button */}
        <div className="mx-auto pt-5 text-center">
          <a
            href="#"
            className="rounded-xl bg-primaryPurple py-4 px-16 text-xl font-bold text-white hover:border-2 hover:border-none  hover:bg-primaryPurpleShade xl:text-xl"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* image */}
      <div className="mx-auto max-w-[450px] pt-20 pb-20 md:max-w-lg lg:max-w-xl xl:max-w-3xl">
        <img src={Image} alt="tasksheet" />
      </div>

      {/* icons */}
      <div className=" bg-lightestGray py-16  xl:py-20">
        <div className="mx-auto  ">
          <h2 className="mb-8 text-center text-base font-bold uppercase text-lighterGray xl:mb-10 xl:text-lg">
            Why Tasksheet ?
          </h2>

          <div className="">
            <div className="mx-auto flex flex-wrap items-start justify-evenly text-center sm:w-[540px] md:w-[740px] lg:w-[960px] xl:w-[1140px]">
              <div className="flex">
                <div className="mx-auto w-10/12 xl:w-[320px]">
                  <img
                    src={Easy}
                    alt="tasksheet"
                    className="mt-10 inline h-24 w-24 text-center"
                  />

                  <p className="py-5 text-2xl font-bold text-tonedBlack xl:text-2xl">
                    Easy to use
                  </p>
                  <span className="text-lg text-lighterGray  xl:text-lg">
                    TaskSheet offers only the features you need to collaborate
                    and execute tasks with the simplest of UIs in a project
                    management software.
                  </span>
                </div>
              </div>

              <div className="flex">
                <div className="mx-auto w-10/12 lg:w-8/12 xl:w-[320px]">
                  <img
                    src={Open}
                    alt="tasksheet"
                    className="mt-10 inline h-24 w-24"
                  />

                  <p className="py-5 text-2xl font-bold text-tonedBlack xl:text-2xl">
                    It's opened-sourced
                  </p>
                  <span className="text-lg text-lighterGray xl:text-lg ">
                    TaskSheet's source code is public. You're free to contribute
                    or use the code anyhow you deem fit.
                    <div></div>
                  </span>
                </div>
              </div>

              <div className="flex">
                <div className="mx-auto w-10/12 xl:w-[320px]">
                  <img
                    src={Free}
                    alt="tasksheet"
                    className="mt-10 inline h-24 w-24 text-center"
                  />

                  <p className="py-5 text-2xl font-bold text-tonedBlack xl:text-2xl">
                    It's free, forever
                  </p>
                  <span className="text-lg text-lighterGray xl:text-lg">
                    You can clone the code and host it yourself, but you don't
                    have to. With your support, TaskSheet can be hosted and be
                    completely free to use.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main section */}
      <div className="mx-auto xl:max-w-[1140px] ">
        <section className="my-20 mx-4">
          <div className="mx-auto flex flex-col-reverse items-center justify-between md:w-[625px] lg:my-16  lg:w-11/12 xl:h-[300px] xl:w-full xl:flex-row">
            <div className="details flex flex-col justify-center md:w-[550px] lg:w-7/12 xl:w-[690px]">
              <div>
                <h2 className="mb-5 text-center text-[28px] font-bold text-tonedBlack md:text-3xl xl:text-left xl:text-3xl">
                  Create and manage workspaces.
                </h2>
              </div>
              <div>
                <p className="text-center text-xl font-medium text-lighterGray md:text-xl xl:text-left xl:text-xl ">
                  Workspaces are the parent containers for related projects. You
                  can create a new workspace in 4 easy steps. The last one is
                  even optional
                </p>
              </div>
            </div>

            <div className="my-10 flex-row justify-center md:my-10 lg:ml-10">
              <img
                src={Sitting}
                alt="tasksheet"
                className="h-[300px] w-[300px] xl:h-[450px] xl:w-[350px]"
              />
            </div>
          </div>

          <div className="mx-auto my-40 flex flex-col-reverse items-center justify-between md:my-40 md:w-[625px] lg:w-11/12  xl:my-32 xl:h-[300px] xl:w-full xl:flex-row-reverse">
            <div className="details flex flex-col justify-center md:w-[550px] lg:w-7/12 xl:w-[690px]">
              <div>
                <h2 className="mb-5 text-center text-[28px] font-bold text-tonedBlack md:text-3xl xl:text-left xl:text-3xl">
                  Invite other people into your workspace.
                </h2>
              </div>
              <div>
                <p className=" text-center text-xl font-medium text-lighterGray md:text-xl xl:text-left xl:text-xl">
                  Need help with a task? The Invitation feature has got you!
                  Invite as many people as you want into your workspace so that
                  you can collaborate on tasks..
                </p>
              </div>
            </div>

            <div className="my-10 flex-row justify-center md:my-10 lg:mr-10">
              <img
                src={Talking}
                alt="tasksheet"
                className="h-[300px] w-[300px] xl:h-[450px] xl:w-[350px]"
              />
            </div>
          </div>

          <div className="mx-auto flex flex-col-reverse items-center justify-between md:w-[625px] lg:my-16 lg:w-11/12 xl:h-[300px]  xl:w-full xl:flex-row">
            <div className="details flex flex-col justify-center md:w-[550px] lg:w-7/12 xl:w-[690px]">
              <div>
                <h2 className="mb-5 text-center text-[28px] font-bold text-tonedBlack md:text-3xl xl:text-left xl:text-3xl">
                  Stay in the loop with notifications.
                </h2>
              </div>
              <div>
                <p className="text-center text-xl font-medium text-lighterGray md:text-xl xl:text-left xl:text-xl">
                  Creating folders in your workspaces, inviting people, creating
                  and assigning tasks — with time it gets hard to keep track of
                  everything. With realtime notifications you're made aware of
                  any changes that happen in your workspaces.
                </p>
              </div>
            </div>

            <div className=" my-10 flex-row justify-center md:my-10 lg:ml-10">
              <img
                src={Walking}
                alt="tasksheet"
                className="h-[300px] w-[300px] xl:h-[450px] xl:w-[350px]"
              />
            </div>
          </div>
        </section>
      </div>

      {/* button */}
      <div className="mx-auto rounded-sm bg-lightestGray py-16 text-3xl xl:max-w-full xl:py-20">
        <h3 className="text-center font-bold xl:text-3xl">
          You're still here? 😲
        </h3>
        <div className="mt-10 text-center">
          <a
            href=""
            className="rounded-xl bg-primaryPurple  py-4 px-8 text-xl font-bold text-white hover:border-2 hover:border-none hover:bg-primaryPurpleShade "
          >
            Get Started Already 🏃‍♂️💨
          </a>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
