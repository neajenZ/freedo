import {Route, Routes} from "react-router-dom";
import Layout from "src/app/layout/layout.tsx";
import {MainPage} from "src/pages/main";
import {NotFoundPage} from "src/pages/not-found-page";
import {RecoverPassPage} from "src/pages/recover-pass";
import {ProfilePage} from "src/pages/profile";
import {AuthPage} from "src/pages/auth";
import {AdPage} from "src/pages/ad";
import {CreateAdPage} from "src/pages/create-ad";
import {useEffect} from "react";
import Cookies from "js-cookie";
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import api from "src/app/api/api.ts";
import {setUserData} from "src/shared/slice/user-slice.ts";

const App = () => {
    const {userSlice} = useAppSelector(state => state)
    const dispatch = useAppDispatch()
    useEffect(() => {
        const getUserData = () => {
            if (Cookies.get('accessToken')) {
                api.user.data()
                    .then((res) => {
                        dispatch(setUserData(res.data))
                    })
                    .catch((e) => {
                        if (e.response.status === 401) {
                            api.user.updateToken()
                                .then((res) => {
                                    return getUserData()
                                })
                                .catch((e) => {
                                    console.log('error update token', e)
                                })
                        }
                    })
            }
        }

        getUserData()

    }, []);

    // useEffect(() => {
    //     if (userSlice.isUpdateToken) dispatch(getUpdatedToken({refresh_token: Cookies.get('refreshToken')}))
    // }, [userSlice.isUpdateToken]);

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
