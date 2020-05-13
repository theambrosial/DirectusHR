import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from './actionTypes';
import { loginSuccess, logoutUserSuccess, apiError } from './actions';

//AUTH related methods
import { getFirebaseBackend } from '../../../helpers/authUtils';
import cookie from 'react-cookies'
import {Redirect} from 'react-router-dom';
import React, { Component }  from 'react';
const fireBaseBackend = getFirebaseBackend();


function* loginUser({ payload: { user, history } }) {
    try {

      let data ={
            ['username']: user.email,
            ['password']: user.password
        }


          const endpoint = '/api/auth/login/'
      const csrfToken = cookie.load('csrftoken')

        alert(csrfToken)
      if (csrfToken !== undefined) {
          let lookupOptions = {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrfToken
              },
              body: JSON.stringify(data),

              credentials: 'include'
          }

          fetch(endpoint, lookupOptions)
          .then(function(response){
              return response.json()
          }).then(function(responseData){
              console.log(responseData)
              if(responseData.token){
                sessionStorage.setItem('token',responseData.token)
              history.push('/dashboard');
              return (<Redirect to={'/dashboard'} />)
              }else{
              alert("Wrong Password OR The Mobile Number Is Not Registered With Us");
              }

          }).catch(function(error){
              console.log("error", error)
              alert("An error occured, please try again later.")
          })

      }



//        const response = yield call(fireBaseBackend.loginUser, user.email, user.password);
//        yield put(loginSuccess(response));

    } catch (error) {
        yield put(apiError(error));
    }
}

function* logoutUser({ payload: { history } }) {
    try {
        const response = yield call(fireBaseBackend.logout);
        yield put(logoutUserSuccess(response));
        history.push('/login');
    } catch (error) {
        yield put(apiError(error));
    }
}


export function* watchUserLogin() {
    yield takeEvery(LOGIN_USER, loginUser)
}

export function* watchUserLogout() {
    yield takeEvery(LOGOUT_USER, logoutUser)
}

function* authSaga() {
    yield all([
        fork(watchUserLogin),
        fork(watchUserLogout),
    ]);
}

export default authSaga;