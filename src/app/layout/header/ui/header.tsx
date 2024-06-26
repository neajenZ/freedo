import styles from "./header.module.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Avatar, IconButton} from "@mui/material";
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {changeRole} from "src/shared/slice/user-slice.ts";
import {UserDropdown} from "src/components/user-dropdown/ui/user-dropdown.tsx";
import {usePopupClosed} from "src/shared/hooks/usePopupClosed.ts";

const Header = () => {
  const dispatch = useAppDispatch()
    const {userSlice} = useAppSelector(state => state)
  const [isBurgerMenu, setBurgerMenu] = useState(false)
    const userWidjet = usePopupClosed(true)
  return (
      <header className={styles.header}>
          <div className="container">
              <div ref={userWidjet.ref} className={styles.wrapper}>
                  {
                      window.innerWidth < 576 ?
                          <button
                              onClick={() => setBurgerMenu(true)}
                              className={styles.burgerBtn}
                          >
                          </button>
                          : null
                  }
                  {
                      (isBurgerMenu && window.innerWidth < 576) && (
                          <div className={styles.burgerMenu}>
                              <button
                                  onClick={() => setBurgerMenu(false)}
                                  className={styles.burgerBtnClosed}>

                              </button>
                              Navigate menu
                          </div>
                      )
                  }
                  <Link to={'/'}>
                      <div className={styles.logo}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="164" height="80" viewBox="0 0 164 80" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M163.274 5.12249C163.274 1.99267 160.4 0 157.473 0H5.80074C2.87337 0 0 1.99267 0 5.12249V74.8775C0 78.0073 2.87337 80 5.80074 80H157.484C160.411 80 163.284 78.0073 163.284 74.8775V5.12249H163.274ZM102.782 50.088C102.782 65.1415 94.972 69.1918 80.6485 68.3796L61.7124 67.2966V12.6925L80.6485 11.6096C94.9828 10.7973 102.782 14.8585 102.782 29.9012V50.088ZM108.874 29.9012C108.874 15.9848 115.658 11.4904 129.398 11.4904C143.139 11.4904 149.922 15.9415 149.922 29.9012V50.088C149.922 64.0043 143.139 68.4987 129.398 68.4987C115.658 68.4987 108.874 64.0477 108.874 50.088V29.9012ZM138.342 29.9012V50.0555C138.418 51.7549 138.313 53.4576 138.029 55.1347C137.576 57.4523 136.949 58.6869 134.486 59.2717C131.136 59.8386 127.715 59.8386 124.365 59.2717C121.902 58.6869 121.264 57.4523 120.821 55.1347C120.539 53.4683 120.434 51.7766 120.508 50.088C120.508 43.3735 120.508 36.6554 120.508 29.9337C120.432 28.2342 120.537 26.5315 120.821 24.8545C121.275 22.5369 121.902 21.3023 124.365 20.7175C127.715 20.1507 131.136 20.1507 134.486 20.7175C136.949 21.3023 137.586 22.5369 138.029 24.8545C138.312 26.5208 138.417 28.2126 138.342 29.9012ZM36.9432 42.4854H55.6092V47.2181H42.4522V52.5572H54.4534V57.1924H42.4522V62.6073H55.5876V67.3399H36.9432V42.4854ZM30.8832 52.5788V57.214H18.8821V62.5748H32.0174V67.3074H13.3406V42.4854H32.0066V47.2181H18.8821V52.5788H30.8832ZM36.9432 12.7251L45.5848 12.2377C51.2667 11.9128 53.2867 12.7792 54.9611 16.4505C55.9029 19.0496 55.9029 21.898 54.9611 24.4971C53.9673 26.6631 52.8007 27.8868 50.8779 28.4175L56.0521 37.547H49.9165L45.5957 28.7099L42.4522 28.5474V37.5579H36.9432V12.7251ZM49.7113 18.3457C49.8988 19.7582 49.8988 21.1894 49.7113 22.6019C49.452 23.9339 49.2468 24.5946 45.1312 24.2913L42.4739 24.0964V16.8729L45.1312 16.6779C49.2468 16.3747 49.452 17.0353 49.7113 18.3674V18.3457ZM30.8832 27.3995H18.8497V37.547H13.3406V12.6384H32.0066V17.371H18.8497V22.7101H30.8832V27.3995ZM72.8277 20.8041C76.3816 20.5442 80.1948 20.1002 83.7379 20.1327C87.6914 20.1327 90.0139 20.5875 90.8456 24.8653C91.1283 26.5316 91.2333 28.2234 91.1589 29.912V50.0663C91.2348 51.7657 91.1298 53.4684 90.8456 55.1455C90.0139 59.4233 87.6914 59.8457 83.7379 59.8673C80.184 59.8673 76.3816 59.4558 72.8277 59.1959V20.8041Z" fill="#585DFB"/>
                          </svg>
                      </div>
                  </Link>
                  <div className={styles.inputBody}>
                      <input placeholder={'Введите текст для поиска'} type="text"/>
                      <button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M6.33365 11.6663L1 17M11 13C7.6863 13 5 10.3137 5 7C5 3.68629 7.6863 1 11 1C14.3137 1 17 3.68629 17 7C17 10.3137 14.3137 13 11 13Z" stroke="#262626" stroke-linecap="round"/>
                          </svg>
                      </button>
                  </div>

                  <div className={styles.buttonsWrapper}>
                      {/*<Link to={'/auth'}>*/}
                      {/*    <button className={styles.authBtn}>Войти</button>*/}
                      {/*</Link>*/}
                      {/*<button className={`${styles.authBtn} ${styles.regBtn}`}>Зарегистрироваться</button>*/}
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
