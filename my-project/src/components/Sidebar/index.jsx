import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useState } from 'react';
import { Button } from '@mui/material';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



import "./style.css"
const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true)
  const [isOpenAvailabilityFilter, setIsOpenAvailabilityFilter] = useState(true)
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true)

  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="w-full mb-3 text-[18px] font-600 flex items-center">Shop by Category
        <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#ff5252]"
        onClick={()=>setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
        {
          isOpenCategoryFilter===true ? <FaAngleUp /> : <FaAngleDown />
        }
        </Button>
        </h3>
       
        <Collapse isOpened={isOpenCategoryFilter}>
        <div className="scroll px-3 relative -left-[10px]">
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Fashion" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Electronics" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Bags" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Footwear" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Groceries" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Beauty" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Welness" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Jewellery" />
        </div>
        </Collapse>
        

      </div>

      <div className="box mt-5 pt-3 border-t border-[#ff5252]">
        <h3 className="w-full mb-3 text-[18px] font-600 flex items-center">Availability
        <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#ff5252]"
        onClick={()=>setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter)}>
        {
          isOpenAvailabilityFilter===true ? <FaAngleUp /> : <FaAngleDown />
        }
        </Button>
        </h3>
       
        <Collapse isOpened={isOpenAvailabilityFilter}>
        <div className="scroll px-3 relative -left-[10px]">
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Available" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="In Stock" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Not Available" />
        
        </div>
        </Collapse>
        

      </div>

      <div className="box mt-5 pt-3 border-t border-[#ff5252]">
        <h3 className="w-full mb-3 text-[18px] font-600 flex items-center">Size
        <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#ff5252]"
        onClick={()=>setIsOpenSizeFilter(!isOpenSizeFilter)}>
        {
          isOpenSizeFilter===true ? <FaAngleUp /> : <FaAngleDown />
        }
        </Button>
        </h3>
       
        <Collapse isOpened={isOpenSizeFilter}>
        <div className="scroll px-3 relative -left-[10px]">
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Small" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Medium" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="Large" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="XL" />
        <FormControlLabel control={<Checkbox />} className="w-full" size="small" label="XXl" />
        </div>
        </Collapse>
        

      </div>

      <div className="box mt-5 pt-3 border-t border-[#ff5252]">
        <h3 className="w-full mb-3 text-[18px] font-600 flex items-center">Filter By Price</h3>
        <RangeSlider />
        <div className='flex pt-4 pb-2 priceRange'>
          <span className='text-[13px]'>
            From: <strong className='text-dark'> Rs: {100}</strong>
          </span>
          <span className='ml-auto'>
            From: <strong className='text-dark'> Rs: {200}</strong>
          </span>
        </div>
      </div>

      <div className="box mt-5 pt-3 border-t border-[#ff5252]">
        <h3 className="w-full mb-3 text-[18px] font-600 flex items-center">Filter By Rating</h3>
        <div className='w-full'><Rating name="size-small" defaultValue={5} size="small" readOnly /></div>
        <div className='w-full'><Rating name="size-small" defaultValue={4} size="small" readOnly /></div>
        <div className='w-full'><Rating name="size-small" defaultValue={3} size="small" readOnly /></div>
        <div className='w-full'><Rating name="size-small" defaultValue={2} size="small" readOnly /></div>
        <div className='w-full'><Rating name="size-small" defaultValue={1} size="small" readOnly /></div>

      </div>

    </aside>
  )
}

export default Sidebar;
