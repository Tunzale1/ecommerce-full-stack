import AdsBannerSlider from '../../components/AdsBannerSlider';
import HomeCatSlider from '../../components/CatSlider';
import HomeSlider from '../../components/HomeSlider';

import Footer from '../../components/Footer';

import { LiaShippingFastSolid } from "react-icons/lia";
import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductsSlider';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

    <HomeSlider/>
    <HomeCatSlider/>

    <section className='bg-white py-5 '>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className='leftSec'>
            <h2 className='text-[22px] font-[600]'>Popular Products</h2>
            <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of March.</p>
          </div>

          <div className='rightSec'>
          <Box sx={{ maxWidth: { xs: 320, sm: 800 }, bgcolor: 'background.paper' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Fashion" />
              <Tab label="Electronics" />
              <Tab label="Bags" />
              <Tab label="Groceries" />
              <Tab label="Beauty" />
              <Tab label="Welness" />
              <Tab label="Footwear" />
              <Tab label="Jewellery" />
            </Tabs>
            </Box>
          </div>


        </div>

        <ProductsSlider items={6}/>


      </div>
    </section>


    <section className='py-4 bg-white'>
      <div className='container'>
        <div className='freeShipping w-[80%] m-auto p-4 py-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7'>
          <div className='col1 flex items-center gap-4'>
          <LiaShippingFastSolid className='text-[50px]'/>
          <span className='text-[20px] font-[600] uppercase'> Free Shipping</span>
          </div>

          <div className='col2'>
            <p className='mb-0 font-[500]'>Free delivery now on your first order and over $200</p>
          </div>

          <p className='font-bold text-[25px]'> - Only $200</p>

        </div>

        <AdsBannerSlider items={4}/>


      </div>
    </section>


    <section className="py-5 pt-0 bg-white">
        <div className='container'>
          <h2 className='text-[22px] font-[600]'>Latest Products</h2>
          <ProductsSlider items={6}/>

          <AdsBannerSlider items={3}/>

      </div>
    </section>

    <section className="py-5 pt-0 bg-white">
        <div className='container'>
          <h2 className='text-[22px] font-[600]'>Featured Products</h2>
          <ProductsSlider items={6}/>
          
          <AdsBannerSlider items={3}/>

      </div>
    </section>

    <Footer />

    </>
)
}

export default Home;