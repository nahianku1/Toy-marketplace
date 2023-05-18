function Homebanner() {
  return (
    <>
      <div className=" mx-[20px] mt-[75px]  md:mx-[120px] py-[40px] flex  gap-[70px] flex-wrap md:flex-nowrap">
        <div className="dark:text-white flex flex-col gap-[20px] md:max-w-[55%] justify-center  items-start">
          <h1 className="text-3xl md:text-5xl  font-bold md:leading-[50px] min-w-max">
            Quality products <br /> for everyone <br />
            <span className="text-orange-400">Elevate Your Joy with Toy!</span>
          </h1>
          <p>
            Unleash the Power of Quality Educational Toys! Explore Our Extensive
            Collection Today! Shop Smarter, Shop with Convenience. Discover
            Exclusive Deals on Our Online Platform! Revolutionize Your Product
            Experience. Browse, Click, and Shop from the Comfort of Your Home!
            Welcome to the Ultimate Toy Shopping Destination. Find Everything
            You Need in One Place! Unlock a World of Possibilities. Discover
            Trending Products and Unbeatable Offers! Shop the Latest Products at
            Unbeatable Prices! Your One-Stop Shop for All Your Educational Toy.
          </p>
          <button className=" min-w-max rounded-3xl bg-orange-400 px-[18px] py-[10px] font-bold text-black border-none cursor-pointer">
            Shop Now
          </button>
        </div>
        <div className="w-[300px] h-[300px] flex items-center md:w-[500px] md:h-[500px] relative">
          <img
            className="object-cover object-center absolute"
            src="/images/rocket.png"
            alt="gigabyte"
          />
        </div>
      </div>
    </>
  );
}

export default Homebanner;
