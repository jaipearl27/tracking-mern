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
    to: "/account",
  },
  {
    text: "Assignments",
    icon: <FaUserCircle size={20} />,
    to: "/impact/assignments",
  },
  // {
  //   text: "Ads",
  //   icon: <FaBullhorn size={20} />,
  //   to: "/impact/ads",
  // },
  // {
  //   text: "Catalogs",
  //   icon: <MdLibraryBooks size={20} />,
  //   to: "/impact/catalogs",
  // },
  // //   {
  // //     text: "Click Details",
  // //     icon: <MdOutlineDashboardCustomize size={20} />,
  // //     to: "/click-details",
  // //   },
  // {
  //   text: "Contracts",
  //   icon: <FaFileContract size={20} />,
  //   to: "/impact/contract",
  // },
  // {
  //   text: "Invoices",
  //   icon: <FaFileInvoice size={20} />,
  //   to: "/impact/invoices",
  // },
  // {
  //   text: "Jobs",
  //   icon: <MdWork size={20} />,
  //   to: "/impact/jobs",
  // },
  // {
  //   text: "Media Properties",
  //   icon: <MdPhotoLibrary size={20} />,
  //   to: "/impact/media-properties",
  // },
  // {
  //   text: "Campaigns",
  //   icon: <FaBullhorn size={20} />,
  //   to: "/impact/programs",
  // },
  // {
  //   text: "Promotions",
  //   icon: <FaGift size={20} />,
  //   to: "/impact/promotions",
  // },
  // {
  //   text: "Reports",
  //   icon: <MdReport size={20} />,
  //   to: "/impact/report",
  // },
  // {
  //   text: "Stores",
  //   icon: <FaStore size={20} />,
  //   to: "/impact/stores",
  // },
  // {
  //   text: "Tax Documents",
  //   icon: <FaFileInvoiceDollar size={20} />,
  //   to: "/impact/tax-documents",
  // },
  // {
  //   text: "Users",
  //   icon: <FaUsers size={20} />,
  //   to: "/impact/users",
  // },
  // {
  //   text: "Withdrawal Settings",
  //   icon: <FaCogs size={20} />,
  //   to: "/impact/withdrawal-settings",
  // },
];



export const adminNavLinksData = [
  {
    text: "Home",
    icon: <MdOutlineDashboardCustomize size={20} />,
    to: "/admin",
  },
  {
    text: "Users",
    icon: <FaUsers size={20} />,
    to: "/admin/users",
  },

  {
    text: "Impact",
    icon: <FaBullhorn size={20} />,
    subLinks: [
      { text: "Profile", to: "/admin/impact/profile" },
      { text: "Programs", to: "/admin/impact/programs" },
      { text: "Ads", to: "/admin/impact/ads" },
      { text: "Catalogs", to: "/admin/impact/catalogs" },
      { text: "Contract", to: "/admin/impact/contract" },
      { text: "Invoices", to: "/admin/impact/invoices" },
      { text: "Jobs", to: "/admin/impact/jobs" },
      { text: "Media Properties", to: "/admin/impact/media-properties" },
      { text: "Promotions", to: "/admin/impact/promotions" },
      { text: "Reports", to: "/admin/impact/report" },
      { text: "Stores", to: "/admin/impact/stores" },
      { text: "Tax Documents", to: "/admin/impact/tax-documents" },
      { text: "Withdrawal Settings", to: "/admin/impact/withdrawal-settings" }
    ]
  },
<<<<<<< HEAD

=======
  {
    text: "Partnerize",
    icon: <FaBullhorn size={20} />,
    subLinks: [
      { text: "Campaign", to: "/admin/partnerize/campaign" },
      {text: "Conversions", to: "/admin/partnerize/conversions"},
      {text: "Conversions-Summary", to: "/admin/partnerize/conversions-summary"},
      {text: "Creatives", to: "/admin/partnerize/creatives"},
      {text: "Performance", to: "/admin/partnerize/performance"},
      {text: "Transaction-Queries", to: "/admin/partnerize/transaction-queries"},
      {text: "Transaction-Reports", to: "/admin/partnerize/transaction-reports"},
    ]
  },
>>>>>>> 3ac1c1ccc945670f4c5bc1755dab84a9d258760b
];
