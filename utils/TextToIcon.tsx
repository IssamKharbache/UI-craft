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

export const TextToIcon = ({
  text,
  size,
  fontSize,
  className,
}: {
  text: IconName;
  fontSize?: number;
  size?: "small" | "medium" | "large";
  className?: string;
}) => {
  const iconMapping: Record<IconName, JSX.Element> = {
    CodeIcon: (
      <CodeIcon
         
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    BuildIcon: (
      <BuildIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    ComputerIcon: (
      <ComputerIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    PhoneIcon: (
      <PhoneIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    TabletIcon: (
      <TabletIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    DesktopMacIcon: (
      <DesktopMacIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    StorageIcon: (
      <StorageIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    BugReportIcon: (
      <BugReportIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    PaletteIcon: (
      <PaletteIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    SettingsIcon: (
      <SettingsIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    FolderIcon: (
      <FolderIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    ExtensionIcon: (
      <ExtensionIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    WebIcon: (
      <WebIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    MenuIcon: (
      <MenuIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    DescriptionIcon: (
      <DescriptionIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    DeveloperModeIcon: (
      <DeveloperModeIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    AddIcon: (
      <AddIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    RemoveIcon: (
      <RemoveIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    SearchIcon: (
      <SearchIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    PersonIcon: (
      <PersonIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    LockIcon: (
      <LockIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    LockOpenIcon: (
      <LockOpenIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    VisibilityIcon: (
      <VisibilityIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    VisibilityOffIcon: (
      <VisibilityOffIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    FileCopyIcon: (
      <FileCopyIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    FormatListBulletedIcon: (
      <FormatListBulletedIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    CloudUploadIcon: (
      <CloudUploadIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    CloudDownloadIcon: (
      <CloudDownloadIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    ErrorIcon: (
      <ErrorIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    InfoIcon: (
      <InfoIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    HelpIcon: (
      <HelpIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    LinkIcon: (
      <LinkIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    ShareIcon: (
      <ShareIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    GitHubIcon: (
      <GitHubIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    TwitterIcon: (
      <TwitterIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    FacebookIcon: (
      <FacebookIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    LinkedInIcon: (
      <LinkedInIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    InstagramIcon: (
      <InstagramIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    MailIcon: (
      <MailIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    PhoneInTalkIcon: (
      <PhoneInTalkIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    LogoutIcon: (
      <LogoutIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    LoginIcon: (
      <LoginIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    DashboardIcon: (
      <DashboardIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    CalendarTodayIcon: (
      <CalendarTodayIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    AlarmIcon: (
      <AlarmIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    BookmarkIcon: (
      <BookmarkIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    EditIcon: (
      <EditIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    CheckCircleIcon: (
      <CheckCircleIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    CloseIcon: (
      <CloseIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    WarningIcon: (
      <WarningIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    MoreVertIcon: (
      <MoreVertIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    MenuOpenIcon: (
      <MenuOpenIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    HomeIcon: (
      <HomeIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    AddCircleIcon: (
      <AddCircleIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),

    RemoveCircleIcon: (
      <RemoveCircleIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    BuildCircleIcon: (
      <BuildCircleIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    BuildSharpIcon: (
      <BuildSharpIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    CodeSharpIcon: (
      <CodeSharpIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    DesktopWindowsIcon: (
      <DesktopWindowsIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    DevicesIcon: (
      <DevicesIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    LanguageIcon: (
      <LanguageIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    LocalLibraryIcon: (
      <LocalLibraryIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
    MapsHomeWorkIcon: (
      <MapsHomeWorkIcon
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    ),
  };
  return (
    iconMapping[text] || (
      <CategoryIcon
        fontSize={size}
        sx={{ fontSize: fontSize }}
        className={`text-red-300 ${className}`}
      />
    )
  );
};

// export const  TextToIcon = ({text,size}:{text:string,size?:"small"|"medium"|"large"}) => {
//     return iconMapping[text] || <CategoryIcon fontSize={size} className=" />;
// }
