import MyAccountIcon from "@/app/(dashboard)/impact/(home_route)/_sections/Header/TopBar/icons/MyAccountIcon";
import PaymentsIcon from "@/app/(dashboard)/impact/(home_route)/_sections/Header/TopBar/icons/PaymentsIcon";
import ReportsIcon from "@/app/(dashboard)/impact/(home_route)/_sections/Header/TopBar/icons/ReportsIcon";
import ToolsIcon from "@/app/(dashboard)/impact/(home_route)/_sections/Header/TopBar/icons/ToolsIcon";
import ProgramsIcon from "@/components/icons/ProgramsIcon";

type MenuItems = {
  icon: React.JSX.Element;
  title: string;
}[];

export const topHamMenuItems: MenuItems = [
  {
    icon: <ProgramsIcon />,
    title: "Programs for you",
  },
  {
    icon: <ReportsIcon />,
    title: "Reports",
  },
  {
    icon: <ToolsIcon />,
    title: "Tools",
  },
  {
    icon: <PaymentsIcon />,
    title: "Payments",
  },
  {
    icon: <MyAccountIcon />,
    title: "My Account",
  },
];
