import Dashboard from "views/Dashboard.js";
import Feemanagement from "./components/feemanagement/managment";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/signup";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/fee-managment",
    name: "Fee management",
    icon: "nc-icon nc-circle-09",
    component: Feemanagement,
    layout: "/admin"
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/Login",
    name: "Login",
    icon: "nc-icon nc-pin-3",
    component: Login,
    layout: "/admin"
  },
  {
    path: "/Signup",
    name: "Signup",
    icon: "nc-icon nc-bell-55",
    component: Signup,
    layout: "/admin"
  }
];

export default dashboardRoutes;
