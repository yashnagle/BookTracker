import {useState} from 'react'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [page, setPage] = useState('')
    const [reminder, setReminder] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add text')
            return
        }

        onAdd({text, day, page, reminder})

        //Clearing the form
        setText('')
        setDay('')
        setPage('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Book</label>
                <input type='text' placeholder='Book Name' value = {text} onChange={(e) => setText(e.target.value)}/>

            </div>

            <div className = 'form-control'>
                <label>Author</label>
                <input type='text' placeholder='Authors Name' value = {day} onChange={(e) => setDay(e.target.value)}/>

            </div>

            <div className = 'form-control'>
                <label>Pages</label>
                <input type='text' placeholder='Length of the book' value = {page} onChange={(e) => setPage(e.target.value)}/>

            </div>

            <div className = 'form-control form-control-check'>
                <label>Read</label>
                <input type='checkbox' checked={reminder} value = {reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>

                <input type='submit' value='Save Book'
                 className='btn btn-block'/>

            </div>
        </form>
    )
}

export default AddTask
