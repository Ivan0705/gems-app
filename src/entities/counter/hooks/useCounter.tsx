import { useAppDispatch } from "@/shared/hooks/redux/redux";
import { useSelector } from "react-redux";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { decrement, increment } from "../model/slice/counterSlice";

export const useCounter = () => {
  const count = useSelector(getCounterValue);

  const dispatch = useAppDispatch();

  const incrementCounter = () => {
    return dispatch(increment());
  };

  const decrementCounter = () => {
    return dispatch(decrement());
  };

  return {
    incrementCounter,
    decrementCounter,
    count,
  };
};
