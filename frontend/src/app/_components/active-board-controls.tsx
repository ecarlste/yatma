import Button from "./button";
import IconVerticalEllipsis from "./icon-vertical-ellipsis";

type ActiveBoardControlsProps = {
  isButtonDisabled: boolean;
};

function ActiveBoardControls({ isButtonDisabled }: ActiveBoardControlsProps) {
  return (
    <div className="flex items-center gap-6 pr-8 pb-2">
      <Button disabled={isButtonDisabled}>+ Add New Task</Button>
      <IconVerticalEllipsis className="shrink-0" />
    </div>
  );
}

export default ActiveBoardControls;
