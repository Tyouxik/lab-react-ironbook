import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import users from "./users";

class App extends Component {

  state = {
          users,
          search:'',
          student: true,
          teacher: true
      }

    // handleChange = (event) => {
    //   
    //   console.log(this.state)
    //   .filter(user => {
    //     // console.log(user.firstName.toLowerCase().includes(this.state.search))
    //     user.firstName.toLowerCase().includes(this.state.search.toLowerCase())
    //   })
    //   // || user.lastName.toLowerCase().includes(value)
    //   console.log(filteredUsers)
    //   this.setState({
    //     users: filteredUsers,
    //     search: value
    
    //   })
    // }

    editSearch = (event) => {
      const {value} = event.target
      this.setState({
         search: value 
        })
    }

    handleCheckbox = (event) => {
    const id = event.target.id;
    const value = event.target.checked

    this.setState({
      [id]: value
    })
    console.log('student', this.state.student)
    }
    

  render () {
    let filteredList = this.state.users.filter(user => {
      if(this.editSearch) {
        return user.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || user.lastName.toLowerCase().includes(this.state.search.toLowerCase())
      }
    })



    const profile = filteredList.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.campus}</td>
          <td>{user.role}</td>
          {user.linkedin && <td><a href={user.linkedin}><img style={{height:'20px'}}src='linkedin.png'/></a></td>}
        </tr>
      )
    })

    return (
      <>
      <h1>IronBook</h1>
      <form>
        <input
        type='text'
        name='name'
        value={this.state.search}
        onChange={this.editSearch}
        >
        </input>

        <label htmlFor="student">Student</label>
        <input 
        type="checkbox"
        id='student'
        checked={this.state.student}
        onChange={this.handleCheckbox}
        />

        <label htmlFor="teacher">Teacher</label>
        <input type="checkbox"
        id='teacher'
        checked={this.state.teacher}
        onChange={this.handleCheckbox}
        />

      </form>
      <table>
          <thead>
              <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Campus</th>
                  <th>Role</th>
                  <th>Link</th>
              </tr>
          </thead>
          <tbody>
              {profile}
          </tbody>
      </table>
      </>
    )
  }
}

export default App;
