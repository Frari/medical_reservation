import React, {Component} from 'react';
import "./bootstrap.min.css";
import Header from './components/Header.js'
import NewExamination from './components/NewExamination.js'
  
//creo lo scheletro dell'app dove vado ad inserire tutti i coponenti figli
class App extends Component {
    state = {
      appointments : []
    }

    //passare i dati dallo state di NewExamination ad App.js/si utilizza una funzione per far passare i dati da figlio a padre
    createNewAppointment = (data) => {
      //copiare lo state attuale
      const appointmentActual = [...this.state.appointments, data]
      //aggiungere il nuovo state
      this.setState({
        appointments : appointmentActual
      })
    }

    render() { 
      return ( 
        <div className='container'>
          <Header 
          titolo='Veterinary booking system'
          />
          <div className='row d-flex justify-content-center'> {/*classe bootstrap per centrare il div del form */}
            <NewExamination 
            createNewAppointment = {this.createNewAppointment}
            />
          </div>
        </div>
       );
    }
  }
   


export default App;
