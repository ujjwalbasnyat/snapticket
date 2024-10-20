
import myImage from '../../public/images/bg.jpg';
import {HomepageSearchBar} from './homepageSearchbar';
import { mainHeadline, subHeadline } from "./constant";

export const BackgroundImage = () => {
  return (
    <div className="relative w-full h-[300px] md:[400px] lg:h-[500px]  bg-cover bg-center" style={{ backgroundImage: `url(${myImage.src})` }}>
      <div className="absolute"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
      <div>
        <div className='flex flex-col items-center justify-center'>
		    <h1 className="text-lg font-bold text-primary ">{mainHeadline}</h1>
		    <p className='font-normal text-md'>{subHeadline}</p>
	    </div>
            <HomepageSearchBar/>
      </div>
      </div>
    </div>
  );
};