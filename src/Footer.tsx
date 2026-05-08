import logo from './assets/logo/logo.jpg';
import WhatsApp from './assets/icons/whatsapp.png';
import Telegram from './assets/icons/telegram.png';
import { MenuItems } from './MenuItems';

function Footer() {
  return (
    <div className='p-[50px] bg-white lg:flex-row lg:items-center lg:justify-center flex flex-col mt-[45px]'>
      <div className='lg:mr-[51px] flex items-center justify-center p-2 '>
        <img src={logo} alt='softerio-logo' />
      </div>
      <div className=' bg-white'>
        <ul className='lg:flex lg:flex-row flex flex-col items-center justify-center '>
          {MenuItems.map((item) => (
            <li
              className='transition-colors duration-200 hover p-4 hover:text-blue-600 active:text-blue-600'
              key={item.header}
            >
              <a className='text-inherit' href={item.link}>
                {item.header}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className=' flex flex-row items-center justify-center p-2'>
        <div className='flex flex-row items-center justify-center mr-2'>
          <a
            className='w-12 h-12 bg-blue-600 rounded flex items-center justify-center'
            href='#'
          >
            <img src={WhatsApp} alt='whatsapp' />
          </a>
          <a
            className='w-12 h-12 bg-blue-600 rounded flex items-center justify-center ml-2'
            href='#'
          >
            <img src={Telegram} alt='telegram' />
          </a>
        </div>
        <div className='flex flex-col '>
          <p className='text-blue-600 ml-2'>8 (499) 348-82-16</p>
          <p className='text-[#00000069] ml-2'>hello@softerio.ru</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
