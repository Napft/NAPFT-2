

const footer = () => {
  let NavItems = ['Home' , 'MarketPlace' , 'AboutUs' , 'PersonalPage']
  return (
  <div className="bg-black flex flex-col px-3 gap-6 lg:flex-row lg:gap-0 lg:px-0 lg:justify-around lg:items-center py-5 mt-2">
     <div>
      <div className="logo w-24 h-16"></div>
      <p className="text-slate-300 text-lg font-thin">A MarketPlace for newgen creators!!</p>
    </div>
    <div className="flex flex-col gap-3">
      {NavItems.map((x , index) =>(
        <span key={index} className="text-white hover:font-semibold cursor-pointer">{x}</span>
      ))}
    </div>

    <div className="text-slate-300 text-md mx-auto lg:mx-0">@2024 All Rights Reserved</div>
  </div>
    
  )
}

export default footer
