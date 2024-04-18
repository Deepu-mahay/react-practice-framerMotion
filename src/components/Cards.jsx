import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
export default function Cards() {
  return (
    <>
      <div className=" relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-8 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
        <div className=" footer absolute bottom-0 w-full   left-0">
            <div className="flex items-center justify-between px-8 py-3 mb-5">
            <h5>.4mb</h5>
            <span className="w-7 h-7 bg-zinc-600 flex items-center rounded-full justify-center">
            <LuDownload size='.7em' color="#FFF" />
            </span>
            </div>
            <div className="tag w-full py-4 bg-green-500 flex items-center justify-center">
                <h3 className="text-sm font-semibold">Download Now</h3>
            </div>
        </div>
        footer
      
      </div>
    </>
  );
}
