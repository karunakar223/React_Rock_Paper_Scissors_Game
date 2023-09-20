import {OptionImage, OptionListItem, GameOptionButton} from './styledComponents'

const GameOptions = props => {
  const {choiceDetails, onClickSetUserChoice} = props
  const {imageUrl, id} = choiceDetails

  const userChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        onClick={userChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <OptionImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default GameOptions
