const CardImage = (props) => {
  const { imgUrl } = props;
  return (
    <img
      className="object-cover sm:w-full sm:h-full w-auto aspect-video drop-shadow-md bg-center duration-500 ease-in-out rounded-lg "
      src={imgUrl}
    ></img>
  );
};

export default CardImage;
