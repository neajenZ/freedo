
import { SVGProps } from "react"

const FavoritesIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.07844 13.7668L11.3238 22.4565C12.5068 23.7032 14.4932 23.7032 15.6762 22.4565L23.9216 13.7668C26.6928 10.8462 26.6928 6.11103 23.9216 3.19044C21.1503 0.269852 16.6572 0.269854 13.886 3.19044C13.6762 3.41157 13.3238 3.41157 13.114 3.19044C10.3428 0.269854 5.84969 0.269853 3.07844 3.19044C0.307187 6.11103 0.307189 10.8462 3.07844 13.7668Z"
                fill="#585DFB" stroke="#111011"/>
        </svg>
    );
};

export default FavoritesIcon;
