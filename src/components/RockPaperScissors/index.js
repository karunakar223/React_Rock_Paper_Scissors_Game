import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import GameOptions from '../GameOptions'

import {
  AppContainer,
  ResultContainer,
  Option,
  OptionsContainer,
  ScoreContainer,
  ScorePhrase,
  ScoreNumber,
  GameViewContainer,
  GameOptionsList,
  TriggerButton,
  PopupContainer,
  CloseButton,
  PopUpImage,
  PopUpBody,
  GameResultViewContainer,
  SelectedOptionsContainer,
  GameUserOptionContainer,
  GameParticipantText,
  GameParticipantChoiceImage,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const gameStatusConstants = {
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
  inProgress: 'IN_PROGRESS',
}

class RockPaperScissors extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    userChoice: '',
    gameChoice: '',
  }

  onClickSetUserChoice = id => {
    this.setState(
      {userChoice: id, gameChoice: this.getGameChoice()},
      this.evaluateGame,
    )
  }

  onClickGoToGameView = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(choice => choice.id)

    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoicesList[randomIndex]
  }

  evaluateGame = () => {
    const {userChoice, gameChoice} = this.state

    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (gameChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (gameChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (gameChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <GameOptionsList>
        {choicesList.map(eachChoice => (
          <GameOptions
            key={eachChoice.id}
            choiceDetails={eachChoice}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </GameOptionsList>
    )
  }

  renderGameWonView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObj = userChoiceObjList[0]
    const gameChoiceObjList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObj = gameChoiceObjList[0]
    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObj.imageUrl}
              alt="your choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObj.imageUrl}
              alt="opponent choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionsContainer>
        <ResultText>YOU WON</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameLostView = () => {
    const {gameChoice, userChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const gameChoiceObjList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const userChoiceObj = userChoiceObjList[0]
    const gameChoiceObj = gameChoiceObjList[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObj.imageUrl}
              alt="your choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>OTHER</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObj.imageUrl}
              alt="opponent choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionsContainer>
        <ResultText>YOU LOSE</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameDrawView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObj = userChoiceObjList[0]
    const gameChoiceObjList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObj = gameChoiceObjList[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObj.imageUrl}
              alt="your choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObj.imageUrl}
              alt="opponent choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionsContainer>
        <ResultText>IT IS DRAW</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state

    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.win:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state

    return (
      <AppContainer>
        <ResultContainer>
          <OptionsContainer>
            <Option>
              ROCK
              <br />
              <br />
              PAPER
              <br />
              <br />
              SCISSORS
            </Option>
          </OptionsContainer>
          <ScoreContainer>
            <ScorePhrase>Score</ScorePhrase>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreContainer>
        </ResultContainer>
        <GameViewContainer>{this.renderGameView()}</GameViewContainer>
        <PopupContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
            closeOnEscape
            window
          >
            {close => (
              <PopUpBody>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
              </PopUpBody>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissors
