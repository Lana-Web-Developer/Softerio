import phone from './assets/icons/phone.png';
import clip from './assets/icons/clip.png';
import model from './assets/icons/model.png';

type slideContent = {
  id: number;
  img: string;
  h3: string;
  hiddenBlock?: string;
  btnFirst: string;
  btnSecond: string;
};

const serviceSliderContent: slideContent[] = [
  {
    id: 1,
    img: phone,
    h3: 'Разработка мобильных приложений',
    btnFirst: 'iOS',
    btnSecond: 'Android',
  },
  {
    id: 2,
    img: clip,
    h3: 'Web разработка',
    hiddenBlock:
      'Разрабатываем сайты персонально под ваш бизнес. Анализируем рынок и целевую аудиторию в соответствии с задачами, которые вы хотите решить с помощью веб-сайта. Создаём web-сервисы для любого направления бизнеса: продажи, коммуникации, управление, серверную часть и API, гибкие административные инструменты для управления приложениями и сбора статистики. Вы получаете продукт, привлекательный для пользователей и функциональный для вас.',
    btnFirst: 'Frontend',
    btnSecond: 'Backend',
  },
  {
    id: 3,
    img: model,
    h3: 'Проектирование мобильного приложения',
    btnFirst: 'Дизайн',
    btnSecond: 'ТЗ',
  },
];

function Service() {
  return (
    <div className='lg:grid lg:grid-cols-[450px_450px] lg:justify-center  text-center px-[15px]  bg-pink-100 pb-[30px]'>
      <h2 className='text-[32px] leading-[103%] font-bold mb-[17px] lg:mr-[60px]'>
        Наши услуги
      </h2>
      <p className='lg:place-self-center text-[#000000B0] leading-[128%] mb-[23px]'>
        Разработка мобильных приложений и веб-проектов для бизнеса и стартапов
      </p>
      <div className='flex lg:items-start lg:flex-row lg:col-span-2 lg:gap-[30px] flex-col items-center justify-center w-full'>
        {serviceSliderContent.map((slide) => (
          <div key={slide.id}>
            <div className=' w-[350px] sm:w-[410px] mb-[10px] bg-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] rounded-[10px] flex flex-col items-center justify-center py-[27px]'>
              <img className='mb-[27px]' src={slide.img} alt='image' />
              <h3 className='px-[43px] mb-[17px] text-[20px] font-bold leading-[128%]'>
                {slide.h3}
              </h3>
              <p className='hidden px-[33px] mb-[32px] md:block'>
                {slide.hiddenBlock}
              </p>
              <div className='flex flex-row mb-[11px] '>
                <button className='mr-[15px] text-[20px] rounded-[54px] border border-[#00000040] px-[25px] py-[10px]'>
                  {slide.btnFirst}
                </button>
                <button className='rounded-[54px] text-[20px]  border border-[#00000040] px-[25px] py-[10px]'>
                  {slide.btnSecond}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
