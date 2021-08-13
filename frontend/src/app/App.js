import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// style
import { StylesProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// features
import Login from '../features/auth/login/Login';
import SignUp from '../features/auth/signup/SignUp';
import MyPage from '../features/mypage/MyPage';
import CheckPassword from '../features/auth/modify/CheckPassword';
import ModifyUserInfo from '../features/auth/modify/ModifyUserInfo';
import Home from '../features/home/Home';
import EmailChecked from '../features/auth/signup/EmailChecked';
import Tutorial from '../features/tutorial/Tutorial';
import Rank from '../features/rank/Rank';
import Error404 from '../common/error/Error404';
import Error500 from '../common/error/Error500';

// routes
import PrivateRoute from '../common/routes/PrivateRoute';
import PublicRoute from '../common/routes/PublicRoute';

const Wrapper = styled.div`
  background-color: rgba(246, 245, 253, 1);
`;

const StyledToastContainer = styled(ToastContainer).attrs({})`
  .Toastify__toast--error {
    font-size: 0.8rem;
    line-height: 1.5;
    word-break: keep-all;
  }
`;

function App() {
  return (
    <StylesProvider injectFirst>
      <Wrapper>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <PublicRoute restricted path="/login" component={Login} />
            <PublicRoute restricted path="/signup" component={SignUp} />
            <Route path="/emailchecked" component={EmailChecked} />
            <Route path="/error" component={Error500} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/tutorial" component={Tutorial} />
            <PrivateRoute path="/rank" component={Rank} />
            <PrivateRoute path="/mypage" component={MyPage} />
            <PrivateRoute path="/checkpassword" component={CheckPassword} />
            <PrivateRoute path="/modifyuserinfo" component={ModifyUserInfo} />
            <Route path="*" component={Error404} />
          </Switch>
        </BrowserRouter>
        <StyledToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Wrapper>
    </StylesProvider>
  );
}

export default App;
