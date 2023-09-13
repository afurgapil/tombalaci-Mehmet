import React from "react";
import tree from "../assets/5.png";
import { Helmet } from "react-helmet";
function NotFound() {
  return (
    <div>
      <Helmet>
        <title>404 | Tombalaci Mehmet</title>
        <meta name="description" content="404 page for the Tombalaci Mehmet" />
      </Helmet>
      <div className="flex flex-row justify-center items-center min-h-screen bg-bg font-[Climate Crisis] text-4xl text-black">
        <img src={tree} alt="tree" className="w-1/3"></img>
        <div className="flex flex-col justify-start items-start my-4">
          <h1 className="font-extrabold text-9xl">404</h1>
          <p className="font-bold text-3xl font-[Lucida Sans]">
            Sayfa Bulunamadı.
          </p>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
