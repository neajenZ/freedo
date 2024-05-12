import { Trans } from "react-i18next";
import styles from './politicy-text.module.scss';
export const PoliticyText = () => {
    return (<>
            <p className={styles.politicyText}>
                <Trans i18nKey={'politicyText'} components={[<a href={''}></a>, <a href={''}></a>]}/>
            </p>
        </>);
};
