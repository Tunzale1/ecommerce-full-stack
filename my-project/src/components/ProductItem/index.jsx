import '../ProductItem/style.css';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';


const ProductItem = () => {
  return (
    <>
    <Link to='/'>
    <div className='productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.2)]'>
        <div className='imgWrapper w-[100%] h-[250px] overflow-hidden rounded-md relative'>
            <img src="https://m.media-amazon.com/images/I/61glUTGQnUL._AC_SY200_.jpg" className='w-full h-full object-cover' alt="product"/>
            <span className='discount flex items-center absolute top-[10px] left-[10px] z-'></span>
        </div>
        <div className='info p-3 py-5 bg-[#f1f1f1]'>
            <Link to='/'>
                <h6 className='text-[12px] link transition-all'>Soylent Green</h6>
            </Link>
            <h3 className='text-[14px] title mt-1 font-[500] mb-1 text-[rgba(0,0,0,0.9)]'>Siril Georgette Pink Color Saree with Blouse piece</h3>
            <Rating name="read-only" value={4} readOnly />
            <div className='flex items-center gap-4'>
                <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>$58</span>
                <span className='price text-[#ff5252] font-[600]'>$48</span>
            </div>
        </div>
    </div>
    </Link>
     </>

  )
}

export default ProductItem;