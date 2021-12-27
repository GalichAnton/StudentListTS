import axios from 'axios';
import { Dispatch } from 'redux';
import { IStudent } from './../Types';

export interface IDeleteStudent {
  type: 'DELETE'
  payload: number
}

export interface IDownloadStudents {
  type: 'DOWNLOAD'
  payload: IStudent[]
}

export interface IAddStudent {
  type: 'ADD_STUDENT'
  payload: IStudent
}
export interface IPopupOpen {
  type: 'OPEN_POPUP'
  payload: boolean
}

export interface IClear {
  type: 'CLEAR_ALL'
}

export const AddStudent = (student:IStudent) => async (dispatch: Dispatch<IAddStudent>) => {
  try {
    await axios.post('https://61c9742520ac1c0017ed8c63.mockapi.io/students',student)
    dispatch({
      type: 'ADD_STUDENT',
      payload: student
    })
  } catch (e) {
    console.log('Ошибочка', e)
  }
} 

export const DownloadStudents = () => async (dispatch: Dispatch<IDownloadStudents>) => {
  try {
    const res = await axios.get('https://61c9742520ac1c0017ed8c63.mockapi.io/students')
    dispatch({
      type: 'DOWNLOAD',
      payload: res.data
    })
  } catch (e) {
    console.log('Ошибочка', e)
  }
}

export const DeleteStudent = (id: number) => async (dispatch: Dispatch<IDeleteStudent>) => {
  try {
    await axios.delete(`https://61c9742520ac1c0017ed8c63.mockapi.io/students/${id}`)
    dispatch({
      type: 'DELETE',
      payload: id
    })
  } catch (e) {
    console.log('Ошибочка', e)
  }
}

/* export const AddStudent = (student: IStudent): IAddStudent => {
  return {
    type: 'ADD_STUDENT',
    payload: student
  }
}
 */
export const PopupOpen = (isOpen: boolean): IPopupOpen => {
  return {
    type: 'OPEN_POPUP',
    payload: isOpen
  }
}

export const ClearAll = () => {
  return {
    type: 'CLEAR_ALL'
  }
}

export type ActionsType = IDownloadStudents | IAddStudent | IPopupOpen | IClear |IDeleteStudent