import * as actionTypes from '../actions/actionTypes';

/* Redux saga class init
 * Called on app init on Entrypoint
 */
import { all, takeEvery } from 'redux-saga/effects';

import loginSaga from './loginSaga';

export default function* watch() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
}
