import {CreateAdModule} from "src/modules/create-ad/ui/create-ad-module.tsx";
import {CreateAdCategory} from "src/components/create-ad/category/create-ad-category.tsx";

const CreateAdPage = () => {

    return (
        <>
            <CreateAdModule
                children={<CreateAdCategory />}
            />
        </>
    )
}

export default CreateAdPage