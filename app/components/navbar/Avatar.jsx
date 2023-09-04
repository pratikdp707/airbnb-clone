"use client";

const { default: Image } = require("next/image");

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      alt="avatar"
      height={30}
      width={30}
      src="/images/placeholder.jpg"
    />
  );
};

export default Avatar;
