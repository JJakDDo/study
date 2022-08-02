import React from "react";
import Link from "next/link";

import Animation from "./Animation";

const Hero = () => {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          안녕하세요.
          <br className='hidden lg:inline-block' />
          강동욱입니다.
        </h1>
        <p className='mb-8 leading-relaxed'>
          그것을 밝은 인생의 곳으로 불어 풀밭에 그리하였는가? 피가 이 무엇을
          노래하며 인생의 운다. 가장 관현악이며, 이상의 피에 보이는 대고, 있는
          것이다. 가는 아름답고 군영과 곳으로 싹이 품에 생의 가지에 있다. 곳이
          따뜻한 가슴이 운다. 이것은 이 실현에 피가 위하여서, 위하여 것은 있다.
          용감하고 곳이 영락과 이상의 운다. 피에 아니더면, 가지에 얼마나 것은
          돋고, 보라. 군영과 위하여 할지니, 동산에는 사라지지 교향악이다. 끓는
          뭇 가는 위하여서. 노년에게서 오아이스도 같이 있음으로써 것이다.
        </p>
        <div className='flex justify-center'>
          <Link href='/projects'>
            <a className='btn-project'>프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Animation />
      </div>
    </>
  );
};

export default Hero;
