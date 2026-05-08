import WhatsApp from './assets/icons/whatsapp.png';
import Telegram from './assets/icons/telegram.png';
import Call from './assets/icons/call.png';
import Email from './assets/icons/email.png';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

type MenuProps = { isOpen: boolean; onClose: () => void };

function Menu({ isOpen, onClose }: MenuProps) {
  if (!isOpen) return null;
  return (
    <div className='bg-white lg:hidden absolute top-16 left-0 bg-white z-50 left-0 right-0 w-full '>
      <ul onClick={onClose}>
        {MenuItems.map((item) => (
          <li
            className='border border-[#E0E0E0] p-4 hover:text-blue-600 active:text-blue-600 hover:bg-[#3980FF1F] w-full'
            key={item.header}
          >
            <Link to={item.link} className='text-inherit'>
              {item.header}
            </Link>
          </li>
        ))}
      </ul>
      <div className=''>
        <div className='pt-[25px] mb-[8px] leading-[24px] flex flex-row items-center justify-center '>
          <img className='w-[20px] h-[20px]' src={Call} alt='icon_call' />
          <p className='text-blue-600  ml-2'>8 (499) 348-82-16</p>
        </div>
        <div className='pb-[25px] flex flex-row leading-[24px] items-center justify-center'>
          <img className='w-[20px] h-[20px]' src={Email} alt='icon_msg' />
          <p className='text-blue-600  ml-2'>hello@softerio.ru</p>
        </div>
        <div className='flex flex-row items-center justify-center pb-[25px]'>
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
  );
}

export default Menu;
