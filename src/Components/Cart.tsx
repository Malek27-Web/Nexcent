// Updated CartProps interface with an optional isLargeText prop
interface CartProps {
  imagePath: string;
  description: string;
  text: string;
}

// Cart component with conditional font size logic
function Cart({ imagePath, description, text }: CartProps) {
  return (
    <div>
      <div className="relative">
        <img className="rounded-sm" src={imagePath} alt="" />
        <div className="w-64 lg:w-80 absolute top-[80%] left-[50%] -translate-x-[50%] items-center  rounded bg-white drop-shadow-md p-3 gap-y-4 lg:gap-y-11  flex flex-col  h-32">
          <p
            className={`text-[#717171] text-sm text-center font-init  font-semibold`}
          >
            {description}
          </p>

          <p className={` font-init gap-x-3 text-[#4CAF4F]  font-semibold`}>
            {text} →
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
