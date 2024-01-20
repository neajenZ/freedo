import { PublicationList } from "src/modules/publications";
import {useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {
  PublicationListCustomers
} from "src/modules/publications/ui/publication-list-customers/ui/publication-list-customers.tsx";
import styles from './main-page.module.scss'

const MainPage = () => {
  const {userSlice} = useAppSelector(state => state)

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
