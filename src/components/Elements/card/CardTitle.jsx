const CardTitle = (props) => {
  const { titleName, titleText } = props;
  return (
    <>
      <div className="flex flex-col ">
        <h2 className="font-semibold text-2xl text-black dark:text-white ">
          {titleName}
        </h2>
        <p className=" text-sm text-black dark:text-zinc-500 text-balance line-clamp-4">
          {titleText}
        </p>
      </div>
    </>
  );
};

export default CardTitle;
