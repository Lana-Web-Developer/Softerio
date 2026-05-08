import phone from './assets/opportunity_block/phone.png';
type features = {
  id: number;
  h3: string;
  p: string;
};

const featuresVars: features[] = [
  {
    id: 1,
    h3: 'Повысить лояльность',
    p: 'Мобильное приложение работает намного быстрее сайта и может выполнять многие функции даже без интернета. Также здесь не нужно каждый раз авторизовываться, чтобы оформить заказ или отследить его статус. Все это создает положительный пользовательский опыт.',
  },
  {
    id: 2,
    h3: 'Автоматизировать продажи',
    p: 'С приложением легче провести пользователя по каждому этапу воронки продаж. С помощью автоматизации внутри интерфейса можно показывать ценность продукта, рассказывать о новых функциях, делать допродажи и напоминать о себе с помощью пуш-уведомлений.',
  },
  {
    id: 3,
    h3: 'Сократить издержки',
    p: 'Мобильный сервис помогает сэкономить на рекламном бюджете и дополнительных сотрудниках. Например, многие маркетинговые акции можно проводить в самом приложении и адаптировать рекламу под целевых пользователей, а часть работы службы поддержки делегировать автоматическим чат-ботам.',
  },
  {
    id: 4,
    h3: 'Увеличить прибыль',
    p: 'Повышение уровня клиентского сервиса, экономия на закупке рекламы на других площадках и автоматизации процессов положительно скажется и на итоговой выручке. Вложения в разработку приложения быстро окупятся, если интерфейс хорошо справляется со своими задачами.',
  },
];

function Opportunity() {
  return (
    <div className='text-center px-[16px]'>
      <h2 className='secHeader'>
        Какие задачи поможет решить запуск мобильного приложения
      </h2>
      <div className='lg:grid lg:px-[222px] lg:mx-auto lg:grid-cols-[410px_auto_410px] lg:items-start'>
        {featuresVars.map((el, index) => {
          let position = '';
          if (index === 0) position = 'lg:col-start-1 lg:row-start-1';
          if (index === 1) position = 'lg:col-start-1 lg:row-start-2';
          if (index === 2) position = 'lg:col-start-3 lg:row-start-1';
          if (index === 3) position = 'lg:col-start-3 lg:row-start-2';
          return (
            <div
              key={el.id}
              className={` relative mb-[20px] mt-[15px] ${position}`}
            >
              <span
                className=' absolute -top-1 -left-1 
                   flex h-[29px] w-[29px] 
                   items-center justify-center 
                   rounded-full bg-[#0C4AB3] text-white 
                   text-[16px] font-semibold '
              >
                {el.id}
              </span>
              <h3 className='ml-[47px] text-[20px] text-start font-bold leading-[128%] mb-[11px]'>
                {el.h3}
              </h3>
              <p className='text-left text-[16px] leading-5 tracking-normal text-[15px]'>
                {el.p}
              </p>
            </div>
          );
        })}
        <img
          className='lg:justify-self-center lg:col-start-2 lg:row-span-2'
          src={phone}
          alt='-'
        />
      </div>
    </div>
  );
}

export default Opportunity;
