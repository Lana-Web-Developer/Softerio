import rocket from './assets/icons/Rocket.png';
import cup from './assets/icons/Cup.png';
function Home() {
  return (
    <div className='lg:h-screen mb-[80px] bg-blue-600 flex flex-col items-center justify-center p-[20px] rounded mx-[5px]'>
      <h1 className='text-white text-[39px] text-center p-[20px] mb-[40px]'>
        Разработка мобильных приложений и сервисов
      </h1>
      <div className='mb-[27px]'>
        <div className='flex flex-row justify-center mb-[22px]'>
          <img className='w-[36px] h-[36px]' src={rocket} alt='rocket' />
          <p className='ml-[17px] text-white'>
            Знаем, как решить вашу задачу оптимальным способом
          </p>
        </div>
        <div className='flex flex-row justify-center'>
          <img className='w-[32px] h-[37px]' src={cup} alt='cup' />
          <p className='ml-[17px] text-white'>
            Подберем подходящее решение с учетом целей и возможностей
          </p>
        </div>
      </div>
      <div className='mt-[30px] flex flex-col justify-center items-center lg:flex lg:flex-row '>
        <button className='transition-colors duration-200 hover:bg-[#EB5757]  lg:mr-[26px] bg-[#0C4AB3] py-[24px] px-[74px] rounded mb-[10px] lg:mb-[0px] text-white text-[17px]'>
          Заказать приложение
        </button>
        <button className='transition-colors duration-200 lg:max-h-[73px] hover:bg-[#EB5757] bg-[#0C4AB3] py-[24px] px-[74px] rounded text-white text-[17px]'>
          Онлайн-консультация
        </button>
      </div>
    </div>
  );
}

export default Home;
