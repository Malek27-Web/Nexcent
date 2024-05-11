interface CardProps {
  imagepath: string;
  title: string;
  description: string;
}

function Card({ imagepath, title, description }: CardProps) {
  return (
    <div className="w-72  cursor-pointer border-2 p-4 drop-shadow-md bg-white  hover:drop-shadow-xl  rounded-lg  flex flex-col items-center justify-center gap-y-5">
      <img className="w-24" src={imagepath} />
      <p className="text-[#4D4D4D] text-center text-3xl font-bold font-init tracking-normal">
        {title}
      </p>
      <p className="font-init text-lg text-[#717171] text-center">
        {description}
      </p>
    </div>
  );
}

export default Card;
