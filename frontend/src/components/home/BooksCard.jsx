import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {books.map((item) => (
        <div
          key={item._id}
          className='bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105'
        >
          <BookSingleCard book={item} />

          <div className='flex justify-between items-center mt-4'>
            <Link to={`/edit/${item._id}`}>
              <AiOutlineEdit className='text-purple-600 text-lg cursor-pointer hover:text-purple-800 transition duration-300' />
            </Link>
            <Link to={`/details/${item._id}`}>
              <BsInfoCircle className='text-blue-500 text-lg cursor-pointer hover:text-blue-700 transition duration-300' />
            </Link>
            <MdOutlineDelete className='text-red-600 text-lg cursor-pointer hover:text-red-800 transition duration-300' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
