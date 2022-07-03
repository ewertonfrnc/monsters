import { useState, useEffect, ChangeEvent } from 'react'

import { getData } from './utils/data.utils'

import CardList from './components/cardList/CardList.component'
import SearchBox from './components/searchBox/SearchBox.component'

import './App.css'

export type Monster = {
  id: string
  name: string
  email: string
}

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState<Monster[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      setMonsters(users)
    }
    fetchUsers()
  }, [])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField)
  )

  return (
    <div className='App'>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Procurar monstros'
        className='monsters-search-box'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
