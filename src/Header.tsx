import Menu from './Menu';
import { useState } from 'react';
import logo from './assets/logo/logo.jpg';
import WhatsApp from './assets/icons/whatsapp.png';
import Telegram from './assets/icons/telegram.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuToggle = () => setIsOpenMenu((v) => !v);
  const closeMenu = () => setIsOpenMenu(false);
  return (
    <header className='bg-white relative h-16 p-2'>
      <nav className='flex h-full flex-row items-center justify-around'>
        <div className='logo'>
          <img src={logo} alt='softerio-logo' />
        </div>
        <button
          className='lg:hidden menuBg relative inline-flex h-10 w-10 items-center justify-center rounded'
          onClick={menuToggle}
          aria-label='Открыть меню'
        >
          <span
            className="relative block h-0.5 w-4 rounded bg-white
              before:content-[''] before:absolute before:-top-1.5 before:left-0 before:h-0.5 before:w-4 before:rounded before:bg-white
              after:content-[''] after:absolute after:top-1.5 after:left-0 after:h-0.5 after:w-4 after:rounded after:bg-white"
          />
        </button>

        <div className='hidden lg:flex items-center gap-4'>
          <div className=' text-[16px] leading-[149%] tracking-[0] text-center align-middle"'>
            <Link
              to='/home'
              className=' transition-colors duration-200 hover:text-blue-600 active:text-blue-600 mr-[32px]'
            >
              Главная
            </Link>
            <Link
              to='/about'
              className='transition-colors duration-200 hover:text-blue-600 active:text-blue-600 mr-[32px]'
            >
              О нас
            </Link>
            <Link
              to='/'
              className='transition-colors duration-200 hover:text-blue-600 active:text-blue-600 mr-[32px]'
            >
              Наши услуги
            </Link>
            <Link
              to='/devstages'
              className=' transition-colors duration-200 hover:text-blue-600 active:text-blue-600 mr-[32px]'
            >
              Этапы работы
            </Link>
            <Link
              to='/amount'
              className='transition-colors duration-200 hover:text-blue-600 active:text-blue-600 mr-[32px]'
            >
              Стоимость
            </Link>
            <Link
              to='/'
              className='transition-colors duration-200 hover:text-blue-600 active:text-blue-600 mr-[32px]'
            >
              Статьи
            </Link>
            <Link
              to='/'
              className='transition-colors duration-200 hover:text-blue-600 active:text-blue-600 mr-[32px]'
            >
              Вакансии
            </Link>
          </div>
          <div className='  hidden lg:flex items-center gap-2'>
            <div className='lg:flex lg:flex-col  leading-[24px] flex flex-row items-center justify-center '>
              <p className='text-blue-600  ml-2'>8 (499) 348-82-16</p>
              <p className='text-blue-600  ml-2'>hello@softerio.ru</p>
            </div>
            <div className=' flex flex-row items-center justify-center'>
              <a
                className='w-12 h-12 bg-blue-600 rounded flex items-center justify-center'
                href=''
              >
                <img src={WhatsApp} alt='whatsapp' />
              </a>
              <a
                className='w-12 h-12 bg-blue-600 rounded flex items-center justify-center ml-2'
                href=''
              >
                <img src={Telegram} alt='telegram' />
              </a>
            </div>
          </div>
        </div>
        <Menu isOpen={isOpenMenu} onClose={closeMenu} />
      </nav>
    </header>
  );
}

export default Header;
