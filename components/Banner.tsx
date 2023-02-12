import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[280px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://images.unsplash.com/photo-1562920618-c427d9252d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        alt="banner"
        fill
        className="object-cover"
      />
      <div className="absolute top-1/2 -translate-y-1/2 text-white w-full text-center">
        <p>Not sure where to go? Perfect.</p>
        <button className="select-none bg-white rounded-full font-bold px-5 py-2.5 hover:shadow-xl my-3 text-red-400 active:scale-95 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
