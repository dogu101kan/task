import {useSelector} from "react-redux";

export const useData = ()=>useSelector(state => state.data.scriptResult)
export const useAccounts = ()=>useSelector(state => state.data.accounts)
