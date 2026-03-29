import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { BankaiBeatsPage } from "./pages/BankaiBeatsPage";
import { DarkCorePage } from "./pages/DarkCorePage";
import { PastEventsPage } from "./pages/PastEventsPage";
import { PartnerPage } from "./pages/PartnerPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "bankai-beats", Component: BankaiBeatsPage },
      { path: "darkcore", Component: DarkCorePage },
      { path: "past-events", Component: PastEventsPage },
      { path: "partner", Component: PartnerPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: HomePage },
    ],
  },
]);