import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaChartBar,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";

const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        collapsed={collapsed}
        width="250px"
        collapsedWidth="80px"
        backgroundColor="#0f172a"
      >
        {/* Toggle Button */}
        <Menu>
          <MenuItem
            icon={<FaBars />}
            onClick={() => setCollapsed(!collapsed)}
          >
            {!collapsed && "Menu"}
          </MenuItem>
        </Menu>

        {/* Main Menu */}
        <Menu
          menuItemStyles={{
            button: ({ active }) => ({
              backgroundColor: active ? "#1e293b" : "transparent",
              color: active ? "#38bdf8" : "#cbd5f5",
              borderRadius: "8px",
              margin: "5px",
            }),
          }}
        >
          <MenuItem
            icon={<FaHome />}
            component={<Link to="/" />}
            active={location.pathname === "/"}
          >
            Dashboard
          </MenuItem>

          <MenuItem
            icon={<FaUser />}
            component={<Link to="/profile" />}
            active={location.pathname === "/profile"}
          >
            Profile
          </MenuItem>

          <SubMenu icon={<FaChartBar />} label="Analytics">
            <MenuItem component={<Link to="/charts" />}>
              Charts
            </MenuItem>
            <MenuItem component={<Link to="/reports" />}>
              Reports
            </MenuItem>
          </SubMenu>

          <MenuItem
            icon={<FaShoppingCart />}
            component={<Link to="/ecommerce" />}
            active={location.pathname === "/ecommerce"}
          >
            E-Commerce
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;