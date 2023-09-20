import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  margin-top: 60px;
`

export const Option = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
`

export const ScorePhrase = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
`

export const ScoreNumber = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 700;
`

export const GameViewContainer = styled.div`
  height: 60vh;
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameOptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 480px;
  padding-left: 0;
  margin-left: 0;
`

export const TriggerButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  padding: 8px 15px 8px 15px;
  border: none;
  border-radius: 4px;
  margin: 8px;
  cursor: pointer;
  outline: none;
`

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`

export const PopUpImage = styled.img`
  width: 90%;
  align-self: center;
`

export const PopUpBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`

export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
`

export const SelectedOptionsContainer = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
`

export const GameUserOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameParticipantText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
`

export const GameParticipantChoiceImage = styled.img`
  height: 170px;
  width: 170px;
`

export const ResultText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`

export const PlayAgainButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  padding: 8px 15px 8px 15px;
  border: none;
  border-radius: 4px;
  margin: 8px;
  cursor: pointer;
  outline: none;
  align-self: center;
`
