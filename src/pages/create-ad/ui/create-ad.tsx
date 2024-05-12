import {CreateAdModule} from "src/modules/create-ad/ui/create-ad-module.tsx";
import { useEffect } from "react";
import api from "src/app/api/api";
import {useAppDispatch} from "src/shared/hooks/reduxHooks";
import {setRootCategories} from "src/shared/slice/categories-slice";
import {useSearchParams} from "react-router-dom";
import { CreateAdCategory } from "src/components/create-ad/category/create-ad-category";
import { CreateAdSubCategory } from "src/components/create-ad/sub-category/sub-category";
import {CreateAdForm} from "src/components/create-ad/ad-form/ad-form.tsx";

const CreateAdPage = () => {
    const dispatch = useAppDispatch()
    const [URLSearchParams] = useSearchParams()

    useEffect(() => {
        const requestCategories = () => {
            api.categories.get()
                .then((res) => {
                    dispatch(setRootCategories(res.data))                
                })
                .catch((e) => {
                    console.error('root categories error: ', e)
                })
        }
        requestCategories()
    }, [])

    if (URLSearchParams.get('sub_category')) {
        return (
            <CreateAdModule
                children={<CreateAdForm />}
            />
        )
    }

    if (URLSearchParams.get('category')) {
        return (
            <CreateAdModule
                children={<CreateAdSubCategory />}
            />
        )
    }

    return (
        <>
            <CreateAdModule
                children={<CreateAdCategory />}
            />
        </>
    )
}

export default CreateAdPage