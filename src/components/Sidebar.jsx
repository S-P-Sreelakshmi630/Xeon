import { Link } from "react-router-dom";
import { sidebarLinks } from "/constants/index";

const Sidebar = () => {
  const pathname = window.location.pathname;
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          to="/"
          className="mb-12 flex cursor-pointer items-center
          gap-2"
        >
          <img
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
            className="size-[24px] 
              max-xl:size-14 "
          />
          <h1 className="sidebar-logo">Xeon</h1>
        </Link>
        {sidebarLinks.map((links) => {
          const isActive =
            pathname === links.route || pathname.startsWith(`${links.route}/`);
          return (
            <Link
              to={links.route}
              key={links.label}
              className={
                isActive ? "bg-bank-gradient sidebar-link" : "sidebar-link"
              }
            >
              <div className="relative size-6">
                <img
                  src={links.imgURL}
                  alt={links.label}
                  className={isActive && "brightness-[3] invert-0"}
                />
              </div>
              <p
                className={
                  isActive
                    ? "sidebar-label text-white"
                    : "sidebar-label  black font-inter"
                }
              >
                {links.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
};

export default Sidebar;
