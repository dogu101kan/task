import { _setData, _setAccounts } from ".";
import store from "..";
export const setData = data => store.dispatch(_setData(data))
export const setAccounts = data => store.dispatch(_setAccounts(data))