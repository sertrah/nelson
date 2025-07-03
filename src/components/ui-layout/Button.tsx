const ButtonTextChange = () => {
  return (
    <>
      <button className="group relative h-12 rounded-full border-2  border-[#8A181A] bg-gradient-to-r  from-[#272727] to-[#141414] px-5 text-white">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
            Contact me
          </div>
          <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            Contact me
          </div>
        </span>
      </button>
    </>
  );
};

export default ButtonTextChange;
