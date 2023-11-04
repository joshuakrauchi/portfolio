import Link from "next/link";

const MenuButton = ({ buttonText, address, onClick, isActive }) => {
  return (
    <>
      <Link href={address} onClick={onClick} className={"text-center text-white hover:bg-blue-500 py-4 w-48 text-xl " + (isActive ? "bg-blue-700" : "bg-black")}>
        { buttonText }
      </Link>
    </>
  );
};

export default MenuButton;