import CountryPage from "./pages/CountryPage";
import HomePage from "./pages/HomePage";
import { COUNTRY_ROUTE, HOME_ROUTE } from "./utils/consts";

export const routers = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: COUNTRY_ROUTE + '/:id',
    Component: CountryPage,
  }
]