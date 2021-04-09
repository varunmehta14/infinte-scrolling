
import './App.css';
import { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Profile from './components/Profile';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const PAGE_NUMBER=1;

const App=()=> {
  const classes = useStyles();
// let options = {};
// let avatars = new Avatars(sprites, options);
// let svg = avatars.create('custom-seed');
// console.log(svg);

const[users,setUsers]=useState([]);
const[isLoading,setIsLoading]=useState(true);
const[error,setError]=useState(null);
const[page,setPage]=useState(PAGE_NUMBER);

const fetchUsers=()=> {
  // Where we're fetching data from
  fetch(`https://jsonplaceholder.typicode.com/users`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then((data) =>{
      console.log(data);
      setUsers([...users, ...data]);
      setIsLoading(false);
      
    })
    
    // Catch any errors we hit and update the app
    .catch(error => setError({error}),setIsLoading(false));}
useEffect(() => {

fetchUsers();
}, []);
const scrollToEnd=()=>{
  setPage(page+1);
  setIsLoading(true);
  //console.log(isLoading)
  fetchUsers();
  console.log(page)
}
window.onscroll=function(){
  console.log(window,document.documentElement.scrollTop,document.documentElement.offsetHeight)
  if(
    window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
  ){
    scrollToEnd()
    console.log("here")
  }
}

  return (
    <div>
     {/* <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
             <Profile userName={userName} email={email}/> 
            </div>
          ))}
        </InfiniteScroll>     */}
     {error ? <p>{error.message}</p> : null}
      {/* // Here's our data check */}
      {!isLoading ? (
        users.map(user => {
          const { username, name, email } = user;
          return (
            // <div key={username}>
            //   <p>Name: {name}</p>
            //   <p>Email Address: {email}</p>
            //   <hr />
            // </div>
            <Grid container spacing={3}>
            <Grid item xs={12}>
             <Profile key={username} name={name} email={email}/>
            </Grid>
            </Grid>
            
          );
        })
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Loading...</h3>
      )}
      

    </div>
  );
}

export default App;
