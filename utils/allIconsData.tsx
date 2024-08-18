import {
  DeveloperModeOutlined,
  Filter1Sharp,
  GradientRounded,
  LaptopChromebook,
  OpacityRounded,
  PhoneInTalkSharp,
  TabletAndroid,
} from "@mui/icons-material";

export interface IconData {
  id: number;
  icon: React.ReactNode;
  isSelected: boolean;
  name: string;
}

export const allIconsArray: IconData[] = [
  {
    id: 1,
    icon: <DeveloperModeOutlined className="text-[30px]" />,
    name: "DeveloperModeOutlined",
    isSelected: false,
  },
  {
    id: 2,
    icon: <TabletAndroid className="text-[30px]" />,
    name: "TabletAndroid",
    isSelected: false,
  },
  {
    id: 3,
    icon: <PhoneInTalkSharp className="text-[30px]" />,
    name: "PhoneInTalkSharp",
    isSelected: false,
  },
  {
    id: 4,
    icon: <LaptopChromebook className="text-[30px]" />,
    name: "LaptopChromebook",
    isSelected: false,
  },
  {
    id: 5,
    icon: <GradientRounded className="text-[30px]" />,
    name: "GradientRounded",
    isSelected: false,
  },
  {
    id: 6,
    icon: <OpacityRounded className="text-[30px]" />,
    name: "OpacityRounded",
    isSelected: false,
  },
  {
    id: 7,
    icon: <Filter1Sharp className="text-[30px]" />,
    name: "Filter1Sharp",
    isSelected: false,
  },
];
const AllIcons = ({
  allIconsState,
  setAllIconsState,
}: {
  allIconsState: IconData[];
  setAllIconsState: React.Dispatch<React.SetStateAction<IconData[]>>;
}) => {
  const handleClickedIcon = (singleIcon: IconData) => {
    setAllIconsState((prevState) =>
      prevState.map((icon) => ({
        ...icon,
        isSelected: icon.id === singleIcon.id ? !icon.isSelected : false,
      }))
    );
  };
  return (
    <div className="flex flex-wrap  gap-2 text-red-300 p-3">
      {allIconsState.map((singleIcon, index) => (
        <div
          className={`w-12 h-12 shadow-sm border border-slate-200 p-2 flex items-center cursor-pointer justify-center rounded-lg  transition  ${
            singleIcon.isSelected
              ? "bg-red-400 text-white"
              : "bg-white hover:bg-red-200 text-red-200"
          }`}
          key={index}
          onClick={() => {
            handleClickedIcon(singleIcon);
          }}
        >
          {singleIcon.icon}
        </div>
      ))}
    </div>
  );
};

export default AllIcons;
