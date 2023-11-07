import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { TbSortAscendingNumbers } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  let isRadarMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();
  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "Radar",
      icon: RiBuilding3Line,
      menus: [
        "Coherent radar",
        "non-coherent radar",
        "radar formula",
        "radar bands",
        "Three Stages",
        "Estimate",
        "α-β-Γ filter",
        "Doppler Effects",
        "Normal Distribution Law",
      ],
    },
    {
      name: "Map",
      icon: TbReportAnalytics,
      menus: [
        "Meridian",
        "Sphere Level",
        "Earth-Sun",
        "Earth-Moon",
        "View moon from earth",
        "Length of daylight",
      ],
    },
    {
      name: "Network",
      icon: TbReportAnalytics,
      menus: ["7 Layers", "Switch", "Router", "IP Address"],
    },
    {
      name: "Electric",
      icon: TbReportAnalytics,
      menus: [
        "Current",
        "AC/DC,Voltage",
        "Watt, Ampere",
        "Capacitor, Resistor",
        "Tesla",
      ],
    },
    {
      name: "Computer",
      icon: TbReportAnalytics,
      menus: [
        "OS",
        "Platform",
        "USB",
        "RAID",
        "Controller",
        "BUS",
        "Bridge",
        "Processors",
        "Microprocessor",
        "LINUX",
      ],
    },
    {
      name: "Communication",
      icon: TbReportAnalytics,
      menus: ["Radio relay", "Telephone"],
    },
    {
      name: "Calculation",
      icon: TbReportAnalytics,
      menus: ["Oil", "Car", "Aircraft"],
    },
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className=" flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img
            className=" ml-3"
            src="https://www.12knights.team/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTknightsLogo.dc3876df.png&w=1920&q=75"
            width={20}
            alt=""
          />
          <span className="text-xl whitespace-pre ml-3">12Knights</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            {(open || isTabletMid) && (
              // py-2 border-slate-300 
              <div className="">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  {/* Product categories */}
                </small>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}

            <li className="">
              <NavLink to={"/"} className="link">
                <TbSortAscendingNumbers
                  size={20}
                  className="min-w-max text-green-500"
                />
                <span className=" text-xs">Number System</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/iff"} className="link">
                <SlSettings size={20} className="min-w-max" />
                <span className=" text-xs">IFF</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to={"/settings"} className="link">
                <SlSettings size={20} className="min-w-max" />
                <span className=" text-xs">Settings</span>
              </NavLink>
            </li>
          </ul>
          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
