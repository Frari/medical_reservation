import React, {Component} from 'react';
import uuid from 'uuid';

//creo una copia dello state per azzerare gli input dopo il submit
const stateStart = { 
                        appointment : {
                            pet : '',
                            owner : '',
                            date : '',
                            time : '',
                            symptoms : ''
                        },
                        error : false
                    }

class NewExamination extends Component {
    state = { ...stateStart} //creo una copia successiva. Qui prima c'era lo state originale
     
    //quando l'utente scrive nel form
     handleChange = (e) => {
        //inserire quello che l'utente scrive dentro state
        this.setState({
            appointment : {
                ...this.state.appointment, /*crea una copia di state in modo che non si cancelli cosa non si sta modificando */
                [e.target.name] : e.target.value
            }
        })
     }
     //quando l'utente invia il form
     handleSubmit = (e) => {
        //metodo utilizzato anche per le chiamate ajax
         e.preventDefault();

         //estrarre i valori dallo state
        const {pet, owner, date, time, symptoms} = this.state.appointment;
         //validare i valori in modo che non siano vuoti
        if(pet === '' || owner === '' || date ==='' || time ==='' || symptoms ===''){
            this.setState({
                error : true
            });
            //bloccare l'esecuzione
            return;
        }
         //creare la copia dell'oggetto appointment per assegnarli un id univoco
         const newAppointment = {...this.state.appointment}
         newAppointment.id = uuid();
         //aggiungere i valori allo state di App
        //  this.props.createNewAppointment(this.state.appointment)----cambiato perchè passo una copia e non più l'originale
         this.props.createNewAppointment(newAppointment);

         //inserire nello state origianale la copia cioè stataStart
         this.setState({
             ...stateStart
         })
     }

    
     render() { 
        //estraggo il valore di error dallo state per visualizzare il messaggio di errore
        const {error} = this.state;


        return ( 
            <div className='card mt-5 py-5'>
                <div className='card-body'>
                    <h2 className='card-title text-center mb-5'>
                        Fill out the form to have a new appointment
                    </h2>
                    
                    { error ? <div className='alert alert-danger mt-2 mb-5 text-center'> All fields are obligatory </div> : null}

                    <form onSubmit = {this.handleSubmit}>
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>
                                Pet Name
                            </label>
                            <div className='col-sm-8 col-lg-10'>
                                <input
                                    className='form-control'
                                    type='text'
                                    placeholder='Name pet'
                                    name='pet' 
                                    onChange = {this.handleChange}
                                    value = {this.state.appointment.pet}
                                />
                            </div>
                        </div>{/*form group end*/}
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>
                                Pet owner Name
                            </label>
                            <div className='col-sm-8 col-lg-10'>
                                <input
                                    className='form-control'
                                    type='text'
                                    placeholder='Pet owner name'
                                    name='owner'
                                    onChange = {this.handleChange}
                                    value = {this.state.appointment.owner} 
                                />
                            </div>
                        </div>{/*form group end*/}
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label mt-2'>
                                Date
                            </label>
                            <div className='col-sm-8 col-lg-4 mt-2'>
                                <input
                                    className='form-control'
                                    type='date'
                                    name='date'
                                    onChange = {this.handleChange}
                                    value = {this.state.appointment.date} 
                                />
                            </div>
                            {/*imput del  time nello stesso form group di date */}
                            <label className='col-sm-4 col-lg-2 col-form-label mt-2'>
                                Time
                            </label>
                            <div className='col-sm-8 col-lg-4 mt-2'>
                                <input
                                    className='form-control'
                                    type='time'
                                    name='time'
                                    onChange = {this.handleChange}
                                    value = {this.state.appointment.time} 
                                />
                            </div>
                        </div>{/*form group end*/}
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>
                                Symptoms
                            </label>
                            <div className='col-sm-8 col-lg-10'>
                                <textarea className='form-control' name='symptoms' placeholder='Add simptoms'
                                 onChange = {this.handleChange}
                                 value = {this.state.appointment.symptoms}>                                   
                                </textarea>
                            </div>
                        </div>{/*form group end*/}
                        <input type='submit' className='py-3 mt-2 btn btn-success btn-block' 
                        value='Add new appointment' />
                    </form>
                </div>
            </div>
         );
    }
}
 
export default NewExamination;