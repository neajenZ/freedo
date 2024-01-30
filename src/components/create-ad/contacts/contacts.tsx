import styles from './contacts.module.scss'
import {DeleteBasketIcon} from "src/shared/ui/icons/DeleteBasketIcon.tsx";
import {DropdownArrow} from "src/shared/ui/icons/DropdownArrow.tsx";

export const CreateAdContacts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.dropdownWrapper}>
                <span>Контакты</span>
                <div className={styles.dropdown}>
                    <h4>Выберите контакты</h4>
                    <DropdownArrow />
                </div>
                <p>Клиентам будет удобнее связаться с вами</p>
            </div>

            <div className={styles.socialsWrapper}>

                <div className={styles.socialItem}>
                    <h4>Viber</h4>
                    <input type="text" placeholder={'Ссылка на ваш профиль'}/>
                    <button>
                        <DeleteBasketIcon />
                    </button>
                </div>
                <div className={styles.socialItem}>
                    <h4>Vk</h4>
                    <input type="text" placeholder={'Ссылка на ваш профиль'}/>
                    <button>
                        <DeleteBasketIcon />
                    </button>
                </div>
                <div className={styles.socialItem}>
                    <h4>Telegram</h4>
                    <input type="text" placeholder={'Ссылка на ваш профиль'}/>
                    <button>
                        <DeleteBasketIcon />
                    </button>
                </div>

            </div>
        </div>
    )
}