import {CreateAdModule} from "src/modules/create-ad/ui/create-ad-module.tsx";
import { useEffect } from "react";
import api from "src/app/api/api";
import { useAppDispatch } from "src/shared/hooks/reduxHooks";
import { setRootCategories } from "src/shared/slice/categories-slice";
import { useSearchParams } from "react-router-dom";
import { CreateAdCategory } from "src/components/create-ad/category/create-ad-category";
import { CreateAdSubCategory } from "src/components/create-ad/sub-category/sub-category";

const CreateAdPage = () => {
    const dispatch = useAppDispatch()
    const [URLSearchParams, setURLSearchParams] = useSearchParams()

    useEffect(() => {
        const requestCategories = async () => {
            await api.categories.get()
                .then((res) => {
                    dispatch(setRootCategories(res.data))                
                })
                .catch((e) => {
                    console.error('root categories error: ', e)
                })
        }
        requestCategories()
    }, [])
    
    console.log(URLSearchParams.get('category'))

    if (URLSearchParams.get('category')) {
        return (<CreateAdModule
                children={<CreateAdSubCategory />}
            />)
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