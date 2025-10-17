import userIcon from "./assets/Icons/user.svg";
import bagIcon from "./assets/Icons/Bag.svg";
import pdfIcon from "./assets/Icons/Document pdf.svg";
import gIcon from "./assets/Icons/Graduated.svg";
import tIcon from "./assets/Icons/Bank Card.svg";
import reportIcon from "./assets/Icons/Danger 3.svg";
import arrow from "./assets/Icons/arrow-up-right.svg";
import dashboard from "./assets/Icons/Grid interface - 11 (1).svg";
import clientIcon from "./assets/Icons/user.svg";
import teamIcon from "./assets/Icons/Bag.svg";
import workshopIcon from "./assets/Icons/Graduated.svg";
import reportsIcon from "./assets/Icons/Docuemtn 2 line edit.svg";
import transactionIcon from "./assets/Icons/Bank Card.svg";
import productIcon from "./assets/Icons/Docs.svg";
import menuIcon from "./assets/Icons/Activity.svg";
import settingIcon from "./assets/Icons/Setting.svg";
import supportIcon from "./assets/Icons/question mark.svg";
import addUsersIcon from "./assets/Icons/Add User.svg";
import profileIcon from "./assets/Icons/Profile.svg";
import dropdownIcon from "./assets/Icons/Dropdown.svg";
import redArrow from "./assets/Icons/Icon (2).svg";
import profilePicture from "./assets/Images/Avatar.svg";
import upgreenArrow from "./assets/Icons/arrow-up.svg";
import downredArrow from "./assets/Icons/arrow-down.svg";
import {
  ClientIcon,
  DashIcon,
  ProfileIcon,
  ReportIcon,
  TeamIcon,
  WorkshopIcon,
  TransactionIcon,
  ProductIcon,
  MenuIcon,
  SettingIcon,
  SupportIcon,
} from "./components/icon";
export const cards = [
  {
    icon: userIcon,
    title: "Total Registered Users",
    figure: "6,124",
    img: arrow,
    per: "100%",
  },
  {
    icon: bagIcon,
    title: "Total Workshops Hosted",
    figure: "812",
    img: arrow,
    per: "100%",
  },
  {
    icon: pdfIcon,
    title: "Total Products Published",
    figure: "2,139",
    img: arrow,
    per: "100%",
  },
  {
    icon: gIcon,
    title: "Total Workshops Hosted",
    figure: "318",
    img: arrow,
    per: "100%",
  },
  {
    icon: tIcon,
    title: "Pending Payout Requests",
    figure: "21",
    img: arrow,
    per: "100%",
  },
  {
    icon: reportIcon,
    title: "Active Reports",
    figure: "6",
    img: arrow,
    per: "100%",
  },
];
export const menuItems = [
  {
    icon: <DashIcon />,
    name: "Dashboard",
    to: "/",
  },
  {
    icon: <ClientIcon />,
    name: "Clients & Experts",
    to: "/clients",
  },
  {
    icon: <TeamIcon />,
    name: "Teams",
    to: "/teams",
  },
  {
    icon: <WorkshopIcon />,
    name: "Workshops",
    to: "/workshops",
  },
  {
    icon: <ReportIcon />,
    name: "Reports & Reviews",
    to: "/reports",
  },
  {
    icon: <TransactionIcon />,
    name: "Transactions",
    to: "/transactions",
  },
  {
    icon: <ProductIcon />,
    name: "Product Management",
    to: "/product",
  },
  {
    icon: <MenuIcon />,
    name: "Menu Title",
    to: "/menu",
  },
];
export const menuSettings = [
  {
    icon: <SettingIcon />,
    name: "Settings",
    to: "/settings",
  },
  {
    icon: <SupportIcon />,
    name: "Support & Tickets",
    to: "/support",
  },
];
export const users = [
  {
    name: "Rhiannon Matthaias",
    email: "rhimat@com",
    joinedDate: "Jan 16, 2025",
    status: "Client",
  },
  {
    name: "Dain Aetos",
    email: "dainaetos@com",
    joinedDate: "Jan 16, 2025",
    status: "Client",
  },
  {
    name: "Garrick Matthews",
    email: "garrick@com",
    joinedDate: "Jan 16, 2025",
    status: "Expert",
  },
];
export const purchases = [
  {
    name: "@emekaTech",
    product: "AI Startup Kit",
    type: "Template",
    amount: "₦40,000",
  },
  {
    name: "@sadeSparks",
    product: "AI Startup Kit",
    type: "Template",
    amount: "₦40,000",
  },
  {
    name: "@sadeSparks",
    product: "Pitch Mastery",
    type: "Template",
    amount: "₦50,000",
  },
];
export const clientCards = [
  {
    icon: userIcon,
    title: "Total Clients",
    menu: dropdownIcon,
    figure: "6,124",
    img: arrow,
    per: "100%",
  },
  {
    icon: addUsersIcon,
    title: "New Clients",
    menu: dropdownIcon,
    figure: "316",
    img: arrow,
    per: "100%",
  },
  {
    icon: profileIcon,
    title: "Active Clients",
    menu: dropdownIcon,
    figure: "2,420",
    img: redArrow,
    per: "100%",
  },
];
export const clients = [
  {
    pic: profilePicture,
    name: "Rhiannon Matthaias",
    email: "rhimat@com",
    bookingHistory: 23,
    joinedDate: "Jan 16, 2025",
    purchases: "₦280,000",
    status: "Suspended",
    menu: dropdownIcon,
  },
  {
    pic: profilePicture,
    name: "Dain Aetos",
    email: "dainaetos@com",
    bookingHistory: 21,
    joinedDate: "Jan 16, 2025",
    purchases: "₦280,000",
    status: "Active",
    menu: dropdownIcon,
  },
  {
    pic: profilePicture,
    name: "Garrick Matthews",
    email: "garrick@com",
    bookingHistory: 25,
    joinedDate: "Jan 16, 2025",
    purchases: "₦280,000",
    status: "Suspended",
    menu: dropdownIcon,
  },
  {
    pic: profilePicture,
    name: "Mira Sorrengail",
    email: "mirasorren@com",
    bookingHistory: 13,
    joinedDate: "Jan 16, 2025",
    purchases: "₦280,000",
    status: "Flagged",
    menu: dropdownIcon,
  },
  {
    pic: profilePicture,
    name: "Ridoc Davis",
    email: "ridocdav@com",
    bookingHistory: 12,
    joinedDate: "Jan 16, 2025",
    purchases: "₦280,000",
    status: "Flagged",
    menu: dropdownIcon,
  },
  {
    pic: profilePicture,
    name: "Liam Mairi",
    email: "liammairi@com",
    bookingHistory: 5,
    joinedDate: "Jan 16, 2025",
    purchases: "₦280,000",
    status: "Active",
    menu: dropdownIcon,
  },
  {
    pic: profilePicture,
    name: "Violet Sorrengail",
    email: "violetdrier@com",
    bookingHistory: 10,
    joinedDate: "Jan 16, 2025",
    purchases: "₦280,000",
    status: "Active",
    menu: dropdownIcon,
  },
];
export const experts = [
  {
    icon: userIcon,
    title: "Total Experts",
    menu: dropdownIcon,
    figure: "2,736",
    img: arrow,
    per: "100%",
  },
  {
    icon: userIcon,
    title: "Active Experts",
    menu: dropdownIcon,
    figure: "316",
    img: arrow,
    per: "100%",
  },
  {
    icon: userIcon,
    title: "Suspended Experts",
    menu: dropdownIcon,
    figure: "21",
    img: arrow,
    per: "100%",
  },
];
export const stats = [
  {
    title: "Total Spent",
    value: "₦63,500",
    icon: downredArrow,
    change: "100%",
  },
  {
    title: "Products Purchased",
    value: "12",
    icon: upgreenArrow,
    change: "100%",
  },
  {
    title: "Workshops Attended",
    value: "5",
    icon: upgreenArrow,
    change: "100%",
  },
  {
    title: "Sessions Booked",
    value: "3",
    icon: upgreenArrow,
    change: "100%",
  },
];
export const clientPurchases = [
  {
    title: "Freelance Toolkit",
    type: "Template",
    seller: "@SmartStrategy",
    date: "Apr 12, 2023",
    time: "| 09:32AM",
    price: "₦5,000",
    status: "Delivered",
    action: "View",
    secondActions: "Download",
  },
  {
    title: "Launch Checklist Video",
    type: "Video",
    seller: "@TemplateKing",
    date: "Apr 12, 2023",
    time: "| 09:32AM",
    price: "₦5,000",
    status: "Delivered",
    action: "View",
    secondActions: "Download",
  },
  {
    title: "Branding Guide",
    type: "eBook",
    seller: "@DesignBoss",
    date: "Apr 12, 2023",
    time: "| 09:32AM",
    price: "₦5,000",
    status: "Delivered",
    action: "View",
    secondActions: "Download",
  },
];
export const consultations = [
  {
    title: "Intro to UX",
    type: "@SmartStrategy",
    date: "May 30, 2025 | 09: 32AM",
    price: "₦5,000",
    rating: 4.6,
    status: "Completed",
    action: "View",
    secondActions: "Review",
  },
  {
    title: "Launch Checklist Video",
    type: "@TemplateKing",
    date: "June 5, 2025 | 09: 32AM",
    price: "₦5,000",
    rating: "-",
    status: "Due",
    action: "View",
    secondActions: "Rebook",
  },
  {
    title: "Pricing Masterclass",
    type: "@DesignBoss",
    date: "Apr 12, 2023 | 09: 32AM",
    price: "₦5,000",
    rating: "-",
    status: "Expired",
    action: "View",
    secondActions: "Review",
  },
];
