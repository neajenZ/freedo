import styles from "./header.module.scss";
import {useNavigate} from "react-router-dom";
import { useState} from "react";
import {Avatar, IconButton} from "@mui/material";
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {changeRole, changeTypeAuth} from "src/shared/slice/user-slice.ts";
import {UserDropdown} from "src/components/user-dropdown/ui/user-dropdown.tsx";
import {usePopupClosed} from "src/shared/hooks/usePopupClosed.ts";
import {useTranslation} from "react-i18next";
import {Logotype} from "src/shared/ui/logo/logo.tsx";
import {SearchIco} from "src/shared/ui/icons/SearchIco.tsx";


// РЕФАКТОР ПИЗДЕЦА
const Header = () => {

    const dispatch = useAppDispatch()
    const { t, i18n } = useTranslation()
    const {userSlice} = useAppSelector(state => state)
    const [isBurgerMenu, setBurgerMenu] = useState(false)
    const userWidjet = usePopupClosed(true)
    const navigate = useNavigate()

    const selectLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const toAuthPage = (type: 'login' | 'register') => {
        navigate('/auth')
        dispatch(changeTypeAuth(type))
    }

    return (
      <header className={styles.header}>
          <div className="container">
              <div ref={userWidjet.ref} className={styles.wrapper}>
                          <button
                              onClick={() => setBurgerMenu(true)}
                              className={styles.burgerBtn}
                          >
                          </button>

                  {
                      isBurgerMenu && (
                          <div className={styles.burgerMenu}>
                              <button
                                  onClick={() => setBurgerMenu(false)}
                                  className={styles.burgerBtnClosed}>

                              </button>
                              Navigate menu
                          </div>
                      )
                  }

                  <Logotype />

                  <div className={styles.inputBody}>
                      <input placeholder={`${t('inputSearch')}`} type="text"/>
                      <button>
                          <SearchIco />
                      </button>
                  </div>

                  <div className={styles.selectLanguageWrapper}>
                      <button onClick={() => selectLanguage('ru')}>ru</button>
                      <button onClick={() => selectLanguage('en')}>en</button>
                  </div>

                  <div className={styles.buttonsWrapper}>
                      {
                          !userSlice.isAuth ?
                              <>
                                  <button onClick={() => toAuthPage('login')} className={styles.authBtn}>{t("loginBtn")}</button>
                                  <button onClick={() => toAuthPage('register')} className={`${styles.authBtn} ${styles.regBtn}`}>{t("regBtn")}</button>
                              </> : window.innerWidth <= 480 ?
                              <>
                                  <IconButton
                                      onClick={() => userWidjet.setIsComponentVisible(!userWidjet.isComponentVisible)}
                                  >
                                      <Avatar
                                          sx={{border: `1px solid black`}}
                                      />
                                  </IconButton>
                              </> :
                                  <>
                                      <button
                                          onClick={() => dispatch(changeRole("customer"))}
                                          className={`${styles.roleBtn} ${userSlice.role === 'customer' && styles.active}`}
                                      >
                                          Заказчик
                                      </button>

                                      <button
                                          onClick={() => dispatch(changeRole("executor"))}
                                          className={`${styles.roleBtn} ${userSlice.role === 'executor' && styles.active}`}
                                      >
                                          Исполнитель
                                      </button>

                                      <IconButton
                                          onClick={() => userWidjet.setIsComponentVisible(!userWidjet.isComponentVisible)}
                                      >
                                          <Avatar
                                              sx={{border: `1px solid black`}}
                                          />
                                      </IconButton>
                                  </>
                      }
                  </div>
                  {
                      userWidjet.isComponentVisible &&
                      <UserDropdown
                          id={'harygoter'}
                          name={'Alexina'}
                          lastname={'Miro'}
                      />
                  }
              </div>
          </div>
      </header>
  );
};

export default Header;
