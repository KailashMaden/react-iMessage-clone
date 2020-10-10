import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Imessage from './components/imessage/Imessage'
import {selectUser, login, logout} from './features/userSlice'
import Login from './components/login/Login'
import {auth} from './server/firebase'


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [user])
  return (
    <div className="app">
     {user ? <Imessage /> : <Login />}
    </div>
  );
}

export default App;
