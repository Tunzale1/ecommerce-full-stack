import '../ProductItem/style.css';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";



const ProductItemListView = () => {
  return (
    <>
    
    <div className='productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.2)] flex items-center'>
        <div className='group imgWrapper w-[20%] overflow-hidden rounded-md relative'>
            <Link to='/'>
                <div className='img h-[220px] overflow-hidden'>
                    <img src="https://m.media-amazon.com/images/I/61glUTGQnUL._AC_SY200_.jpg" className='w-full h-full object-cover' alt="product"/>
                    <img src="https://m.media-amazon.com/images/I/71MGLr6Xi-L._AC_SY200_.jpg" className='w-full h-full object-cover transition-all duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100' alt="product"/>
                </div>
            </Link>
            <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-lg p-1 text-[12px] font-[500]'>10%</span>
            <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-4 flex-col w-[50px] transition-all duration-700 group-hover:top-[15px] opacity-0 group-hover:opacity-100 group-hover:scale-105'>
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] group'>
                <FaRegHeart className='text-[20px] !text-black'/>
            </Button>
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] group'>
                <IoGitCompareOutline className='text-[20px] !text-black '/>
            </Button>
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] group'>
                <MdZoomOutMap className='text-[20px] !text-black'/>
            </Button>
            </div>
            
        </div>
        <div className='info p-3 py-5 px-8 w-[80%] h-[full] flex items-start flex-col'>
            <Link to='/'>
                <h6 className='text-[15px] link transition-all'>Soylent Green</h6>
            </Link>
            <h3 className='text-[18px] title mt-3 mb-3 font-[500] mb-1 text-[rgba(0,0,0,0.9)]'>Siril Georgette Pink Color Saree with Blouse piece</h3>
            <Rating name="read-only" value={4} readOnly />
            <div className='flex items-center gap-4'>
                <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>$58</span>
                <span className='price text-[#ff5252] font-[600]'>$48</span>
            </div>

            <div className='mt-3'>
                <Button className='btn-org flex items-center justify-center gap-4'><BsCartPlus className='text-[24px]'/>
                Add to Cart</Button>
            </div>

        </div>
    </div>
    
     </>

  )
}

export default ProductItemListView;