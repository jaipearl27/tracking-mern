import {
  FaBullhorn,
  FaCogs,
  FaFileContract,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaGift,
  FaStore,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";
import {
  MdLibraryBooks,
  MdOutlineDashboardCustomize,
  MdPhotoLibrary,
  MdReport,
  MdWork,
} from "react-icons/md";

export const navLinksData = [
  {
    text: "Home",
    icon: <MdOutlineDashboardCustomize size={20} />,
    to: "/impact",
  },
  {
    text: "Account",
    icon: <FaUserCircle size={20} />,
    to: "/impact/account",
  },
  {
    text: "Ads",
    icon: <FaBullhorn size={20} />,
    to: "/impact/ads",
  },
  {
    text: "Catalogs",
    icon: <MdLibraryBooks size={20} />,
    to: "/impact/catalogs",
  },
  //   {
  //     text: "Click Details",
  //     icon: <MdOutlineDashboardCustomize size={20} />,
  //     to: "/click-details",
  //   },
  {
    text: "Contracts",
    icon: <FaFileContract size={20} />,
    to: "/impact/contract",
  },
  {
    text: "Invoices",
    icon: <FaFileInvoice size={20} />,
    to: "/impact/invoices",
  },
  {
    text: "Jobs",
    icon: <MdWork size={20} />,
    to: "/impact/jobs",
  },
  {
    text: "Media Properties",
    icon: <MdPhotoLibrary size={20} />,
    to: "/impact/media-properties",
  },
  {
    text: "Campaigns",
    icon: <FaBullhorn size={20} />,
    to: "/impact/programs",
  },
  {
    text: "Promotions",
    icon: <FaGift size={20} />,
    to: "/impact/promotions",
  },
  {
    text: "Reports",
    icon: <MdReport size={20} />,
    to: "/impact/report",
  },
  {
    text: "Stores",
    icon: <FaStore size={20} />,
    to: "/impact/stores",
  },
  {
    text: "Tax Documents",
    icon: <FaFileInvoiceDollar size={20} />,
    to: "/impact/tax-documents",
  },
  {
    text: "Users",
    icon: <FaUsers size={20} />,
    to: "/impact/users",
  },
  {
    text: "Withdrawal Settings",
    icon: <FaCogs size={20} />,
    to: "/impact/withdrawal-settings",
  },
];
