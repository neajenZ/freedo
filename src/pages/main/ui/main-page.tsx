import { PublicationList } from "src/modules/publications";
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {
  PublicationListCustomers
} from "src/modules/publications/ui/publication-list-customers/ui/publication-list-customers.tsx";
import styles from './main-page.module.scss'
import {useEffect} from "react";
import {getPublications} from "src/shared/slice/Api/getPublications.ts";
import api from "src/app/api/api.ts";
import {setPublications} from "src/shared/slice/user-slice.ts";

const MainPage = () => {
  const {userSlice} = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  useEffect(() => {
    api.publications.get()
        .then((res) => {
            dispatch(setPublications(res.data))
        })
        .catch((e) => {
          console.log(e)
        })
  }, []);

  if (userSlice.isLoading === true) {
    return (
      <div className={styles.preloaderWrapper}>
        <img src="src/shared/assets/images/preloader.svg" alt=""/>
      </div>
    )
  }

  if (userSlice.role === 'customer') {
    return <PublicationList />
  }

  if (userSlice.role === 'executor') {
    return <PublicationListCustomers />
  }
};

export default MainPage;
