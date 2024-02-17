import { AuthWidget } from "src/modules/auth";
import {ChoiceTypeModal} from "src/modules/choice-type-modal/ui/choice-type-modal.tsx";
import styles from './auth-page.module.scss'
import {useAppSelector} from "src/shared/hooks/reduxHooks.ts";

const AuthPage = () => {
    const {userSlice} = useAppSelector(state => state)
    return (
        <div className={'container'}>
            <div className={styles.wrapper}>
                {
                    userSlice.typeAuth === 'initial' ? <ChoiceTypeModal /> : <AuthWidget/>
                }
            </div>
        </div>
    );
}
export default AuthPage;
