import { Component } from 'react'
import CardList from './components/cardList/CardList.component'
import './App.css'
import SearchBox from './components/searchBox/SearchBox.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    // Run this code when the component mounts

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => ({ monsters: users })))
  }

  onSearchChange = event =>
    this.setState(() => ({
      searchField: event.target.value.toLowerCase(),
    }))

  render() {
    const { monsters, searchField } = this.state

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    )

    return (
      <div className='App'>
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder='Procurar monstros'
          className='monsters-search-box'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
