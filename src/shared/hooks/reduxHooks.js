import { useDispatch, useSelector } from "react-redux";
export const useAppDispatch = () => useDispatch(); //1. Типизируем useDispatch
export const useAppSelector = useSelector; //2. Типизируем useSelector
