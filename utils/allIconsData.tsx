import {
  Code as CodeIcon,
  Build as BuildIcon,
  Computer as ComputerIcon,
  Phone as PhoneIcon,
  Tablet as TabletIcon,
  DesktopMac as DesktopMacIcon,
  Storage as StorageIcon,
  BugReport as BugReportIcon,
  Palette as PaletteIcon,
  Settings as SettingsIcon,
  Folder as FolderIcon,
  Extension as ExtensionIcon,
  Web as WebIcon,
  Menu as MenuIcon,
  Description as DescriptionIcon,
  DeveloperMode as DeveloperModeIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Search as SearchIcon,
  Person as PersonIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  FileCopy as FileCopyIcon,
  FormatListBulleted as FormatListBulletedIcon,
  CloudUpload as CloudUploadIcon,
  CloudDownload as CloudDownloadIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  Help as HelpIcon,
  Link as LinkIcon,
  Share as ShareIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Mail as MailIcon,
  PhoneInTalk as PhoneInTalkIcon,
  Logout as LogoutIcon,
  Login as LoginIcon,
  Dashboard as DashboardIcon,
  CalendarToday as CalendarTodayIcon,
  Alarm as AlarmIcon,
  Bookmark as BookmarkIcon,
  Edit as EditIcon,
  CheckCircle as CheckCircleIcon,
  Close as CloseIcon,
  Warning as WarningIcon,
  MoreVert as MoreVertIcon,
  MenuOpen as MenuOpenIcon,
  Home as HomeIcon,
  AddCircle as AddCircleIcon,
  RemoveCircle as RemoveCircleIcon,
  BuildCircle as BuildCircleIcon,
  BuildSharp as BuildSharpIcon,
  CodeSharp as CodeSharpIcon,
  DesktopWindows as DesktopWindowsIcon,
  Devices as DevicesIcon,
  Language as LanguageIcon,
  LocalLibrary as LocalLibraryIcon,
  MapsHomeWork as MapsHomeWorkIcon,
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
    icon: <CodeIcon className="text-[30px]" />,
    name: "CodeIcon",
    isSelected: false,
  },
  {
    id: 2,
    icon: <BuildIcon className="text-[30px]" />,
    name: "BuildIcon",
    isSelected: false,
  },
  {
    id: 3,
    icon: <ComputerIcon className="text-[30px]" />,
    name: "ComputerIcon",
    isSelected: false,
  },
  {
    id: 4,
    icon: <PhoneIcon className="text-[30px]" />,
    name: "PhoneIcon",
    isSelected: false,
  },
  {
    id: 5,
    icon: <TabletIcon className="text-[30px]" />,
    name: "TabletIcon",
    isSelected: false,
  },
  {
    id: 6,
    icon: <DesktopMacIcon className="text-[30px]" />,
    name: "DesktopMacIcon",
    isSelected: false,
  },
  {
    id: 7,
    icon: <StorageIcon className="text-[30px]" />,
    name: "StorageIcon",
    isSelected: false,
  },
  {
    id: 8,
    icon: <BugReportIcon className="text-[30px]" />,
    name: "BugReportIcon",
    isSelected: false,
  },
  {
    id: 9,
    icon: <PaletteIcon className="text-[30px]" />,
    name: "PaletteIcon",
    isSelected: false,
  },
  {
    id: 10,
    icon: <SettingsIcon className="text-[30px]" />,
    name: "SettingsIcon",
    isSelected: false,
  },
  {
    id: 11,
    icon: <FolderIcon className="text-[30px]" />,
    name: "FolderIcon",
    isSelected: false,
  },
  {
    id: 12,
    icon: <ExtensionIcon className="text-[30px]" />,
    name: "ExtensionIcon",
    isSelected: false,
  },
  {
    id: 13,
    icon: <WebIcon className="text-[30px]" />,
    name: "WebIcon",
    isSelected: false,
  },
  {
    id: 14,
    icon: <MenuIcon className="text-[30px]" />,
    name: "MenuIcon",
    isSelected: false,
  },
  {
    id: 15,
    icon: <DescriptionIcon className="text-[30px]" />,
    name: "DescriptionIcon",
    isSelected: false,
  },
  {
    id: 16,
    icon: <DeveloperModeIcon className="text-[30px]" />,
    name: "DeveloperModeIcon",
    isSelected: false,
  },
  {
    id: 17,
    icon: <AddIcon className="text-[30px]" />,
    name: "AddIcon",
    isSelected: false,
  },
  {
    id: 18,
    icon: <RemoveIcon className="text-[30px]" />,
    name: "RemoveIcon",
    isSelected: false,
  },
  {
    id: 19,
    icon: <SearchIcon className="text-[30px]" />,
    name: "SearchIcon",
    isSelected: false,
  },
  {
    id: 20,
    icon: <PersonIcon className="text-[30px]" />,
    name: "PersonIcon",
    isSelected: false,
  },

  {
    id: 21,
    icon: <LockIcon className="text-[30px]" />,
    name: "LockIcon",
    isSelected: false,
  },
  {
    id: 22,
    icon: <LockOpenIcon className="text-[30px]" />,
    name: "LockOpenIcon",
    isSelected: false,
  },
  {
    id: 23,
    icon: <VisibilityIcon className="text-[30px]" />,
    name: "VisibilityIcon",
    isSelected: false,
  },
  {
    id: 24,
    icon: <VisibilityOffIcon className="text-[30px]" />,
    name: "VisibilityOffIcon",
    isSelected: false,
  },
  {
    id: 25,
    icon: <FileCopyIcon className="text-[30px]" />,
    name: "FileCopyIcon",
    isSelected: false,
  },
  {
    id: 26,
    icon: <FormatListBulletedIcon className="text-[30px]" />,
    name: "FormatListBulletedIcon",
    isSelected: false,
  },
  {
    id: 27,
    icon: <CloudUploadIcon className="text-[30px]" />,
    name: "CloudUploadIcon",
    isSelected: false,
  },
  {
    id: 28,
    icon: <CloudDownloadIcon className="text-[30px]" />,
    name: "CloudDownloadIcon",
    isSelected: false,
  },
  {
    id: 29,
    icon: <ErrorIcon className="text-[30px]" />,
    name: "ErrorIcon",
    isSelected: false,
  },
  {
    id: 30,
    icon: <InfoIcon className="text-[30px]" />,
    name: "InfoIcon",
    isSelected: false,
  },
  {
    id: 31,
    icon: <HelpIcon className="text-[30px]" />,
    name: "HelpIcon",
    isSelected: false,
  },
  {
    id: 32,
    icon: <LinkIcon className="text-[30px]" />,
    name: "LinkIcon",
    isSelected: false,
  },
  {
    id: 33,
    icon: <ShareIcon className="text-[30px]" />,
    name: "ShareIcon",
    isSelected: false,
  },
  {
    id: 34,
    icon: <GitHubIcon className="text-[30px]" />,
    name: "GitHubIcon",
    isSelected: false,
  },
  {
    id: 35,
    icon: <TwitterIcon className="text-[30px]" />,
    name: "TwitterIcon",
    isSelected: false,
  },
  {
    id: 36,
    icon: <FacebookIcon className="text-[30px]" />,
    name: "FacebookIcon",
    isSelected: false,
  },
  {
    id: 37,
    icon: <LinkedInIcon className="text-[30px]" />,
    name: "LinkedInIcon",
    isSelected: false,
  },
  {
    id: 38,
    icon: <InstagramIcon className="text-[30px]" />,
    name: "InstagramIcon",
    isSelected: false,
  },
  {
    id: 39,
    icon: <MailIcon className="text-[30px]" />,
    name: "MailIcon",
    isSelected: false,
  },
  {
    id: 40,
    icon: <PhoneInTalkIcon className="text-[30px]" />,
    name: "PhoneInTalkIcon",
    isSelected: false,
  },

  {
    id: 41,
    icon: <LogoutIcon className="text-[30px]" />,
    name: "LogoutIcon",
    isSelected: false,
  },
  {
    id: 42,
    icon: <LoginIcon className="text-[30px]" />,
    name: "LoginIcon",
    isSelected: false,
  },
  {
    id: 43,
    icon: <DashboardIcon className="text-[30px]" />,
    name: "DashboardIcon",
    isSelected: false,
  },
  {
    id: 44,
    icon: <CalendarTodayIcon className="text-[30px]" />,
    name: "CalendarTodayIcon",
    isSelected: false,
  },
  {
    id: 45,
    icon: <AlarmIcon className="text-[30px]" />,
    name: "AlarmIcon",
    isSelected: false,
  },
  {
    id: 46,
    icon: <BookmarkIcon className="text-[30px]" />,
    name: "BookmarkIcon",
    isSelected: false,
  },
  {
    id: 47,
    icon: <EditIcon className="text-[30px]" />,
    name: "EditIcon",
    isSelected: false,
  },
  {
    id: 48,
    icon: <CheckCircleIcon className="text-[30px]" />,
    name: "CheckCircleIcon",
    isSelected: false,
  },
  {
    id: 49,
    icon: <CloseIcon className="text-[30px]" />,
    name: "CloseIcon",
    isSelected: false,
  },
  {
    id: 50,
    icon: <WarningIcon className="text-[30px]" />,
    name: "WarningIcon",
    isSelected: false,
  },

  {
    id: 51,
    icon: <CloseIcon className="text-[30px]" />,
    name: "CloseIcon",
    isSelected: false,
  },
  {
    id: 52,
    icon: <MoreVertIcon className="text-[30px]" />,
    name: "MoreVertIcon",
    isSelected: false,
  },
  {
    id: 53,
    icon: <MenuOpenIcon className="text-[30px]" />,
    name: "MenuOpenIcon",
    isSelected: false,
  },
  {
    id: 54,
    icon: <HomeIcon className="text-[30px]" />,
    name: "HomeIcon",
    isSelected: false,
  },
  {
    id: 55,
    icon: <AddCircleIcon className="text-[30px]" />,
    name: "AddCircleIcon",
    isSelected: false,
  },
  {
    id: 56,
    icon: <RemoveCircleIcon className="text-[30px]" />,
    name: "RemoveCircleIcon",
    isSelected: false,
  },
  {
    id: 57,
    icon: <BuildCircleIcon className="text-[30px]" />,
    name: "BuildCircleIcon",
    isSelected: false,
  },
  {
    id: 58,
    icon: <BuildSharpIcon className="text-[30px]" />,
    name: "BuildSharpIcon",
    isSelected: false,
  },
  {
    id: 59,
    icon: <CodeSharpIcon className="text-[30px]" />,
    name: "CodeSharpIcon",
    isSelected: false,
  },
  {
    id: 60,
    icon: <DesktopWindowsIcon className="text-[30px]" />,
    name: "DesktopWindowsIcon",
    isSelected: false,
  },

  {
    id: 61,
    icon: <DevicesIcon className="text-[30px]" />,
    name: "DevicesIcon",
    isSelected: false,
  },
  {
    id: 62,
    icon: <LanguageIcon className="text-[30px]" />,
    name: "LanguageIcon",
    isSelected: false,
  },
  {
    id: 63,
    icon: <LocalLibraryIcon className="text-[30px]" />,
    name: "LocalLibraryIcon",
    isSelected: false,
  },
  {
    id: 64,
    icon: <MapsHomeWorkIcon className="text-[30px]" />,
    name: "MapsHomeWorkIcon",
    isSelected: false,
  },
  {
    id: 65,
    icon: <CodeIcon className="text-[30px]" />,
    name: "CodeIcon",
    isSelected: false,
  },
  {
    id: 66,
    icon: <BuildIcon className="text-[30px]" />,
    name: "BuildIcon",
    isSelected: false,
  },
  {
    id: 67,
    icon: <ComputerIcon className="text-[30px]" />,
    name: "ComputerIcon",
    isSelected: false,
  },
  {
    id: 68,
    icon: <PhoneIcon className="text-[30px]" />,
    name: "PhoneIcon",
    isSelected: false,
  },
  {
    id: 69,
    icon: <TabletIcon className="text-[30px]" />,
    name: "TabletIcon",
    isSelected: false,
  },
  {
    id: 70,
    icon: <DesktopMacIcon className="text-[30px]" />,
    name: "DesktopMacIcon",
    isSelected: false,
  },

  {
    id: 71,
    icon: <StorageIcon className="text-[30px]" />,
    name: "StorageIcon",
    isSelected: false,
  },
  {
    id: 72,
    icon: <BugReportIcon className="text-[30px]" />,
    name: "BugReportIcon",
    isSelected: false,
  },
  {
    id: 73,
    icon: <PaletteIcon className="text-[30px]" />,
    name: "PaletteIcon",
    isSelected: false,
  },
  {
    id: 74,
    icon: <SettingsIcon className="text-[30px]" />,
    name: "SettingsIcon",
    isSelected: false,
  },
  {
    id: 75,
    icon: <FolderIcon className="text-[30px]" />,
    name: "FolderIcon",
    isSelected: false,
  },
  {
    id: 76,
    icon: <ExtensionIcon className="text-[30px]" />,
    name: "ExtensionIcon",
    isSelected: false,
  },
  {
    id: 77,
    icon: <WebIcon className="text-[30px]" />,
    name: "WebIcon",
    isSelected: false,
  },
  {
    id: 78,
    icon: <MenuIcon className="text-[30px]" />,
    name: "MenuIcon",
    isSelected: false,
  },
  {
    id: 79,
    icon: <DescriptionIcon className="text-[30px]" />,
    name: "DescriptionIcon",
    isSelected: false,
  },
  {
    id: 80,
    icon: <DeveloperModeIcon className="text-[30px]" />,
    name: "DeveloperModeIcon",
    isSelected: false,
  },

  {
    id: 81,
    icon: <AddIcon className="text-[30px]" />,
    name: "AddIcon",
    isSelected: false,
  },
  {
    id: 82,
    icon: <RemoveIcon className="text-[30px]" />,
    name: "RemoveIcon",
    isSelected: false,
  },
  {
    id: 83,
    icon: <SearchIcon className="text-[30px]" />,
    name: "SearchIcon",
    isSelected: false,
  },
  {
    id: 84,
    icon: <PersonIcon className="text-[30px]" />,
    name: "PersonIcon",
    isSelected: false,
  },
  {
    id: 85,
    icon: <LockIcon className="text-[30px]" />,
    name: "LockIcon",
    isSelected: false,
  },
  {
    id: 86,
    icon: <LockOpenIcon className="text-[30px]" />,
    name: "LockOpenIcon",
    isSelected: false,
  },
  {
    id: 87,
    icon: <VisibilityIcon className="text-[30px]" />,
    name: "VisibilityIcon",
    isSelected: false,
  },
  {
    id: 88,
    icon: <VisibilityOffIcon className="text-[30px]" />,
    name: "VisibilityOffIcon",
    isSelected: false,
  },
  {
    id: 89,
    icon: <FileCopyIcon className="text-[30px]" />,
    name: "FileCopyIcon",
    isSelected: false,
  },
  {
    id: 90,
    icon: <FormatListBulletedIcon className="text-[30px]" />,
    name: "FormatListBulletedIcon",
    isSelected: false,
  },

  {
    id: 91,
    icon: <CloudUploadIcon className="text-[30px]" />,
    name: "CloudUploadIcon",
    isSelected: false,
  },
  {
    id: 92,
    icon: <CloudDownloadIcon className="text-[30px]" />,
    name: "CloudDownloadIcon",
    isSelected: false,
  },
  {
    id: 93,
    icon: <ErrorIcon className="text-[30px]" />,
    name: "ErrorIcon",
    isSelected: false,
  },
  {
    id: 94,
    icon: <InfoIcon className="text-[30px]" />,
    name: "InfoIcon",
    isSelected: false,
  },
  {
    id: 95,
    icon: <HelpIcon className="text-[30px]" />,
    name: "HelpIcon",
    isSelected: false,
  },
  {
    id: 96,
    icon: <LinkIcon className="text-[30px]" />,
    name: "LinkIcon",
    isSelected: false,
  },
  {
    id: 97,
    icon: <ShareIcon className="text-[30px]" />,
    name: "ShareIcon",
    isSelected: false,
  },
  {
    id: 98,
    icon: <GitHubIcon className="text-[30px]" />,
    name: "GitHubIcon",
    isSelected: false,
  },
  {
    id: 99,
    icon: <TwitterIcon className="text-[30px]" />,
    name: "TwitterIcon",
    isSelected: false,
  },
  {
    id: 100,
    icon: <FacebookIcon className="text-[30px]" />,
    name: "FacebookIcon",
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
