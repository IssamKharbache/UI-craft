"use client";
import ContentArea from '@/components/dashboard/ContentArea'
import AddProjectModal from '@/components/dashboard/main/projects/AddProjectModal';
import IconsModal from '@/components/dashboard/main/projects/IconsModal';
import { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export interface SelectedIcon {
  icon:React.ReactNode;
  name:string;
}
const DahboardPage = () => {
  const [selectedIcon, setSelectedIcon] = useState<SelectedIcon>({
    icon: <IoIosAdd  size={25}/>,
    name: "New Project",
  });
  
  function getIconSelected(icon: SelectedIcon) {
    setSelectedIcon({icon:icon.icon,name:icon.name});
  }
  return (
  <>
    <AddProjectModal selectedIcon={selectedIcon} />
    <IconsModal onUpdateIconSelected={getIconSelected} />
   <ContentArea />
  </>
  )
}

export default DahboardPage;



