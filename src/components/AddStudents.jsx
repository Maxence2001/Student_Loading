import { useState } from "react"
import TextInput from "./TextInput";

const AddStudents = () => {
  const [name,setName] = useState('');
 

  const [firstName,setFirstName] = useState('');
  
  const [da,steDa] = useState('');
  


  const onSubmit = (e) => {
    e.preventDefault()

    alert(`Votre nom complet est ${firstName} ${name} et votre matricule est ${da}`);

    setFirstName('');
    setName('');
    steDa('');

  }

  return (
    <div className='container'>
    <h1>Ajouter un etudiant</h1>
    <form onSubmit={onSubmit}>
      <TextInput placeholder ={' Prenom'} text={firstName}  setText={setFirstName}/><br />
      <TextInput  placeholder ={ 'Nom de famille'}  text={name} setText={setName} /><br />
      <TextInput  placeholder={'Matricule'} text={da} setText={steDa} /><br />

      <input className="btn" type="submit" value="Ajouter" /><br />

    </form>
  </div>
  )
}

export default AddStudents