import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className='bg-black p-[10px] text-center text-red-500 text-[20px] text-bold h-screen flex flex-col  items-center justify-center'>
      <p>Страницы не существует. Это демонстрационная версия</p>
      <Link
        to='/home'
        className='p-[5px] mt-[40px] bg-white text-black hover:text-white hover:bg-red-600 transition-colors duration-200 rounded'
      >
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFound;
