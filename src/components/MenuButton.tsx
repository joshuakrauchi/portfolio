import Link from "next/link";

const MenuButton = (props: { buttonText: string, address: string, onClick: any, isActive: boolean }) => {
  return (
    <>
      <Link href={props.address} onClick={props.onClick} className={"text-center text-white hover:bg-blue-500 py-4 w-48 text-xl " + (props.isActive ? "bg-blue-700" : "bg-black")}>
        { props.buttonText }
      </Link>
    </>
  );
};

export default MenuButton;