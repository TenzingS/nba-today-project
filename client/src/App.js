import './App.css';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import DiscussionBoard from './Forum/DiscussionBoard';
import NewPost from "./Forum/NewPost";
import EditPost from './Forum/EditPost';
import Stats from './Stats/Stats';
// import NewComment from './Forum/NewComment';
import Comments from './Forum/Comment';

function App() {
    const [user, setUser] = useState(false);

    useEffect(() => {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);


  return (
    <div className="App">
      <div class="ball">
      <div class="stroke pos1"></div>
      <div class="stroke pos2"></div>
      <div class="stroke2 pos3"></div>
      <div class="stroke2 pos4"></div>
    </div>
      <BrowserRouter>
        <Route exact path = "/">
          <Login setUser={setUser} user={user}/>
        </Route>
        <Route exact path = "/home">
          <DiscussionBoard setUser={setUser} user={user}/>
        </Route>
        <Route exact path = "/createpost">
          <NewPost user={user}/>
        </Route>
        <Route exact path = '/editpost/:id'>
          <EditPost />
        </Route>
        <Route exact path = '/post/:id'>
          <PostContainer />
        </Route>
        <Route exact path = "/stats">
          <Stats user={user} setUser={setUser}/>
        </Route>
        {/* <Route exact path = "/newcomment">
          <NewComment user={user}/>
        </Route> */}
        {/* <Route exact path = "/showcomments">
          <Comments user={user}/>
        </Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
