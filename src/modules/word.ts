import type { Reducer } from 'redux'
import type { Action, ActionFunctionAny } from 'redux-actions'
import { createActions, handleActions } from 'redux-actions'

// Action types
export const GET_WORDS = 'GET_WORDS'
export const SET_WORDS = 'SET_WORDS'

export interface WordState {
  id: string
  category: string
  titles: string[]
  description: string
}

export interface WordActions {
  getWords: ActionFunctionAny<Action<{ words: WordState[] }>>
  setWords: ActionFunctionAny<Action<{ words: WordState[] }>>
}

const initialState: WordState[] = []

export const { getWords, setWords } = createActions<{ words: WordState[] }>(GET_WORDS, SET_WORDS)

export const words: Reducer<WordState[], Action<{ words: WordState[] }>> = handleActions(
  {
    [SET_WORDS]: (_state: WordState[], action: Action<{ words: WordState[] }>): WordState[] => action.payload.words
  },
  initialState
)
