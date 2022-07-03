import { Monster } from '../../App'
import Card from '../Card/Card.component'
import './cardList.styles.css'

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className='card-list'>
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  )
}

export default CardList
