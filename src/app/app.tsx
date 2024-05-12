import {Route, Routes} from "react-router-dom";
import Layout from "src/app/layout/layout.tsx";
import {MainPage} from "src/pages/main";
import {RecoverPassPage} from "src/pages/recover-pass";
import {ProfilePage} from "src/pages/profile";
import {AuthPage} from "src/pages/auth";
import {AdPage} from "src/pages/ad";
import {CreateAdPage} from "src/pages/create-ad";
import {useEffect} from "react";
import Cookies from "js-cookie";
import {useAppDispatch} from "src/shared/hooks/reduxHooks.ts";
import api from "src/app/api/api.ts";
import { setUserComments, setUserData } from "src/shared/slice/user-slice";
import {NotFoundPage} from "src/pages/not-found-page";

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const getUserData = async () => {
            if (Cookies.get('accessToken')) {

                await api.user.data()
                  .then((response) => {
                    dispatch(setUserData(response.data))
                    return response.data
                  })
                  .then(async (user) => {
                    await api.comments.getByUser(user.id)
                      .then((comments) => {
                        dispatch(setUserComments(comments.data))
                      })
                  })
            }
        }

        getUserData()
          
    }, []);


  return (
      <Routes>
        <Route path={'/'} element={<Layout />}>
            <Route path={'/'} element={<MainPage /> } />
            <Route path={'/recover-pass'} element={<RecoverPassPage /> } />
            <Route path={'/profile'} element={<ProfilePage /> } />
            <Route path={'/auth'} element={<AuthPage /> } />
            <Route path={'/ad/:id'} element={<AdPage /> } />
            <Route path={'/create-ad'} element={<CreateAdPage /> } />
        </Route>
        <Route path={''} element={<NotFoundPage />} />
      </Routes>
      )


};

export default App;
