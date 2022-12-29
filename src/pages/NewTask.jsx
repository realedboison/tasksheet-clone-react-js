import ArrowLeft from '../resources/arrow-left.svg';
import HomeHeader from '../components/layouts/HomeHeader';
import { Link } from 'react-router-dom';

function NewTask() {
  return (
    <div>
      <HomeHeader />
      <div className="mt-[70px] bg-primaryPurpleTint">
        <div className="mx-auto px-3 py-12 sm:max-w-[540px] md:max-w-[540px] lg:max-w-[740px] xl:max-w-[1140px]">
          <div>
            <Link to="/home">
              <div className="mb-10 flex items-center gap-2 text-lg font-bold">
                <a href="#!">
                  <img src={ArrowLeft} alt="" />
                </a>
                <a href="#!">Back</a>
              </div>
            </Link>

            <form action="">
              <input type="text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTask;
