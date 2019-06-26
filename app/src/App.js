import React from 'react';
import './App.css';
import Campaign from './campaign';

async function networkRequest(){
  return new Promise((resolve, reject) => {
    resolve(require('./sample.json'));
  //   fetch('http://www.plugco.in/public/take_home_sample_feed',{
  //     headers:{
  //       'Access-Control-Allow-Credentials': '*'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then((responseJSON) => {
  //       console.log(responseJSON);
  //       resolve(responseJSON);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       reject(error);
  //     });
  });
}

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      blobJSON: '',
    }
  }

  componentDidMount(){
    networkRequest()
      .then((response)=>{
        this.setState({
          blobJSON: response.campaigns
        });
      }).catch((error)=>{
        console.log(error);
      });
  }
  render() {
    return (
      <div>
          {
            this.state.blobJSON !== '' && 
            this.state.blobJSON.map((item) => <Campaign campaignItem={item} key = {item.id}/>)
          }
      </div>
    );
  }
}

export default App;
