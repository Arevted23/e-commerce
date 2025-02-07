import {LoginAccount} from './login-account/login-acount.jsx'
import { CreateAccountButton } from './create-account/create-account.jsx';

export const Button1 = () => {
  const handleRedirect = () => {
    window.location.href = 'https://example.com/page1';
  };

  return <LoginAccount onClick={handleRedirect}>Button 1</LoginAccount>;
};

export const Button2 = () => {
  const handleRedirect = () => {
    window.location.href = 'https://example.com/page2';
  };

  return <CreateAccountButton onClick={handleRedirect}>Button 2</CreateAccountButton>;
};

export default { Button1, Button2 };
