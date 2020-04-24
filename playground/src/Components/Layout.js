import React from 'react';
import Button from '@material-ui/core/Button';


export default class Layout extends React.Component {

  state = {
    loading: true,
    items: [],
    value: true,
    url: `http://localhost:5000`
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
        console.log(data);
        this.setState({
          loading: false,
          items: data
        })
        fetch(secondApi)
          .then(res => res.json())
          .then(json => console.log(json))
      })


  }

  add = () => {
    console.log(this.firstName.value)
    fetch(`${this.state.url}/api/members/saveMember`, {
      method: "POST", // POST, PUT, DELETE, etc.
      headers: {
        // the content type header value is usually auto-set
        // depending on the request body
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: { name: this.firstName.value }
    });
  }
  checkPhoneKey(event) {
    console.log(event.key);
    if (event.key === `'`) {
      alert(`Cant use ${event.key}`);
    }
  }

  render() {

    return (
      <div >
        {this.state.loading ? <div>loading...</div> : <div>
          <ol>
            {this.state.items.map(item => <li key={item.id}>{item.name}</li>)}
          </ol>
        </div>}


        <div>
          {
            this.state.value ?
              <div>Show</div> :
              null
          }
          <Button variant="contained" onClick={() => this.yash()}>
            Click
          </Button>
        </div>
        <div>
          <input onKeyDown={this.checkPhoneKey} ref={(input) => this.firstName = input} type="text" />
          <Button variant="contained" onClick={() => this.add()}>
            ADD
          </Button>
        </div>
      </div >
    );
  }
}