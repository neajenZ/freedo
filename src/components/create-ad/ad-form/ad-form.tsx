import styles from './ad-form.module.scss'
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {setPublicationForm} from "src/shared/slice/user-slice.ts";
import {CreateAdStatus} from "src/components/create-ad/ad-form/components/choice-status/choice-status.tsx";
import CurrencyButton from "src/shared/ui/currency/currency-button.tsx";
import { useForm } from 'react-hook-form';


interface IForm {
    title: string,
    description: string,
    price: number
}

// interface ISubmitForm extends IForm {
//     category_id: number,
//     language_id: string,
//     author_id: string | number,
//     views: number,
//     photoUrls: string[]
// }

export const CreateAdForm = () => {
    // const [pictures, setPictures] = useState([])
    const dispatch = useAppDispatch()
    const {userSlice} = useAppSelector(state => state)
    const {
        register,
        formState: {
          errors
        },
        // handleSubmit
      } = useForm<IForm>({
        mode: 'onSubmit'
      })

      // const handleOk = (data: IForm) => {
      //   const requestData:ISubmitForm = {
      //       ...data,
      //       author_id: userSlice.userData.id,
      //       language_id: 'Rus',
      //       views: 0,
      //       category_id: 50,
      //       photoUrls: pictures
      //   }
      // }
    
    return (
        <form className={styles.formWrapper}>
            <div className={`${styles.formItem} ${styles.roleWrapper}`}>
                <h4>Режим:</h4>
                <div className={styles.buttonWrapper}>

                    <button
                        className={userSlice.createAdInfo.data.type === 'executor' ? styles.active : undefined}
                        onClick={() => dispatch(setPublicationForm({
                            ...userSlice.createAdInfo,
                            data: {
                                ...userSlice.createAdInfo.data,
                                type: 'executor'
                            }
                        }))}
                    >
                        Исполнитель
                    </button>

                    <button
                        className={userSlice.createAdInfo.data.type === 'customer' ? styles.active : undefined}
                        onClick={() => dispatch(setPublicationForm({
                            ...userSlice.createAdInfo,
                            data: {
                                ...userSlice.createAdInfo.data,
                                type: 'customer'
                            }
                        }))}
                    >
                        Заказчик
                    </button>

                </div>
            </div>
            <CreateAdStatus />
            <div className={styles.formItem}>
                <h4>Название:</h4>
                <div className={styles.inputValidWrapper}>
                    <input 
                        type="text" 
                        placeholder={'Введите название'}
                        {...register('title', {
                            required: 'Поле обязательно к заполнению'
                          })}    
                    />
                    {errors.title && <p className="error">{errors?.title?.message ?? 'Ошибка валидации'}</p> }
                </div>
            </div>
            <div className={`${styles.formItem} ${styles.fieldWrapper}`}>
                <h4>Описание:</h4>
                <div className={styles.inputValidWrapper}>
                    <textarea 
                        placeholder={'Введите название'}
                        {...register('description', {
                            required: 'Поле обязательно к заполнению',
                            minLength: {
                                value: 50,
                                message: "Минимальная длина 50 символов"
                            }
                          })}      
                    />
                    {errors.description && <p className="error">{errors?.description?.message ?? 'Ошибка валидации'}</p> }
                </div>
                
            </div>
            {/*<CreateAdImg*/}
            {/*    setImages={(i) => setPictures(i)}*/}
            {/*/>*/}
            <div className={`${styles.formItem} ${styles.price}`}>
                <h4>Стоимость:</h4>
                <div className={styles.inputValidWrapper}>
                    <input 
                        className={styles.priceInput}   
                        placeholder={'Введите стоимость'}
                        type='number'
                        {...register('price', {
                            required: 'Поле обязательно к заполнению',
                          })}
                    />
                    <div className={styles.currencyWrapper}>
                        <CurrencyButton />
                    </div>
                    {errors.price && <p className="error">{errors?.price?.message ?? 'Ошибка валидации'}</p> }
                </div>
                
            </div>
            <div className={styles.formItem}>
                <button className={`${styles.stepBtn} ${styles.prev}`}>Назад</button>
                <input 
                    className={`${styles.stepBtn}`}
                    type='submit'
                    value={'Далее'}
                />
            </div>
        </form>
    )
}