import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
export default function Cards(prop) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={prop.reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.2}
        dragTransition={{
          bounceStiffness:100,
          bounceDamping:30
        }}
        className=" relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-8 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">
          {prop.data.desc}
        </p>
        <div className=" footer absolute bottom-0 w-full   left-0">
          <div className="flex items-center justify-between px-8 py-3 mb-5">
            <h5>{prop.data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-600 flex items-center rounded-full justify-center">
              {prop.data.close ? (
                <IoIosClose />
              ) : (
                <LuDownload size=".7em" color="#FFF" />
              )}
            </span>
          </div>
          {prop.data.tag.isOpen ? (
            <div
              className={`tag w-full py-4 ${
                prop.data.tag.tagColor === "blue"
                  ? "bg-blue-600"
                  : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">
                {prop.data.tag.tagTitle}
              </h3>
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
}
