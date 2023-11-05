import Image from "next/image";
import Link from "next/link";

const ContactButton = (props: { imageSource: any, animationDelay: any, size: any, address: any }) => {
  return (
    <>
      <Link href={props.address} className="animate__animated animate__fadeInRight flex justify-center w-16 h-16 rounded-full p-2 bg-white hover:bg-blue-500" style={{animationDelay: props.animationDelay + "ms"}}>
        <Image width={props.size} height={props.size} src={props.imageSource} alt={props.address}></Image>
      </Link>
    </>
  );
};

export default ContactButton;