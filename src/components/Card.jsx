import React from 'react'
import {FaRegFileAlt} from "react-icons/fa"
import { IoMdDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({data, reference}) {
    return (
      <>
        <motion.div
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.2, cursor: "grabbing" }}
          className="flex flex-col flex-shrink-0 w-80 rounded-[40px] pt-10 text-xl text-white border-solid border-[1px] border-[#070F2B] overflow-hidden bg-[#9290C3] h-max cursor-grab"
        >
          <FaRegFileAlt className="text-[#010409] mx-3" />
          <p className="py-5 font-bold tracking-tighter leading-tight text-[#010409] text-lg mx-3">
            {data.desc}
          </p>

          <div className="w-full text-black">
            <div className="w-full flex justify-between items-end text-sm font-bold mb-5">
              <h5 className="mx-3">{data.fileSize}</h5>

              <div className="bg-[#010409] text-[#cbc9f2] p-1 text-sm rounded-full mx-3">
                {data.close ? (
                  <IoClose />
                ) : (
                  <a href="https://instagram.com" target="blank">
                    <IoMdDownload />
                  </a>
                )}
              </div>
            </div>
            {data.tag.isOpen && (
              <div
                className={`flex items-center justify-center w-full ${
                  data.tag.tagColor === "green" ? "bg-green-700" : "bg-red-700"
                } text-white h-8`}
              >
                <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
              </div>
            )}
          </div>
        </motion.div>
      </>
    );
}

export default Card
