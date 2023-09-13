import React from "react";
import { Helmet } from "react-helmet";
function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-council bg-no-repeat bg-center bg-cover">
      <Helmet>
        <title>Contact | Tombalaci Mehmet</title>
        <meta
          name="description"
          content="contact page for the Tombalaci Mehmet"
        />
      </Helmet>
      <div className="flex flex-col justify-center items-center  bg-slate-100 opacity-50 rounded-3xl p-1">
        <p className="font-[IBM Plex Serif] text-5xl m-0 p-8">
          The Counsil appreciates your courage
        </p>
        <p className="font-[IBM Plex Serif] text-5xl m-0 p-8">But...</p>
        <p className="font-[IBM Plex Serif] text-5xl m-0 p-8">
          For your own good you better keep your opinions to yourself
        </p>
      </div>
    </div>
  );
}

export default Contact;
