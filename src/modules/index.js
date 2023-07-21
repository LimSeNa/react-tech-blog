import {combineReducers} from "redux";
import auth from "./auth";
import write, {writeSaga} from "./write";
import loading from "./loading";
import {all} from "redux-saga/effects";
import post, {postSaga} from "./post";

const rootReducer = combineReducers({
    loading,
    auth,
    write,
    post,
});

export function* rootSaga() {
    yield all([writeSaga(), postSaga()])
}

export default rootReducer;