import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function SigninScreen(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const redirect = '/dashboard';

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        dispatch(signin(username, password));
    }

    useEffect(() => {
        if (userInfo)
        props.history.push(redirect);
    }, [props.history, redirect, userInfo])


    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="" id="username" placeholder="Enter username" required onChange={ e => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" placeholder="Enter password" required onChange={ e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default SigninScreen
