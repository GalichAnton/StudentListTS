import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteStudent } from '../redux/actions'
import { IStudent } from '../Types'

interface IProps{
  student: IStudent
}


const Student: FC<IProps> = ({student}) => {
  const dispatch = useDispatch()

  const onDeleteStudent = (id:number) => {
    dispatch(DeleteStudent(id))
  }
  return (
    <div className="student__column">
      <div className="student__img">
        <img src={student.avatarUrl} alt="logo" />
      </div>
      <div className="student__info">
        <div className="student__name">
          <p className="student__top">Имя</p>
          <h1 className="student__bottom">{student.fullName}</h1>
        </div>
        <div className="student__age">
          <p className="student__top">Возраст</p>
          <h1 className="student__bottom age">{student.age}</h1>
        </div>
        <div className="student__gender">
          <p className="student__top">пол</p>
          <h1 className="student__bottom gender">{student.gender}</h1>
        </div>
        <div className="student__money">
          <p className="student__top">оплата</p>
          <h1 className="student__bottom pay">{student.payment}</h1>
        </div>
      </div>
      <div className="student__action">
        <div className="student__edit">
          <img src="./img/icons/edit.svg" alt="" />
        </div>
        <div className="student__remove" onClick={()=>onDeleteStudent(student.id)}>
          <img src="./img/icons/remove.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Student
