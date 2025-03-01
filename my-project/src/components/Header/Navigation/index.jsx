import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanel from './CategoryPanel';
import { useState } from 'react';
import "../Navigation/style.css"

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className='py-2'>
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[20%]">
            <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}>
              <RiMenu2Fill className='text-[20px]' />Shop By Categories<FaAngleDown className='ml-auto font-bold' />
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className='flex items-center justify-between gap-3 nav'>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>Home</Button>
                </Link>
              </li>
              <li className='list-none relative'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>Fashion</Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className='list-none w-full relative'>
                      <Link to="/" className='w-full'>
                      <Button className="!text-[rgba(0,0,0,0.9)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Men</Button>
                      <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                          <li className='list-none w-full'>
                            <Link to="/" className='w-full'>
                            <Button className="!text-[rgba(0,0,0,0.9)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">T-shirt</Button></Link>
                          </li>
                          <li className='list-none w-full'>
                            <Link to="/" className='w-full'>
                            <Button className="!text-[rgba(0,0,0,0.9)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Trousers</Button></Link>
                          </li>
                          <li className='list-none w-full'>
                            <Link to="/" className='w-full'>
                            <Button className="!text-[rgba(0,0,0,0.9)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Hat</Button></Link>
                          </li>
                          <li className='list-none w-full'>
                            <Link to="/" className='w-full'>
                            <Button className="!text-[rgba(0,0,0,0.9)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Shoes</Button></Link>
                          </li>
                        </ul>
                      </div>
                      </Link>
                    </li>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className="!text-[rgba(0,0,0,0.9)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Women</Button></Link>
                    </li>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className="!text-[rgba(0,0,0,0.9)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Kids</Button></Link>
                    </li>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className="!text-[rgba(0,0,0,0.9)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Boys</Button></Link>
                    </li>
                    <li className='list-none w-full'>
                      <Link to="/" className='w-full'>
                      <Button className="!text-[rgba(0,0,0,0.9)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">Girls</Button></Link>
                    </li>
                  </ul>
                </div>

              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>Electronics</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>Bags</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>Groceries</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>Beauty</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>Wellness</Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[20%]">
            <p className='text-[14px] font-[500] flex items-center justify-end gap-3 mb-0 mt-0'>
              <IoRocketOutline className='text-[18px]' />Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />
    </>
  );
};

export default Navigation;