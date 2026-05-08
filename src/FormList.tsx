import { useState, useRef, useEffect } from 'react';
import {
  type UseFormRegister,
  type UseFormSetValue,
  type FieldValues,
} from 'react-hook-form';

type listProps = {
  register: UseFormRegister<FieldValues>;
  name: string;
  setValue: UseFormSetValue<FieldValues>;
};

type sum = {
  id: number;
  val: string;
};
const sumVal: sum[] = [
  { id: 1, val: '20 000 - 50 000 руб.' },
  { id: 2, val: '50 000 - 70 000 руб.' },
  { id: 3, val: '70 000 - 90 000 руб.' },
];

function FormList({ register, name, setValue }: listProps) {
  const [selected, setSelected] = useState<sum | null>(sumVal[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropRef = useRef(null);
  const toggleDrop = () => setIsOpen((prev) => !prev);
  const handleSelect = (item: sum) => {
    setSelected(item);
    setValue(name, item.val);
    setIsOpen(false);
  };
  useEffect(() => {
    setValue(name, sumVal[0].val);
  }, [name, setValue]);
  return (
    <div>
      <input type='hidden' {...register(name)} />
      <div ref={dropRef} className='m-auto relative max-w-[500px] w-full'>
        <button
          className=' bg-white relative max-w-[500px] w-full border rounded border-[#3980FF] text-bold py-[22px] mb-[10px] pl-[34px]'
          type='button'
          onClick={toggleDrop}
        >
          {selected ? (
            <div>
              <p>{selected.val}</p>
            </div>
          ) : (
            <div>
              <p>Выберите значение</p>
            </div>
          )}
        </button>
        {isOpen && (
          <ul className='w-full mb-[17px]'>
            {sumVal.map((el) => (
              <li
                className='transform-colors duration-200 hover:bg-[#3980FF] hover:text-white bg-white z-10  max-w-[500px] border rounded border-[1px_solid_#3980FF] mb-[10px] py-[5px]'
                onClick={() => handleSelect(el)}
                key={el.id}
              >
                {el.val}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FormList;
