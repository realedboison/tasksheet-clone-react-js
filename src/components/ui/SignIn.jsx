import { Field, Form, Formik } from 'formik';

import Email from '../../resources/email.svg';
import { Link } from 'react-router-dom';
import LogIn from '../../resources/login.svg';
import Password from '../../resources/password.svg';
import { SubmitLoader } from '../../spinners/SubmitLoader';
import { signIn } from '../schemas/signIn';
import { useState } from 'react';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
  console.log(actions, values);
};

const initialValues = {
  email: '',
  password: '',
};

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-lightestGray">
      <div className="mx-auto mb-20">
        <header className="border-2 border-solid border-green-100">
          <div className="">
            <nav className="navbar py-5 px-4 md:px-8 lg:px-12 xl:px-10">
              <div className="mx-auto flex w-full flex-col items-center gap-10 sm:max-w-[540px] md:max-w-[540px] md:flex-col md:justify-between lg:max-w-[740px] lg:flex-row lg:justify-between xl:max-w-[1140px] xl:flex-row xl:justify-between">
                {/* logo -------------------------------------- */}
                <Link to="/">
                  <div className="flex cursor-pointer items-center">
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
                          fill="#707aff"
                        />
                        <path
                          d="M53.1802 2.49844L47.3312 1.12324C35.6333 -1.66244 28.6635 0.629573 24.5658 9.1629C23.515 11.3139 22.6745 13.9232 21.974 16.9205L18.5417 31.6951C15.1093 46.4345 19.6274 53.6984 34.2323 57.1893L40.1163 58.5998C42.1477 59.0935 44.039 59.4108 45.7902 59.5518C56.7176 60.6097 62.5315 55.4615 65.4735 42.732L68.9059 27.9926C72.3382 13.2533 67.8552 5.95409 53.1802 2.49844Z"
                          fill="#707aff"
                        />
                      </svg>
                    </div>

                    <span className="cursor-pointer pl-1 text-3xl font-extrabold text-primaryPurple">
                      TaskSheet
                    </span>
                  </div>
                </Link>

                {/* logo -------------------------------------------- */}
                <Link to="/sign-up">
                  <div className="flex items-center gap-2 text-lg font-bold">
                    <a href="#!">Create new account</a>
                    <a href="#!">
                      <img src={LogIn} alt="" />
                    </a>
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        </header>
      </div>
      <div className="pb-20">
        <div className="mx-auto rounded-2xl bg-white pt-10 pb-14 sm:w-[510px] md:w-[580px] lg:w-[580px] xl:w-[580px]">
          <div className="px-5 lg:px-10 xl:px-10">
            <div className="mb-10 text-center">
              <h1 className="text-[36px] font-bold">Log In</h1>
              <p className="mt-5 text-lg text-lighterGray">
                Get back to managing your projects.
              </p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={signIn}
              onSubmit={onSubmit}
              mountOnValidate
            >
              {({
                dirty,
                isValid,
                handleChange,
                isSubmitting,
                values,
                errors,
              }) => {
                return (
                  <Form>
                    <div className="input-wrap">
                      <div className="flex flex-col">
                        {/* Email */}
                        <div className="mx-auto mb-2 w-full lg:w-11/12 xl:w-11/12">
                          <div className="relative">
                            <label
                              htmlFor="email"
                              className="text-lg font-medium"
                            >
                              Email
                            </label>

                            <Field
                              type="text"
                              id="email"
                              name="email"
                              className="mt-1 mb-1.5 h-10 w-full rounded-xl border py-6 px-5 pl-12 text-lg text-lighterGray focus:outline-none"
                              placeholder="Enter your full name"
                              onChange={handleChange}
                              value={values.email}
                            />
                            <img
                              src={Email}
                              alt="email"
                              className="absolute bottom-[1.4rem] left-[0.9rem]"
                            />
                          </div>
                          {errors.email ? (
                            <div className="text-sm font-medium text-red-600">
                              {errors.email}
                            </div>
                          ) : null}
                        </div>

                        <div className="mx-auto mb-2 w-full lg:w-11/12 xl:w-11/12">
                          <div className="relative">
                            <label
                              htmlFor="email"
                              className="text-lg font-medium"
                            >
                              Password
                            </label>

                            <Field
                              type={showPassword ? 'text' : 'password'}
                              id="password"
                              name="password"
                              className="mt-1 mb-1.5 h-10 w-full rounded-xl border py-6 px-5 pl-12 pr-16 text-lg text-lighterGray focus:outline-none"
                              placeholder="Enter a strong password"
                              onChange={handleChange}
                              value={values.password}
                              error={errors.password}
                            />
                            <img
                              src={Password}
                              alt="email"
                              className="absolute bottom-[1.4rem] left-[0.9rem]"
                            />
                            <button
                              type="button"
                              className="visible absolute bottom-[1.3rem] right-[0.9rem] text-sm font-bold uppercase text-primaryPurple"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? 'Hide' : 'Show'}
                            </button>
                          </div>
                          {errors.password ? (
                            <div className="text-sm font-medium text-red-600">
                              {errors.password}
                            </div>
                          ) : null}
                        </div>

                        <div className="my-10 text-right text-lg font-medium text-primaryPurple lg:mr-3 xl:mr-3">
                          <Link to="/forgot-password">
                            <a href="#!">Forgot Password ?</a>
                          </Link>
                        </div>

                        <div className="flex justify-center">
                          <button
                            className={`${
                              !dirty || !isValid || isSubmitting
                                ? 'cursor-not-allowed bg-[#bec3ff]'
                                : 'cursor-pointer bg-primaryPurple'
                            } border-1 rounded-2xl border-solid bg-primaryPurple px-20 py-4 text-lg font-bold text-white`}
                            type="submit"
                          >
                            {isSubmitting ? <SubmitLoader /> : 'Log In'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
