import Image from "next/image";
import React from "react";
import nextImage from "../../assets/Nextjs-logo.svg.png";

const Album = () => {
  return (
    <div>
      <h1>This image is using img tag</h1>
      <img
        src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
        alt="image"
        descritption="nextjs home page image"
        width="full"
      />
      <h1>This image is using Image component</h1>
      <Image
        src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
        alt="image"
        descritption="nextjs home page image"
        width={500}
        height={500}
        layout="resposive"
      />
      <h1>This image is using Image component and local path</h1>
      <Image
        src={nextImage}
        alt="image"
        descritption="nextjs home page image"
        width={500}
        height={500}
        layout="resposive"
      />
    </div>
  );
};

export default Album;
