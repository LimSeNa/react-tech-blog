import {combineReducers} from "redux";
import auth from "./auth";
import write, {writeSaga} from "./write";
import loading from "./loading";
import {all} from "redux-saga/effects";

const rootReducer = combineReducers({
    loading,
    auth,
    write,
});

export function* rootSaga() {
    yield all([writeSaga()])
}

export default rootReducer;