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
      <div className="mx-auto px-5 lg:max-w-screen-lg xl:mt-16">
        <div className="mx-auto max-w-[380px] md:max-w-lg lg:max-w-xl xl:max-w-3xl">
          <h1 className="pt-36 text-center text-[35px] font-bold leading-tight md:pt-40 md:text-[2.5rem] lg:pt-44 lg:text-5xl xl:pt-[180px] xl:text-[60px]">
            An <span className="text-primaryPurple">open-source</span> project
            management tool built with
            <span className="text-primaryPurple"> software developers </span>
            in mind.
          </h1>
        </div>

        <div className="mx-auto mb-10 mt-4 max-w-[380px] md:max-w-lg lg:mt-9 lg:mb-12 lg:max-w-xl xl:mb-14 xl:mt-8 xl:max-w-3xl">
          {/* xl:text-xl */}
          <p className="text-center text-[20px] font-bold text-lighterGray">
            Manage everything from personal projects to freelance projects with
            a simple, intuitive interface that gives you only the features
            needed to get the job done.
          </p>
        </div>

        {/* button */}
        <div className="mx-auto text-center lg:max-w-2xl xl:max-w-4xl ">
          <a
            href="#"
            className="rounded-lg bg-primaryPurple py-4 px-12 text-sm font-extrabold text-white hover:border-2 hover:border-none hover:bg-primaryPurpleShade xl:rounded-xl xl:text-xl"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* image */}
      <div className="mx-auto max-w-[450px] pt-16 pb-20 md:max-w-lg lg:max-w-xl xl:max-w-3xl">
        <img src={Image} alt="tasksheet" />
      </div>

      {/* icons */}
      <div className="mx-auto bg-lightestGray py-16 xl:max-w-full xl:py-20">
        <div className="mx-auto">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase text-lighterGray xl:mb-10 xl:text-2xl">
            Why Tasksheet ?
          </h2>

          <div className="flex flex-wrap items-start justify-evenly text-center">
            <div className="flex">
              <div className="mx-auto w-9/12 lg:w-[250px] xl:w-[320px]">
                <img
                  src={Easy}
                  alt="tasksheet"
                  className="mt-10 inline h-24 w-24 text-center md:h-24 md:w-24 lg:h-20 lg:w-20 xl:h-24 xl:w-24"
                />

                <p className="py-5 text-2xl font-bold text-tonedBlack xl:text-2xl">
                  Easy to use
                </p>
                <span className="text-base text-lighterGray xl:text-lg">
                  TaskSheet offers only the features you need to collaborate and
                  execute tasks with the simplest of UIs in a project management
                  software.
                </span>
              </div>
            </div>

            <div className="flex">
              <div className="mx-auto w-9/12 lg:w-[250px]  xl:w-[320px]">
                <img
                  src={Open}
                  alt="tasksheet"
                  className="mt-10 inline h-24 w-24 text-center md:h-24 md:w-24 lg:h-20 lg:w-20 xl:h-24 xl:w-24"
                />

                <p className="py-5 text-2xl font-bold text-tonedBlack xl:text-2xl">
                  It's opened-sourced
                </p>
                <span className="text-base text-lighterGray xl:text-lg ">
                  TaskSheet's source code is public. You're free to contribute
                  or use the code anyhow you deem fit.
                  <div></div>
                </span>
              </div>
            </div>

            <div className="flex">
              <div className="mx-auto w-9/12 lg:w-[250px]  xl:w-[320px]">
                <img
                  src={Free}
                  alt="tasksheet"
                  className="mt-10 inline h-24 w-24 text-center md:h-24 md:w-24 lg:h-20 lg:w-20 xl:h-24 xl:w-24"
                />

                <p className="py-5 text-2xl font-bold text-tonedBlack xl:text-2xl">
                  It's free, forever
                </p>
                <span className="text-base text-lighterGray xl:text-lg">
                  You can clone the code and host it yourself, but you don't
                  have to. With your support, TaskSheet can be hosted and be
                  completely free to use.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main section */}
      <section className="my-20 px-5 lg:px-10 xl:px-10">
        <div className="mx-auto flex flex-col-reverse items-center justify-between md:w-[625px] lg:my-16 lg:w-11/12 lg:flex-row lg:text-left xl:my-24 xl:max-w-screen-xl xl:flex-row xl:text-left">
          <div className="details flex flex-col justify-center xl:w-2/3">
            <div>
              <h2 className="mb-4 text-center text-[28px] font-bold text-tonedBlack md:text-3xl lg:text-left xl:text-left xl:text-[1.9rem]">
                Create and manage workspaces.
              </h2>
            </div>
            <div>
              <p className="text-center text-xl font-medium text-lighterGray md:text-xl lg:text-left xl:text-left xl:text-[1.3rem] ">
                Workspaces are the parent containers for related projects. You
                can create a new workspace in 4 easy steps. The last one is even
                optional
              </p>
            </div>
          </div>

          <div className=" my-10 flex-row justify-center md:my-10 lg:ml-10">
            <img
              src={Sitting}
              alt="tasksheet"
              className="h-[250px] w-[300px] md:h-[250px] md:w-[350px] lg:h-[250px] lg:w-[650px] xl:h-[20rem] xl:w-[25rem]"
            />
          </div>
        </div>

        <div className="mx-auto my-20 flex flex-col-reverse items-center justify-between md:my-40 md:w-[625px] lg:my-16 lg:w-11/12 lg:flex-row-reverse xl:my-20 xl:max-w-screen-xl xl:flex-row-reverse ">
          <div className="details flex flex-col justify-center  xl:w-2/3">
            <div>
              <h2 className="mb-4 text-center text-[28px] font-bold text-tonedBlack md:text-3xl  lg:text-left xl:text-left xl:text-[1.9rem]">
                Invite other people into your workspace.
              </h2>
            </div>
            <div>
              <p className=" text-center text-xl font-medium text-lighterGray md:text-xl lg:text-left xl:text-left xl:text-[1.3rem]">
                Need help with a task? The Invitation feature has got you!
                Invite as many people as you want into your workspace so that
                you can collaborate on tasks..
              </p>
            </div>
          </div>

          {/* features*/}
          <div className="my-10 flex-row justify-center md:my-10 lg:mr-10">
            <img
              src={Talking}
              alt="tasksheet"
              className="h-[250px] w-[300px] md:h-[250px] md:w-[350px] lg:h-[250px] lg:w-[750px] xl:h-[20rem] xl:w-[26rem]"
            />
          </div>
        </div>

        <div className="mx-auto flex flex-col-reverse items-center justify-between md:w-[625px] lg:my-16 lg:w-11/12 lg:flex-row lg:text-left xl:my-24 xl:max-w-screen-xl xl:flex-row xl:text-left">
          <div className="details flex flex-col justify-center xl:w-2/3">
            <div>
              <h2 className="mb-4 text-center text-[28px] font-bold text-tonedBlack md:text-3xl lg:text-left xl:text-left xl:text-[1.9rem]">
                Stay in the loop with notifications.
              </h2>
            </div>
            <div>
              <p className="text-center text-xl font-medium text-lighterGray md:text-xl lg:text-left xl:text-left xl:text-[1.3rem] ">
                Creating folders in your workspaces, inviting people, creating
                and assigning tasks — with time it gets hard to keep track of
                everything. With realtime notifications you're made aware of any
                changes that happen in your workspaces.
              </p>
            </div>
          </div>

          <div className=" my-10 flex-row justify-center md:my-10 lg:ml-10">
            <img
              src={Walking}
              alt="tasksheet"
              className="h-[250px] w-[300px] md:h-[250px] md:w-[350px] lg:h-[250px] lg:w-[650px] xl:h-[20rem] xl:w-[25rem]"
            />
          </div>
        </div>
      </section>

      {/* button */}
      <div className="mx-auto bg-lightestGray py-16 text-xl xl:max-w-full xl:py-20">
        <h3 className="text-center font-bold xl:text-3xl">
          You're still here? 😲
        </h3>
        <div className=" mt-10 text-center">
          <a
            href=""
            className="text-md  rounded-lg  bg-primaryPurple py-4 px-6 font-extrabold text-white hover:border-2 hover:border-none hover:bg-primaryPurpleShade sm:px-8 sm:text-xl md:px-8 lg:w-48 lg:px-8 lg:text-xl xl:h-16 xl:w-48 xl:rounded-xl xl:px-8 xl:text-xl"
          >
            Get Started Already 🏃‍♂️💨
          </a>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
