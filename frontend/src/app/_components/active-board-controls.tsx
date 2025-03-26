import Image, { type StaticImageData } from "next/image";
import Button from "./button";
import iconVerticalEllipsis from "~/../public/images/icon-vertical-ellipsis.svg";

type ActiveBoardControlsProps = {
  isBoardEmpty: boolean;
};

function ActiveBoardControls({ isBoardEmpty }: ActiveBoardControlsProps) {
  return (
    <div className="flex items-center gap-6 pr-8 pb-2">
      <Button disabled={isBoardEmpty}>+ Add New Task</Button>
      <Image
        src={iconVerticalEllipsis as StaticImageData}
        alt="Vertical Ellipsis"
        className="h-5"
      />
    </div>
  );
}

export default ActiveBoardControls;
