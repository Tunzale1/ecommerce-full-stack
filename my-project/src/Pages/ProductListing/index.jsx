import Sidebar from "../../components/Sidebar";
import ProductItem from '../../components/ProductItem';

const ProductListing = () => {
  return (
    <section>
      <div className="bg-black">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white p-3">
            <Sidebar/>
          </div>



          <div className="rightContent w-[80%]">
            <div className="grid grid-cols-4 md:grid-cols-4 gap-3">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProductListing;
