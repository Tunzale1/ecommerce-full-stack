import { Link } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";


const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {

  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) =>{
    if(submenuIndex===index){
      setSubmenuIndex(null);
    } else{
      setSubmenuIndex(index);
    }
  }

  const openInnerSubmenu = (index) =>{
    if(innerSubmenuIndex===index){
      setInnerSubmenuIndex(null);
    } else{
      setInnerSubmenuIndex(index);
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
        <h3 className='p-3 text-[18px] font-[500] flex items-center justify-between'> Shop By Categories {" "}<IoMdClose onClick={toggleDrawer(false)} className="cursor-pointer text-[20px]"/></h3>

        <div className='scroll'>
          <ul className='w-full'>
            <li className='list-none flex items-center relative flex-col'>
              <Link to="/" className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.9)]'>Fashion</Button></Link>

              {
                submenuIndex === 0 ? 
                <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>
                :
                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>

              }

              {
                      submenuIndex === 0 && (
                        <ul className='submenu w-full pl-3'>
                          <li className='list-none relative'>
                          <Link to="/" className='w-full'>
                          <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.9)]'>Apparel</Button></Link>

                          {
                            innerSubmenuIndex === 0 ?
                            <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/>
                            :
                            <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/>
                          }

                            {innerSubmenuIndex === 0 && (
                              <ul className='inner_submenu w-full pl-3'>
                              <li className='list-none relative mb-1'>
                                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Smart Tablet</Link>
                              </li>
                              <li className='list-none relative mb-1'>
                                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>T-shirt</Link>
                              </li>
                              <li className='list-none relative mb-1'>
                                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Leather Watch</Link>
                              </li>
                              <li className='list-none relative mb-1'>
                                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Rolling Diamond</Link>
                              </li>
                            </ul> 
                            )}

                            

                          </li>
                        </ul>
                      )
                    }

            </li>

            <li className='list-none flex items-center relative flex-col'>
              <Link to="/" className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.9)]'>Outwear</Button></Link>

              {
                submenuIndex === 1 ? 
                <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(1)}/>
                :
                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(1)}/>

              }

              {
                      submenuIndex === 1 && (
                        <ul className='submenu w-full pl-3'>
                          <li className='list-none relative'>
                          <Link to="/" className='w-full'>
                          <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.9)]'>Apparel</Button></Link>

                          {
                            innerSubmenuIndex === 1 ?
                            <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}/>
                            :
                            <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}/>
                          }

                            {innerSubmenuIndex === 1 && (
                              <ul className='inner_submenu w-full pl-3'>
                              <li className='list-none relative mb-1'>
                                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Smart Tablet</Link>
                              </li>
                              <li className='list-none relative mb-1'>
                                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>T-shirt</Link>
                              </li>
                              <li className='list-none relative mb-1'>
                                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Leather Watch</Link>
                              </li>
                              <li className='list-none relative mb-1'>
                                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Rolling Diamond</Link>
                              </li>
                            </ul> 
                            )}

                            

                          </li>
                        </ul>
                      )
                    }

            </li>

          </ul>
        </div>

    </Box>
  );

  return (
    <div>
      <Drawer open={isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;