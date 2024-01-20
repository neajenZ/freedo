import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";

export const useAppDispatch = () => useDispatch<AppDispatch>(); //1. Типизируем useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //2. Типизируем useSelector