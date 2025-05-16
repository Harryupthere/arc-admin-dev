import React from "react";
import { Menu, SubMenu } from "react-pro-sidebar";
import { images } from "../../../utils/customFn";
import './menuitems.scss'
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileAndSetting from "../dashboardheader/profileandsetting";
import { FileIcon, HomeIcon, NotificationsIcon, SettingIcon, UserIcon, WalletFilled } from "../../../icons/icons";

const MenuItems = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const SidebarItems = [
    {
      name: 'Home',
      link: '/',
      imagepath: <HomeIcon />
    },
        {
      name: 'Admin List',
      link: '/admin-list',
      imagepath: <HomeIcon />
    },
        {
      name: 'Trades',
      link: '/trade-list',
      imagepath: <HomeIcon />
    },

            {
      name: 'Trading Account Type',
      link: '/trading-account-types',
      imagepath: <HomeIcon />
    },
    {
      name: 'Affiliate Lounge',
      link: '/lounge',
      imagepath: <FileIcon />
    },
    {
      name: 'User List',
      link: '/users',
      imagepath: <UserIcon />
    },
    {
      name: 'Wallet',
      link: '/wallet',
      imagepath: <WalletFilled />
    },
    {
      name: 'Updates',
      link: '/updates',
      imagepath: <NotificationsIcon />
    },

    {
      name: 'Settings',
      link: '#',
      imagepath: <SettingIcon />
    },

  ]

  // function handleNavigate(to) {
  //   navigate(to)
  // }
  return (
    <div className="sidebar-menus">
      <Link to="/">
        <div className="sidebarlogo">
          <img src={images['logo.png']} alt="logo" />
        </div>
      </Link>
      <div className="show-in-mobile">
        <ProfileAndSetting />
      </div>
      <Menu className="sidebar_icon_list ">
        {SidebarItems.map((item, index) => {
          // Check if the parent or any submenu link matches the current location
          const isActive = location.pathname === item.link;
          return (
            <SubMenu
              key={index}
              className={`${isActive ? 'active' : ''} main-menu-tab`}
              onClick={()=>navigate(item.link)}
              label={
                <div className="sidebar_label">
                  <div className="icon">
                    {item.imagepath}
                  </div>
                  <div className="name">
                    {item.name}
                  </div>
                </div>
              }
            >
            </SubMenu>
          );
        })}

      </Menu>
    </div>
  );
};

export default MenuItems;
