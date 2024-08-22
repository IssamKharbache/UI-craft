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
import CategoryIcon from "@mui/icons-material/Category";

type IconName =
  | string
  | "CodeIcon"
  | "BuildIcon"
  | "ComputerIcon"
  | "PhoneIcon"
  | "TabletIcon"
  | "DesktopMacIcon"
  | "StorageIcon"
  | "BugReportIcon"
  | "PaletteIcon"
  | "SettingsIcon"
  | "FolderIcon"
  | "ExtensionIcon"
  | "WebIcon"
  | "MenuIcon"
  | "DescriptionIcon"
  | "DeveloperModeIcon"
  | "AddIcon"
  | "RemoveIcon"
  | "SearchIcon"
  | "PersonIcon"
  | "LockIcon"
  | "LockOpenIcon"
  | "VisibilityIcon"
  | "VisibilityOffIcon"
  | "FileCopyIcon"
  | "FormatListBulletedIcon"
  | "CloudUploadIcon"
  | "CloudDownloadIcon"
  | "ErrorIcon"
  | "InfoIcon"
  | "HelpIcon"
  | "LinkIcon"
  | "ShareIcon"
  | "GitHubIcon"
  | "TwitterIcon"
  | "FacebookIcon"
  | "LinkedInIcon"
  | "InstagramIcon"
  | "MailIcon"
  | "PhoneInTalkIcon"
  | "LogoutIcon"
  | "LoginIcon"
  | "DashboardIcon"
  | "CalendarTodayIcon"
  | "AlarmIcon"
  | "BookmarkIcon"
  | "EditIcon"
  | "CheckCircleIcon"
  | "CloseIcon"
  | "WarningIcon"
  | "MoreVertIcon"
  | "MenuOpenIcon"
  | "HomeIcon"
  | "AddCircleIcon"
  | "RemoveCircleIcon"
  | "BuildCircleIcon"
  | "BuildSharpIcon"
  | "CodeSharpIcon"
  | "DesktopWindowsIcon"
  | "DevicesIcon"
  | "LanguageIcon"
  | "LocalLibraryIcon"
  | "MapsHomeWorkIcon";

const iconMapping: Record<IconName, JSX.Element> = {
  CodeIcon: <CodeIcon className="text-[30px] text-primary" />,
  BuildIcon: <BuildIcon className="text-[30px] text-primary" />,
  ComputerIcon: <ComputerIcon className="text-[30px] text-primary" />,
  PhoneIcon: <PhoneIcon className="text-[30px] text-primary" />,
  TabletIcon: <TabletIcon className="text-[30px] text-primary" />,
  DesktopMacIcon: <DesktopMacIcon className="text-[30px] text-primary" />,
  StorageIcon: <StorageIcon className="text-[30px] text-primary" />,
  BugReportIcon: <BugReportIcon className="text-[30px] text-primary" />,
  PaletteIcon: <PaletteIcon className="text-[30px] text-primary" />,
  SettingsIcon: <SettingsIcon className="text-[30px] text-primary" />,
  FolderIcon: <FolderIcon className="text-[30px] text-primary" />,
  ExtensionIcon: <ExtensionIcon className="text-[30px] text-primary" />,
  WebIcon: <WebIcon className="text-[30px] text-primary" />,
  MenuIcon: <MenuIcon className="text-[30px] text-primary" />,
  DescriptionIcon: <DescriptionIcon className="text-[30px] text-primary" />,
  DeveloperModeIcon: <DeveloperModeIcon className="text-[30px] text-primary" />,
  AddIcon: <AddIcon className="text-[30px] text-primary" />,
  RemoveIcon: <RemoveIcon className="text-[30px] text-primary" />,
  SearchIcon: <SearchIcon className="text-[30px] text-primary" />,
  PersonIcon: <PersonIcon className="text-[30px] text-primary" />,
  LockIcon: <LockIcon className="text-[30px] text-primary" />,
  LockOpenIcon: <LockOpenIcon className="text-[30px] text-primary" />,
  VisibilityIcon: <VisibilityIcon className="text-[30px] text-primary" />,
  VisibilityOffIcon: <VisibilityOffIcon className="text-[30px] text-primary" />,
  FileCopyIcon: <FileCopyIcon className="text-[30px] text-primary" />,
  FormatListBulletedIcon: <FormatListBulletedIcon className="text-[30px] text-primary" />,
  CloudUploadIcon: <CloudUploadIcon className="text-[30px] text-primary" />,
  CloudDownloadIcon: <CloudDownloadIcon className="text-[30px] text-primary" />,
  ErrorIcon: <ErrorIcon className="text-[30px] text-primary" />,
  InfoIcon: <InfoIcon className="text-[30px] text-primary" />,
  HelpIcon: <HelpIcon className="text-[30px] text-primary" />,
  LinkIcon: <LinkIcon className="text-[30px] text-primary" />,
  ShareIcon: <ShareIcon className="text-[30px] text-primary" />,
  GitHubIcon: <GitHubIcon className="text-[30px] text-primary" />,
  TwitterIcon: <TwitterIcon className="text-[30px] text-primary" />,
  FacebookIcon: <FacebookIcon className="text-[30px] text-primary" />,
  LinkedInIcon: <LinkedInIcon className="text-[30px] text-primary" />,
  InstagramIcon: <InstagramIcon className="text-[30px] text-primary" />,
  MailIcon: <MailIcon className="text-[30px] text-primary" />,
  PhoneInTalkIcon: <PhoneInTalkIcon className="text-[30px] text-primary" />,
  LogoutIcon: <LogoutIcon className="text-[30px] text-primary" />,
  LoginIcon: <LoginIcon className="text-[30px] text-primary" />,
  DashboardIcon: <DashboardIcon className="text-[30px] text-primary" />,
  CalendarTodayIcon: <CalendarTodayIcon className="text-[30px] text-primary" />,
  AlarmIcon: <AlarmIcon className="text-[30px] text-primary" />,
  BookmarkIcon: <BookmarkIcon className="text-[30px] text-primary" />,
  EditIcon: <EditIcon className="text-[30px] text-primary" />,
  CheckCircleIcon: <CheckCircleIcon className="text-[30px] text-primary" />,
  CloseIcon: <CloseIcon className="text-[30px] text-primary" />,
  WarningIcon: <WarningIcon className="text-[30px] text-primary" />,
  MoreVertIcon: <MoreVertIcon className="text-[30px] text-primary" />,
  MenuOpenIcon: <MenuOpenIcon className="text-[30px] text-primary" />,
  HomeIcon: <HomeIcon className="text-[30px] text-primary" />,
  AddCircleIcon: <AddCircleIcon className="text-[30px] text-primary" />,
  RemoveCircleIcon: <RemoveCircleIcon className="text-[30px] text-primary" />,
  BuildCircleIcon: <BuildCircleIcon className="text-[30px] text-primary" />,
  BuildSharpIcon: <BuildSharpIcon className="text-[30px] text-primary" />,
  CodeSharpIcon: <CodeSharpIcon className="text-[30px] text-primary" />,
  DesktopWindowsIcon: <DesktopWindowsIcon className="text-[30px] text-primary" />,
  DevicesIcon: <DevicesIcon className="text-[30px] text-primary" />,
  LanguageIcon: <LanguageIcon className="text-[30px] text-primary" />,
  LocalLibraryIcon: <LocalLibraryIcon className="text-[30px] text-primary" />,
  MapsHomeWorkIcon: <MapsHomeWorkIcon className="text-[30px] text-primary" />,
};
export const TextToIcon = ({
  text,
  size,
}: {
  text: IconName;
  size?: "small" | "medium" | "large";
}) => {
  return (
    iconMapping[text] || (
      <CategoryIcon fontSize={size} className="text-primary" />
    )
  );
};

// export const  TextToIcon = ({text,size}:{text:string,size?:"small"|"medium"|"large"}) => {
//     return iconMapping[text] || <CategoryIcon fontSize={size} className="text-primary" />;
// }
