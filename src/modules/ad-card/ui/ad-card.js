import styles from './ad-card.module.scss';
import img from '../Paints.jpg';
import Price from "src/shared/ui/price/price.tsx";
export const AdCard = () => {
    return (<div className={styles.cardBody}>
            <div className={styles.imgWrapper}>
                <img src={img} alt=""/>
            </div>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.avatar}>
                        <img className={styles.img} src={''} alt="alt"/>
                    </div>

                    <div className={styles.head}>
                        <div className={styles.headTop}>
                            <div className={styles.left}>
                                <div className={styles.name}>Веб-дизайнер, UX/UI дизайнер</div>
                            </div>
                            <div className={styles.right}>
                                {window.innerWidth > 480 ? <Price price={1200}/> : null}

                                {/*<div className={styles.stars}>1200 $ +</div>*/}
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
                                    <path d="M3.07844 13.3918L11.3238 22.0815C12.5068 23.3282 14.4932 23.3282 15.6762 22.0815L23.9216 13.3918C26.6928 10.4712 26.6928 5.73603 23.9216 2.81544C21.1503 -0.105148 16.6572 -0.105146 13.886 2.81544C13.6762 3.03657 13.3238 3.03657 13.114 2.81544C10.3428 -0.105146 5.84969 -0.105147 3.07844 2.81544C0.307187 5.73603 0.307189 10.4712 3.07844 13.3918Z" fill="#585DFB" stroke="#262626"/>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.date}>Услуги, IT, интернет, телеком, создание сайтов</div>
                    </div>
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>
                        Добрый день!
                        Меня зовут Александр Иванов, три года с переезда в США, я предлагаю услуги для вашего бизнеса, связанные с графическим дизайном, создание сайтов, айдентики — Графический дизайн, туда входят инфографика, иллюстрация, дизайн упаковки, маркетин. Туда входят инфографика, иллюстрация, дизайн упаковки, маркетинговые…
                    </p>
                </div>
                <div className={styles.countriesWrapper}>
                    <span className={styles.countryItem}></span>
                    <span className={styles.countryItem}></span>
                    <span className={styles.countryItem}></span>
                </div>

            </div>
        </div>);
};
