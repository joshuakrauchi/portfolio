import Image from "next/image";
import Link from "next/link";

const ContactButton = ({ imageSource, animationDelay, size, address }) => {
  return (
    <>
      <Link href={address} className="animate__animated animate__fadeInRight flex justify-center w-16 h-16 rounded-full p-2 bg-white hover:bg-blue-500" style={{animationDelay: animationDelay + "ms"}}>
        <Image width={size} height={size} src={imageSource} alt={address}></Image>
      </Link>
    </>
  );
};

export default ContactButton;