import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Empty from './components/Empty';
import Popup from './components/Popup';
import Student from './components/Student';
import { ClearAll, DownloadStudents, PopupOpen } from './redux/actions';
import { IInitialState } from './redux/reducer';




function App() {
  const state = useSelector((state: IInitialState) => state.students)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(DownloadStudents())
  }, [])


  const openPopup = (isOpen: boolean) => {
    dispatch(PopupOpen(isOpen))
  }

  const clearStudents = () => {
    dispatch(ClearAll())
  }

  return (
    <div className='App'>
      <div className="container">
        {state.length ? <div className="students">
          {state.map((student) => (
            <Student key={student.id} student={student} />
          ))}
        </div> :
          <Empty />
        }
        <div className="stick"></div>
        <div className="total">
          <div className="total__count">
            <p className="total__title">Общий доход:</p>
            <h1 className="total__gain">{state.reduce((acc, prev) => {
              return acc + Number(prev.payment)
            }, 0)}</h1>
          </div>
          <div className="total__people">
            <p className="total__written">Всего записано:</p>
            <h1 className="total__student">{state.length} человека</h1>
          </div>
          <div className="button">
            <button className="add__student button-pushed" onClick={() => openPopup(true)}>Добавить студента</button>
            <button className="clear__student button-pushed" onClick={() => clearStudents()}>Очистить список</button>
          </div>
        </div>
      </div>
      <Popup openPopup={openPopup} />
    </div>
  );
}

export default App;
