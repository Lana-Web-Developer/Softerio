import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { z } from 'zod';
import FormList from './FormList';

const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  phone: z.string().min(10, 'Введите номер телефона'),
  service: z.string().min(1, 'Выберите'),
  comment: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setError, reset, setValue } =
    useForm<FormData>({
      resolver: zodResolver(formSchema),
      mode: 'onChange',
    });
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      console.log('Отправленные данные: ', data);
      alert(`Уважаемый ${data.name}, форма была успешно отправлена`);
      reset();
    } catch (err: any) {
      setError('root', {
        message: 'Не удалось отправить форму. Попробуйте позже',
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='text-center p-[15px]'>
      <h2 className='secHeader'>Заказать приложение</h2>
      <form
        className='lg:grid lg:grid-cols-[50%_50%]'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=''>
          <h3 className=' text-[20px] font-bold leading-[128%] mb-[17px]'>
            Бюджет проекта:
          </h3>
          <FormList setValue={setValue} register={register} name='service' />
        </div>
        <div className='lg:text-left'>
          <h3 className=' text-[20px] font-bold leading-[128%] mb-[20px]'>
            Контакты:
          </h3>
          <div>
            <input
              className=' bg-white max-w-[500px] w-full border rounded border-[#gray] py-[22px] pl-[34px] mb-[10px]'
              type='text'
              {...register('name')}
              placeholder='Имя'
            />
          </div>
          <div>
            <input
              className='bg-white max-w-[500px] w-full border rounded border-[#gray] py-[22px] mb-[10px] pl-[34px]'
              type='tel'
              {...register('phone')}
              placeholder='Телефон'
            />
          </div>
          <div>
            <textarea
              className='bg-white max-w-[500px] w-full border rounded border-[#gray] py-[22px] mb-[10px] resize-none pl-[34px]'
              rows={4}
              {...register('comment')}
              placeholder='Комментарий'
              id=''
            ></textarea>
          </div>
          <button
            className='transition-colors duration-200 hover:bg-[#ffffff] hover:text-black max-w-[310px] menuBg py-[24px] px-[53px] text-white text-semibold text-[17px] rounded w-full'
            type='submit'
          >
            {isLoading ? 'Отправляем...' : 'Отправить'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
