import React from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Home = () => {
  const authContext = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick = {authContext.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
