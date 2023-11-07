const Title = ({ title, subtitle }) => {
  return (
    <h1 className=" font-titlefont font-semibold text-sm capitalize text-green-500 relative z-10 px-1 py-1 border-b-[1px] border-gray-500 group">
      <span className="h1">{title}</span> {subtitle}
      <span className=" w-8 bg-gradient-to-t text-green-400 to-gray-100 inline-block rounded-full absolute left-2 top-1 opacity-10 -z-10 translate-x-0 group-hover:translate-x-24 transition-transform duration-500"></span>
    </h1>
  );
};

export default Title;
