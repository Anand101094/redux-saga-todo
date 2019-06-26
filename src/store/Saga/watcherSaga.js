import { takeEvery } from 'redux-saga/effects'

export function* watcherSaga(){
    yield takeEvery('ADD_TODO',workerSaga)
}

function* workerSaga(){
    yield null
}