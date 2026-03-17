/**
 * pages.config.js - Page routing configuration
 *
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 *
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 *
 * Example file structure:
 *
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 *
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import DemoBranding from "./pages/DemoBranding";
import DemoCRM from "./pages/DemoCRM";
import DemoChat from "./pages/DemoChat";
import DemoCollab from "./pages/DemoCollab";
import DemoDevOps from "./pages/DemoDevOps";
import DemoEcommerce from "./pages/DemoEcommerce";
import DemoPackaging from "./pages/DemoPackaging";
import DemoSocialMedia from "./pages/DemoSocialMedia";
import Portfolio from "./pages/Portfolio";
import DemoPoster from "./pages/DemoPoster";
import DemoUIKit from "./pages/DemoUIKit";
import DemoIlustraciones from "./pages/DemoIlustraciones";

export const PAGES = {
  DemoBranding: DemoBranding,
  DemoCRM: DemoCRM,
  DemoChat: DemoChat,
  DemoCollab: DemoCollab,
  DemoDevOps: DemoDevOps,
  DemoEcommerce: DemoEcommerce,
  DemoPackaging: DemoPackaging,
  DemoSocialMedia: DemoSocialMedia,
  Portfolio: Portfolio,
  DemoPoster: DemoPoster,
  DemoUIKit: DemoUIKit,
  DemoIlustraciones: DemoIlustraciones,
};

export const pagesConfig = {
  mainPage: "Portfolio",
  Pages: PAGES,
};
