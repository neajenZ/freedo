import {CreateAdModule} from "src/modules/create-ad/ui/create-ad-module.tsx";
import {CreateAdCategory} from "src/components/create-ad/category/create-ad-category.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "src/shared/hooks/reduxHooks.ts";
import {getCategories} from "src/shared/slice/Api/getCategories.ts";
import {CreateAdForm} from "src/components/create-ad/ad-form/ad-form.tsx";
import {CreateAdContacts} from "src/components/create-ad/contacts/contacts.tsx";

const CreateAdPage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCategories)
    }, []);

    return (
        <>
            <CreateAdModule
                children={<CreateAdCategory />}
            />
        </>
    )
}

export default CreateAdPage