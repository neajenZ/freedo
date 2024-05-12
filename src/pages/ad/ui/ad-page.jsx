import { UserCard } from "src/modules/user";
import styles from './ad-page.module.scss';
import { AdInfo } from "src/modules/ad-info/ui/ad-info.tsx";
import api from "src/app/api/api.ts";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
import { setComments, setPublication } from "src/shared/slice/publications-slice.ts";
const AdPage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const requestPublicationData = () => {
        if (id) {
            api.publications.getData(id)
                .then((res) => {
                console.log(res);
                dispatch(setPublication(res.data));
                api.comments.getByPublication(id, 10)
                    .then((res) => {
                    dispatch(setComments(res.data));
                })
                    .catch((e) => {
                    console.log('comments error: ', e);
                    alert('Ошибка получения комментариев');
                });
            });
        }
    };
    useEffect(() => {
        requestPublicationData();
    }, [id]);
    return (<div className={'container'}>
            <div className={styles.wrapper}>
                <UserCard />
                <AdInfo />
            </div>
        </div>);
};
export default AdPage;
