interface InfoPopoverProps {
  type: string;
  description: string;
  date: string;
}

export default function InfoPopover({
  type,
  description,
  date,
}: InfoPopoverProps) {
  return (
    <div className="bg-gray-700  px-4 py-4 w-72 shadow-md font-inter">
      <div className="w-full border-b-2 border-gray-900">
        <h3 className="text-[#CBD5E1] font-bold "> Descrição:</h3>
        <p className="font-medium text-sm px-2 text-white">{description}</p>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[#CBD5E1] font-bold ">Data:</h3>
          <p className="font-medium text-sm text-white">{date}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[#CBD5E1] font-bold ">Tipo:</h3>
          <p className="font-medium text-sm text-white">{type}</p>
        </div>
      </div>
    </div>
  );
}
