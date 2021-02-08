import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Profile from '../../components/profile/Profile';
import { getProfile, login } from '../../shared/api';

import AppContext, { ActionTypes } from '../../shared/app.context';
// import { selectLogin } from '../../shared/redux/login/login.selectors';
import styles from './LoginPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, fetchLoginSuccess } from '../../shared/redux/login/login.actions';

const LoginPage: React.FC = () => {

    // const {dispatch} = useContext(AppContext);
    const history = useHistory();
    const [form, setForm] = useState({username: '', password: ''});
    let newType='';
    const dispatch = useDispatch();
  
    // const profile = useSelector(selectLogin);
    const handlelogin = () => {
    //     console.log(form)
    //     if (form.password && form.username) {
    //         // Login and set profile
    //         login(form.username, form.password)
    //         .then(res => {
    //             if (res.data.token) {
    //                 localStorage.setItem('authToken', res.data.token)
    //             } 
    //             return getProfile();
    //         })
    //         .then(res => {
    //             dispatch({type: ActionTypes.SET_PROFILE, payload: res.data})
    //             history.replace('/');
    //         })
        
    // }
  
     dispatch(fetchLogin(form));
     console.log(form.password+"!!!!!!!");
    console.log(fetchLogin(form));
    history.replace('/');
    // dispatch(fetchLoginSuccess(profile));
   


}

    
    // var currentUser = JSON.parse(localStorage.getItem('profile') || '{}');
    // console.log(currentUser)

    return (
        <div className={styles.wrapper}>
            <h2>Log in</h2>
            <div className={styles.controls}>
                <input 
                    className={styles.input} 
                    value={form.username} 
                    type="text" 
                    name="username" 
                    onChange={(e) => {setForm(state => ({...state, username: e.target.value}))}}
                    placeholder="Enter your username" />
                <input 
                 
                    value={form.password}
                    type="text" 
                    name="password"
                    onChange={(e) => {setForm(state => ({...state, password: e.target.value}))}} 
                    placeholder="Enter your password" />
            </div>
            <button title="Login"  onClick={handlelogin}>Login</button>
        </div>
    )
}

export default LoginPage;
