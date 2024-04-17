import React,{userState, useRef} from "react";
import Card from "./Card";

function foreground() {
  const ref = useRef(null);

    const data = [
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste expedita rem aliquam, placeat itaque aperiam velit? Atque cumque maxime fuga?",
        fileSize: ".32mb",
        close: false,
        tag: {
          isOpen: true,
          tagTitle: "Download Now",
          tagColor: "green",
        },
      },
      {
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, ea.",
        fileSize: "1.63mb",
        close: false,
        tag: {
          isOpen: false,
          tagTitle: "Download Now",
          tagColor: "yellow",
        },
      },
      {
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nesciunt illum fuga",
        fileSize: ".72mb",
        close: true,
        tag: {
          isOpen: true,
          tagTitle: "Claim within 1hr",
          tagColor: "red",
        },
      },
    ];
  return (
    <>
      <div ref={ref} className="flex gap-10 flex-wrap fixed top-0 left-0 z-[3] h-screen w-full p-5 mt-20">
              {data.map((dets, ind) => {
                return <Card data={dets} reference={ref} />;
       })}
      </div>
    </>
  );
}

export default foreground;
