import React, { Suspense } from 'react';
import {BrowserRouter,  Routes,  Route} from "react-router-dom";
import appRoutes from './routes' 

//Layout
import DashboardLayoutMain from "./views/layout/dashboardlayout/DashboardLayoutMain";
import SiteLayoutMain from "./views/layout/sitelayout/SiteLayoutMain";
import FullPageLayoutMain from "./views/layout/fullpagelayout/FullPageLayoutMain";

//Context
import DashboardThemeProvider from './views/layout/dashboardlayout/context/DashboardThemeProvider';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<DashboardThemeProvider><DashboardLayoutMain /></DashboardThemeProvider>}>
            {appRoutes.dashboard.map((item, index)=>(
              <Route path={item.path} exact element={<Suspense fallback={<div>Loading...</div>}><item.content /></Suspense>} key={`DashboardLayoutMain-${index}`} />
            ))}
          </Route>
          <Route element={<SiteLayoutMain />} >
            {appRoutes.site.map((item, index)=>(
              <Route path={item.path} exact element={<Suspense fallback={<div>Loading...</div>}><item.content /></Suspense>} key={`SiteLayoutMain-${index}`} />
            ))}
          </Route>
          <Route element={<FullPageLayoutMain />} >
            {appRoutes.fullPAge.map((item, index)=>(
              <Route path={item.path} exact element={<Suspense fallback={<div>Loading...</div>}><item.content /></Suspense>} key={`FullPageLayoutMain-${index}`} />
            ))}
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
