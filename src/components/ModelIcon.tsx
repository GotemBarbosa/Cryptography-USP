import { HiOutlineBookOpen } from "react-icons/hi";
import { GrTechnology } from "react-icons/gr";
import { BiLockOpenAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
interface modelIconProps {
  type: string;
}

export default function ModelICon({ type }: modelIconProps) {
  return (
    <div
      className={`${
        type === "classic"
          ? "bg-yellow-400"
          : type === "hash"
          ? "bg-sky-600"
          : type === "modern"
          ? "bg-emerald-600"
          : "bg-stone-700"
      } w-16 h-12 sm:w-12 sm:h-12 rounded-lg mx-1 flex justify-center items-center`}
    >
      {type === "classic" ? (
        <HiOutlineBookOpen color="white" size={30} />
      ) : type === "hash" ? (
        <BiLockOpenAlt color="white" size={30} />
      ) : type === "modern" ? (
        <GrTechnology color="white" size={30} />
      ) : (
        <BsThreeDots color="white" size={30} />
      )}
    </div>
  );
}
