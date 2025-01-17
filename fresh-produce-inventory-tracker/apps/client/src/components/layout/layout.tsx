/* eslint-disable-next-line */
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  MdDashboard,
  MdOutlineInventory,
  MdOutlineTrendingDown,
  MdOutlineSettingsApplications,
  MdInventory2,
} from 'react-icons/md';
import Logo from '../logo/logo';
export interface LayoutProps {
  children;
}

const Links = [
  {
    name: 'Dashboard',
    icon: <MdDashboard className="text-black/60 group-active:text-white" />,
  },
  {
    name: 'Inventory',
    icon: (
      <MdOutlineInventory className="text-black/60 group-active:text-white" />
    ),
  },
  {
    name: 'Statistics',
    icon: (
      <MdOutlineTrendingDown className="text-black/60 group-active:text-white" />
    ),
  },
  {
    name: 'Settings',
    icon: (
      <MdOutlineSettingsApplications className="text-black/60 group-active:text-white" />
    ),
  },
];

export function Layout(props: LayoutProps) {



  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {props.children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="p-4 overflow-y-auto bg-white border-solid border-2 w-80 menu text-base-content">
          <div className="flex items-center mt-4 mb-5 h-fit">
            <Logo />
          </div>
          <div>
            <h1 className="mb-10 text-center font-bold">Fresh Produce Inverntory Tracker</h1>
          </div>
          {/* <!-- Sidebar content here --> */}
          {Links.map(({ name, icon }) => (
            <li key={name}>
              <Link
                href={`/${name === 'Dashboard' ? '/' : name.toLowerCase()}`}
                passHref
              >
                <div
                  className={`flex transition-all border-opacity-0 bg-blue-200 mb-2 hover:bg-red-300 border-primary group`}
                >
                  {icon}
                  <span className="font-semibold text-primary group-hover:text-primary group-active:text-white">
                    {' '}
                    {name}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Layout;
