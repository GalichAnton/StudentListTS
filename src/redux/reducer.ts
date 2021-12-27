import { IStudent } from '../Types'
import { ActionsType } from './actions'

export interface IInitialState {
  students: IStudent[]
  popupOpen: boolean
}


const initialState: IInitialState = {
  students: [{
    id: 0,
    age: 0,
    fullName: '',
    gender: '',
    avatarUrl: '',
    payment: 0
  }],
  popupOpen: false
}



export const reducer = (state: IInitialState = initialState, action: ActionsType): IInitialState => {
  switch (action.type) {
    case 'DOWNLOAD':
      return { ...state, students: action.payload }
    case 'ADD_STUDENT':
      return {
        ...state,
        students: [...state.students, { ...action.payload, id: state.students.length  ? state.students[state.students.length - 1].id + 1 : 1 }]
      }
    case 'OPEN_POPUP':
      return {
        ...state,
        popupOpen: action.payload
      }
    case 'CLEAR_ALL':
      return { ...state, students: [] }
    case 'DELETE':
      return {...state, students: state.students.filter((student)=> student.id !== action.payload)}
    default:
      return state
  }
} 