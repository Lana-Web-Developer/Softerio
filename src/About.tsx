import { Link } from 'react-router-dom';
function About() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2>Пет-проект Softerio</h2>
      <p className='p-2 text-[18px]'>
        Разработан на основе макета из Figma, с использованием:
      </p>
      <p className='px-[20px] gap-[5px] self-start mb-[10px]'>
        - Mobile-first подход; <br />
        - Библиотека React-Router-Dom ;
        <br />
        - Библиотека React-Hook-Form + Zod;
        <br />
        - Tailwind CSS;
        <br />- Swiper;
      </p>
      <Link
        className='menuBg py-[10px] px-[20px] rounded text-white shadow-[0px_0px_10px_green] hover:shadow-[0px_0px_15px_orange] transition-shadow duration-200'
        to='/home'
      >
        К проекту
      </Link>
    </div>
  );
}

export default About;
