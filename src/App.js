import { useState } from 'react';
import './App.css';

function App() {
  const [formFields, setFormFields] = useState([
    { name: '', age: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      name: '',
      age: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="App">
      <form className='from' onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
              className='name'
                name='name'
                placeholder='Name'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input 
              className='age'
                name='age'
                placeholder='Age'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <button className='remove-btn' onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button className='add-btn' onClick={addFields}>Add More..</button>
      <br />
      <button className='submit-btn' onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
