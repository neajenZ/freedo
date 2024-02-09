import {Route, Routes} from "react-router-dom";
import Layout from "src/app/layout/layout.tsx";
import {MainPage} from "src/pages/main";
import {NotFoundPage} from "src/pages/not-found-page";
import {RecoverPassPage} from "src/pages/recover-pass";
import {ProfilePage} from "src/pages/profile";
import {AuthPage} from "src/pages/auth";
import {AdPage} from "src/pages/ad";
import {CreateAdPage} from "src/pages/create-ad";

const App = () => {

  return (
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route path={'/'} element={<MainPage /> } />
          <Route path={'/recover-pass'} element={<RecoverPassPage /> } />
          <Route path={'/profile'} element={<ProfilePage /> } />
          <Route path={'/auth'} element={<AuthPage /> } />
          <Route path={'/ad'} element={<AdPage /> } />
            <Route path={'/create-ad'} element={<CreateAdPage /> } />
        </Route>
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
      )

  ;
};

export default App;
