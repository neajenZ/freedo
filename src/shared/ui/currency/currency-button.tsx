import styles from './currency.module.scss'
import {DropdownArrow} from "src/shared/ui/icons/DropdownArrow.tsx";
import {useState} from "react";
import {CloseIcon} from "src/shared/ui";

const CurrencyButton = () => {
    const [isActive, setActive] = useState(false)

    return (
        <div className={styles.wrapper}>
            <button onClick={() => setActive(true)} className={`${styles.body} ${isActive && styles.active}`}>
                ₽
                <DropdownArrow />
            </button>
            {
                isActive && (
                    <div className={styles.menuBody}>
                        <div className={styles.head}>
                            <h5>Валюта</h5>
                            <button  onClick={() => setActive(false)}>
                                <CloseIcon />
                            </button>
                        </div>

                        <ul>
                            <li>Рубль <span>₽</span></li>
                            <li>Доллар <span>$</span></li>
                            <li>Евро <span>€</span></li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default CurrencyButton