import React from "react";

function background() {
    return (
      <>
          <div className="h-[18vh] w-screen flex justify-center items-center">
            <h1 className="text-blue-200 font-semibold text-xl">Documents</h1>
          </div>

          <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] tracking-tighter leading-none font-semibold text-[15vw] text-blue-400">
            Docs.
          </h1>
      </>
    );
}

export default background;
