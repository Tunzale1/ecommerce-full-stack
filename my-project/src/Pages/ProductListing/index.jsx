import Sidebar from "../../components/Sidebar";
import React, { useState } from "react";
import ProductItem from '../../components/ProductItem';
import ProductItemListView from "../../components/ProductItemListView";
import { Button } from "@mui/material";
import { CiGrid41 } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Pagination from '@mui/material/Pagination';

const ProductListing = () => {
  const [itemView, setItemView] = useState('grid');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section>
      <div className="bg-white">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white p-3">
            <Sidebar/>
          </div>



          <div className="rightContent w-[80%] py-3">

            <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-1 itemViewActions">
              <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${itemView==='list' && 'active'}`}
                  onClick={()=>setItemView('list')}>
                  <CiMenuKebab className="!w-[25px] !h-[25px] !min-w-[25px]"/>
                </Button>

                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${itemView==='grid' && 'active'}`}
                  onClick={()=>setItemView('grid')}>
                  <CiGrid41 className="!w-[25px] !h-[25px] !min-w-[25px]"/>
                </Button>

                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.8]"> There are 12 products.</span>
              </div>

              <div className="col2 ml-auto flex items-center justify-end gap-3">
                  <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.8]">Sort By</span>
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      className="!bg-white !text-[12px] !text-[#000] !capitalize !border !border-[#fff]"
                    >
                      Relevance
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose} className="!text-[12px] !text-[#000] !capitalize">Sales, highest to lowest</MenuItem>
                      <MenuItem onClick={handleClose} className="!text-[12px] !text-[#000] !capitalize">Relevance</MenuItem>
                      <MenuItem onClick={handleClose} className="!text-[12px] !text-[#000] !capitalize">Name, A to Z</MenuItem>
                      <MenuItem onClick={handleClose} className="!text-[12px] !text-[#000] !capitalize">Name, Z to A</MenuItem>

                    </Menu>
              </div>

            </div>

      
            <div className={`grid ${itemView==='grid' ? 'grid-cols-4 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1' } gap-4`}>
            {
              itemView === 'grid' ? (
              <>
              <ProductItem/>
              <ProductItem/>
              <ProductItem/>
              <ProductItem/>
              <ProductItem/>
              <ProductItem/>
              </>

               ) : (
                <>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                </>
              )

            }
            
            </div>

            <div className="flex items-center justify-center mt-15">
              <Pagination count={10} showFirstButton showLastButton />
            </div>

          </div>

        </div>
         
      </div>
    </section>
  )
}

export default ProductListing;
