import AdsBannerSlider from '../../components/AdsBannerSlider';
import AdsBannerSliderV2 from '../../components/AdsBannerSliderV2';

import HomeCatSlider from '../../components/CatSlider';
import HomeSlider from '../../components/HomeSlider';
import BannerBoxV2 from '../../components/BannerBoxV2';

import Navigation from '../../components/Header/Navigation';

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
    <section className='bg-white py-6'>
      <div className='container flex gap-1'>
          <div className='part1 w-[15%]'>
           <Navigation />
          </div>

          <div className='part2 w-[65%]'>
          <HomeSlider/>
          </div>

          <div className='part3 w-[20%] flex items-center justify-between gap-1 flex-col'>
          <BannerBoxV2 image={'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_.jpg'}/>
          <BannerBoxV2 image={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Accessories._SY116_CB558654384_.jpg'}/>
          </div>

        </div>
    </section>


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


      </div>
    </section>

    <section className="py-5 pt-0 bg-white">
        <div className='container'>
          <h2 className='text-[22px] font-[600]'>Featured Products</h2>
          <ProductsSlider items={6}/>
          
          <AdsBannerSliderV2 items={3} />

      </div>
    </section>

    

    </>
)
}

export default Home;