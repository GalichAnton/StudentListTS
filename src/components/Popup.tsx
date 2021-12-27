import { ChangeEvent, FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddStudent } from '../redux/actions'
import { IInitialState } from '../redux/reducer'
import { IStudent } from '../Types'

interface IProps {
  openPopup: (isOpen: boolean) => void
}

const Popup: FC<IProps> = ({ openPopup }) => {
  const state = useSelector((state: IInitialState) => state)
  const dispatch = useDispatch()
  const [student, setStudent] = useState<IStudent>({
    id: 0,
    fullName: '',
    age: 0,
    payment: 0,
    gender: '',
    avatarUrl: ''
  })
  const addStudent = (student: IStudent) => {
    dispatch(AddStudent(student))
  }

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget
    setStudent({
      ...student,
      [name]: value
    })
  }

  return (
    <div className={`${state.popupOpen ? 'popup' : 'popup_closed'}`} onClick={() => openPopup(false)}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <img onClick={() => openPopup(false)} className="student__edit popup-close" src="./img/icons/remove.svg" alt="popup" />
        <div className="popup__title">
          <input id='fullName' name='fullName' type="text" placeholder="Введите имя и фамилию" value={student.fullName} onChange={onChange} />
        </div>
        <div className="popup__input">
          <input id='age' type="text" placeholder="Возраст" name='age' value={student.age} onChange={onChange} />
          <select id='gender' name='gender' value={student.gender} onChange={onChange}>
            <option>Пол</option>
            <option>Мужчина</option>
            <option>Женщина</option>
          </select>
          <input id='payment' type="text" placeholder="Оплачено" name='payment' value={student.payment} onChange={onChange} />
        </div>
        <div className="popup__button">
          <button className="popup__button-send button-pushed" onClick={() => {
            addStudent(student)
            openPopup(false)
          }}
          >Добавить</button>
        </div>
      </div>
    </div>
  )
}

export default Popup
