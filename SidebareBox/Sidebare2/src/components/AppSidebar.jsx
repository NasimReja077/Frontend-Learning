import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
} from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";

// 🔥 NAV ITEMS
const NAV_ITEMS = [
  {
    label: "All saves",
    to: "/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Favorites",
    to: "/favorites",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61..." />
      </svg>
    ),
  },
  {
    label: "Graph",
    to: "/graph",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
      </svg>
    ),
  },
  {
    label: "Archive",
    to: "/archive",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="21 8 21 21 3 21 3 8" />
      </svg>
    ),
  },
  {
    label: "Clusters",
    to: "/clusters",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l9 4.9V17.1l-9 4.9l-9-4.9V6.9L12 2z" />
      </svg>
    ),
  },
];

const AppSidebar = ({
  user,
  collections = [],
  tags = [],
  colLoading,
  tagLoading,
  logout,
}) => {
  return (
    <Sidebar
      width="260px"
      backgroundColor="#020617"
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          borderRight: "1px solid #0f172a",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* 🔥 LOGO */}
      <div className={styles.logoWrap}>
        <h2>Requiem</h2>
      </div>

      {/* 🔥 NAV */}
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            backgroundColor: active ? "#0f172a" : "transparent",
            color: active ? "#fff" : "#94a3b8",
            borderRadius: "10px",
            margin: "6px 10px",
            padding: "10px",
          }),
        }}
      >
        {NAV_ITEMS.map((item) => (
          <MenuItem
            key={item.to}
            icon={item.icon}
            component={<NavLink to={item.to} />}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      {/* 🔥 COLLECTIONS */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>COLLECTIONS</div>

        {colLoading ? (
          <div className={styles.empty}>Loading...</div>
        ) : collections.length === 0 ? (
          <div className={styles.empty}>No collections</div>
        ) : (
          <Menu>
            {collections.map((col) => (
              <MenuItem
                key={col._id}
                component={<NavLink to={`/collections/${col._id}`} />}
                icon={<span>{col.emoji}</span>}
                suffix={<span className={styles.count}>{col.saveCount}</span>}
              >
                {col.name}
              </MenuItem>
            ))}
          </Menu>
        )}
      </div>

      {/* 🔥 TAGS */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>TAGS</div>

        {tagLoading ? (
          <div className={styles.empty}>Loading...</div>
        ) : tags.length === 0 ? (
          <div className={styles.empty}>No tags</div>
        ) : (
          <div className={styles.tagsList}>
            {tags.map((tag) => (
              <NavLink
                key={tag._id}
                to={`/tags/${tag._id}`}
                className={styles.tagItem}
              >
                <span
                  className={styles.dot}
                  style={{ background: tag.color }}
                />
                <span>{tag.name}</span>
                <span className={styles.count}>{tag.saveCount}</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>

      {/* 🔥 USER */}
      <div className={styles.bottom}>
        <NavLink to="/settings" className={styles.userRow}>
          <div className={styles.avatar}>
            {user?.avatar ? (
              <img src={user.avatar} alt="avatar" />
            ) : (
              user?.name?.charAt(0)
            )}
          </div>
          <span>{user?.name}</span>
        </NavLink>

        <button onClick={logout} className={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;