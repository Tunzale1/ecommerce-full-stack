import { Link } from 'react-router-dom';


const BannerBox  = (props) => {
  return (
    <div className='box bannerBox overflow-hidden rounded-lg group'>
        <Link to="/">
            <img src={props.img} className="w-full h-[200px] object-cover transition group-hover:scale-105 group-hover:rotate-2 " alt="banner_image" />
        </Link>
</div>
  )
}

export default BannerBox;
