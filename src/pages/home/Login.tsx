import React from 'react'
import GoogleLogin from 'react-google-login';
import styled from "styled-components";
import { ThemeContext } from '../../App';
import GoogleIcon from '../../icon/GoogleIcon';

export default function Login() {

    const { theme } = React.useContext(ThemeContext);
    const responseGoogle = () => {
        console.log('hi')
    }
  return (
    <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        render={(renderProps) => {
            return (
                <GoogleButton theme={theme} 
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled}>
                    <GoogleIcon />
                    <span>Sign In / Log In</span>
                </GoogleButton>
            )
        }}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
  )
}


const GoogleButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 0;
    width: 15em;
    height: 3em;
    background: #fff;
    color: #212529;
    border: 1px solid ${({ theme }) => theme.border2};
    font-family: 'TmoneyRoundWindRegular';
    font-size: 15px;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text1};
    }
`