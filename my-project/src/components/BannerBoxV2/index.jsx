
 const BannerBoxV2= (props) => {
  return (
    <div className="bannerBoxV2 w-full h-full overflow-hidden rounded-md group">
      <img src= {props.image} 
      className="w-full translation-all duration-150 group-hover:scale-105" alt="" />
    </div>
  )
}

export default BannerBoxV2;