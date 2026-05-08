import firstImg from './assets/stages_block/Stages_first.png';
import secondImg from './assets/stages_block/Stages_second.png';
import thirdImg from './assets/stages_block/Stages_third.png';
import fourthImg from './assets/stages_block/Stages_fourth.png';
import fifthImg from './assets/stages_block/Stages_fifth.png';
import sixthImg from './assets/stages_block/Stages_sixth.png';
import seventhImg from './assets/stages_block/Stages_seventh.png';
type stages = {
  id: number;
  img: object;
  h3: string;
  text: string;
};
const stagesList: stages[] = [
  {
    id: 1,
    img: firstImg,
    h3: 'Сбор требований',
    text: 'Детальное изучение требований, ресурсов и исходной информации по проекту и формирование технического задания на разработку ПО.',
  },
  {
    id: 2,
    img: secondImg,
    h3: 'UI/UX Дизайн',
    text: 'Разработка современного функционального и удобного дизайна с применением новейших инструментов.',
  },
  {
    id: 3,
    img: thirdImg,
    h3: 'Прототип (MVP)',
    text: 'В результате проектирования формируется прототип и отправляется для разработки продукта',
  },
  {
    id: 4,
    img: fourthImg,
    h3: 'Разработка',
    text: 'Процесс разработки системы интеллектуального учета, мобильного приложения или веб-сайта в режиме максимальной прозрачности.',
  },
  {
    id: 5,
    img: fifthImg,
    h3: 'Тестирование',
    text: 'В ходе тестовых запусков обеспечиваем полную отказоустойчивость продукта.',
  },
  {
    id: 6,
    img: sixthImg,
    h3: 'Развертывание',
    text: 'Запуск готового продукта в работу (ИСУ, сайта, приложения).',
  },
  {
    id: 7,
    img: seventhImg,
    h3: 'Поддержка и обслуживание',
    text: 'Обеспечиваем полную техническую поддержку и сопровождение по всем вопросам, возникающим после развертывания.',
  },
];

function DevStage() {
  return (
    <div className='menuBg rounded-[14px] mx-[5px] text-center mb-[33px]'>
      <h2 className='secHeader text-white'>Этапы разработки</h2>
      <div className='lg:grid lg:grid-cols-[25%_25%_25%_25%]'>
        {stagesList.map((el) => (
          <div className=' flex flex-col text-center text-white' key={el.id}>
            <img
              className='self-center mx-[25px] mb-[25px] '
              src={el.img}
              alt='-'
            />
            <h3 className='mb-[21px] px-[43px] mb-[17px] text-[20px] font-bold leading-[128%]'>
              {el.h3}
            </h3>
            <p className='mb-[36px] px-[25px]'>{el.text}</p>
          </div>
        ))}
        <button
          type='button'
          className='transition-colors duration-200 hover:bg-[#EB5757] bg-[#0C4AB3]        place-self-center items-center max-w-[320px] max-h-[129px]  text-white px-24 py-6.5 rounded-[14px] mb-[34px] mt-[20px]'
        >
          Оставить заявку
        </button>
      </div>
    </div>
  );
}

export default DevStage;
