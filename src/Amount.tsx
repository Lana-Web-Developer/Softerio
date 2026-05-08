import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import phoneIcon from './assets/amount_block/first_icon.png';
import phoneSIcon from './assets/amount_block/second_icon.png';
import phoneTIcon from './assets/amount_block/third_icon.png';
import flag from './assets/amount_block/flag_blue.png';
import flagS from './assets/amount_block/flag_dark.png';
import flagT from './assets/amount_block//flag_red.png';
import doneBlue from './assets/amount_block/ellipse_blue.png';
import doneDark from './assets/amount_block/ellipse_dark.png';
import doneRed from './assets/amount_block/ellipse_red.png';

type optionsArr = {
  text: string;
  isDone?: string;
};
type pockets = {
  id: number;
  h3: string;
  img: string;
  flag: string;
  options: optionsArr[];
  amount: string;
};
const pocketsList: pockets[] = [
  {
    id: 1,
    img: phoneIcon,
    h3: 'Типовой',
    flag: flag,
    options: [
      { text: 'Каталог товаров или услуг', isDone: doneBlue },
      { text: 'Сделать заказ', isDone: doneBlue },
      { text: 'Новости и акции', isDone: doneBlue },
      { text: 'Обратная связь', isDone: doneBlue },
      { text: 'Контакты', isDone: doneBlue },
    ],
    amount: '1 000 000 руб.',
  },
  {
    id: 2,
    img: phoneSIcon,
    h3: 'Бизнес',
    flag: flagS,
    options: [
      { text: 'Программа лояльности', isDone: doneDark },
      { text: 'Push уведомления', isDone: doneDark },
      { text: 'Серверная часть', isDone: doneDark },
      { text: 'Панель управления', isDone: doneDark },
      { text: 'Чаты', isDone: doneDark },
    ],
    amount: '2 000 000 руб.',
  },
  {
    id: 3,
    img: phoneTIcon,
    h3: 'Кастом',
    flag: flagT,
    options: [
      {
        text: 'Автоматизация бизнес-процессов',
        isDone: doneRed,
      },
      { text: 'Сложные интеграции', isDone: doneRed },
      { text: 'Маркетплейс', isDone: doneRed },
      { text: 'Корпоративные решения', isDone: doneRed },
      { text: 'Smart TV, Kit, VR \ AR', isDone: doneRed },
    ],

    amount: '3 000 000 руб.',
  },
];

const sliderSlides =
  pocketsList.length < 4 ? [...pocketsList, ...pocketsList] : pocketsList;
function Amount() {
  return (
    <div className='text-center mb-[20px]'>
      <h2 className='secHeader mb-[17px] px-[15px] '>
        Стоимость разработки мобильных приложений
      </h2>
      <p className='text-[#000000B0] mb-[33px] px-[15px]'>
        Мы собрали стандартные элементы приложений в пакеты, для примерного
        понимания стоимости разработки. Чтобы заказать мобильное приложение
        свяжитесь с нами, мы вас проконсультируем, проведем аудит ценовых
        предложений других студий. Ниже цены на типовые приложения.
      </p>
      <Swiper
        className='lg:max-w-[calc(400px*3+48px)] px-[15px] min-h-[479px] '
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        watchSlidesProgress
        loopAdditionalSlides={pocketsList.length}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {sliderSlides.map((el, idx) => (
          <SwiperSlide
            className=' flex items-center justify-center px-[15px]'
            key={`${el.id}-${idx}`}
          >
            <div className='bg-white w-full mt-[10px] max-w-[400px] min-h-[460px] flex flex-col items-center relative  rounded shadow-[0px_0px_10px_black]'>
              <img
                className='w-[21px] h-[38px] absolute top-0 right-[6%]'
                src={el.flag}
                alt='-'
              />
              <div className='flex flex-row items-center justify-center mt-[36px] mb-[17px] text-[20px] font-bold leading-[128%] mb-[31px]'>
                <img src={el.img} alt='-' />
                <h3 className='ml-[20px]'>{el.h3}</h3>
              </div>
              <div className='mb-[50px]'>
                {el.options.map((option) => (
                  <div
                    className='px-[5px] mx-auto grid w-[266px] grid-cols-[220px_40px] items-center gap-x-[5px] mb-[7px]'
                    key={`${el.id}-${option.text}`}
                  >
                    <span className='text-left text-[16px] leading-5 tracking-normal'>
                      {option.text}
                    </span>
                    <img
                      className='justify-self-end'
                      src={option.isDone}
                      alt='-'
                    />
                  </div>
                ))}
              </div>
              <span className='block mb-[13px]'>{el.amount}</span>
              <br />
              <button className='transition-colors duration-200 hover:text-white hover:bg-[#3980FF] text-[#3980FF] text-[17px] rounded-[10px] border border-[#3980FF] px-[43px] py-[24px] mb-[20px]'>
                Заказать приложение
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Amount;
