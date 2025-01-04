/* eslint-disable react/react-in-jsx-scope */
import Button from "../ui/Button";
function QuantityMange() {
  return (
    <div className="flex flex-row items-center sm:gap-2">
      <Button
        type={"small"}
        style={
          "text-[12px] xs:text-sm rounded-none sm:rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"
        }
      >
        -
      </Button>
      <p className="xs:text-sm bg-yellow-200 px-2 text-[12px] font-semibold sm:bg-transparent">10</p>
      <Button
        type={"small"}
        style={
          " text-[12px] xs:text-sm rounded-none sm:rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"
        }
      >
        +
      </Button>
    </div>
  );
}

export default QuantityMange;
