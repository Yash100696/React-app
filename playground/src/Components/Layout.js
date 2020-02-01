import React from 'react';
import Button from '@material-ui/core/Button';

class Layout extends React.Component {

  state = {
    loading: true,
    items: [],
    value: true,
    url:`http://localhost:5000`
  }

  yash() {
    this.setState({
      value: !this.state.value
    })
    console.log(this.state.value);

  }

  componentDidMount() {
    let api = `${this.state.url}/api/members`;
    let secondApi = `https://api.randomuser.me/`;
    fetch(api).then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          items: data
        })
        fetch(secondApi)
          .then(res => res.json())
          .then(json => console.log(json))
      })


  }

  render() {

    return (
      <div >
        {this.state.loading ? <div>loading...</div> : <div>
          <ol>
            {this.state.items.map(item => <li key={item.id}  >{item.name}</li>)}
          </ol>
        </div>}


        <div>
          {
            this.state.value ?
              <div>Show</div> :
              null
          }
          <Button variant="contained" onClick={()=> this.yash()}>
            Click
          </Button>
        </div>
      </div >
    );
  }
}

export default Layout;