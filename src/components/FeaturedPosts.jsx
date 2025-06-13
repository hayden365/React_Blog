import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" />
        {/* details */}
        {/* items */}
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4"></div>
    </div>
  );
};

export default FeaturedPosts;
