import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "../Navigation/style.css"

const Navigation = () => {
  

  return (
    <>
      <nav>
          <div className="col_2">
            <ul className='flex flex-col items-start justify-start nav'>
              <li className='list-none relative'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'>Fashion</Button>
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
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'>Electronics</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'>Groceries</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'>Beauty</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'>Wellness</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'>Wellness</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'>Wellness</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'>Wellness</Button>
                </Link>
              </li>
            </ul>
          </div>
      </nav>

    </>
  );
};

export default Navigation;