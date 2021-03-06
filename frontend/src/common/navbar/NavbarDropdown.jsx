import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
import { resetUser, logout } from '../../features/auth/authSlice';
import { deleteToken } from '../api/JWT-common';
import { resetMyPageInfo } from '../../features/mypage/mypageSlice';
import profileImages from '../../assets/profile/profileImages';

// import defaultImage from '../../assets/default.png';

const useStyles = makeStyles({
  profile: {
    border: '0.5px solid white',
    background: 'linear-gradient(45deg, #ffa1b5 30%, #ffa87a 80%)',
    width: '50px',
    height: '50px',
  },
});

export default function SimpleMenu() {
  const { img } = useSelector((state) => state.auth.user);
  const { isAdmin } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        history.push('/login');
        dispatch(resetUser());
        dispatch(resetMyPageInfo());
      })
      .catch((err) => {
        if (err.status === 400) {
          toast.error('π₯ λ€μ μλν΄μ£ΌμΈμ');
        } else if (err.status === 404) {
          deleteToken();
          history.push('/login');
        } else if (err.status === 401) {
          deleteToken();
          history.push('/login');
        } else if (err.status === 500) {
          history.push('/error');
        }
      });
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {profileImages.map((profileImage, index) => {
          if (index + 1 === Number(img)) {
            return (
              <Avatar
                key={[profileImage, index]}
                className={classes.profile}
                alt="profile"
                src={profileImage}
              />
            );
          }
          return <span key={[profileImage, index]}> </span>;
        })}
      </Button>
      <Menu
        disableScrollLock
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/mypage">
          <MenuItem onClick={handleClose}>λ§μ΄νμ΄μ§</MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>λ‘κ·Έμμ</MenuItem>
        {isAdmin && (
          <Link to="/admin">
            <MenuItem onClick={handleClose}>κ΄λ¦¬μνμ΄μ§</MenuItem>
          </Link>
        )}
      </Menu>
    </div>
  );
}
