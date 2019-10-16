import React, {Component} from 'react';
import "./bootstrap.min.css";
import Header from './components/Header.js'
import NewExamination from './components/NewExamination.js'
import ListAppointments from './components/ListAppointments.js'
  
//creo lo scheletro dell'app dove vado ad inserire tutti i coponenti figli
class App extends Component {
    state = {
      appointments : []
    }

    //utilizzo due cicli di vita di react per memorizzare gli appuntamenti nel local storage
    //quando l'applicazione viene ricaricata
    componentDidMount(){
      const appointmentsLS = localStorage.getItem('appointments');
      //se esiste qualcosa all'interno del local storage lo inserisco all'interno dello state
      if(appointmentsLS){
        this.setState({
          appointments : JSON.parse(appointmentsLS)//riconverto la stringa in una array di oggetti
        })
      }
    }
    //quando aggiungo o elimino un nuovo appuntamento
    componentDidUpdate(){
      localStorage.setItem('appointments', JSON.stringify(this.state.appointments));//converto il dato in stringa e lo invio nel local storage
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

    //eliminare l'appuntamento selezionato
    deleteAppointment = id => {
      //faccio una copia dello state
      const actualAppointment = [...this.state.appointments]
      //utilizzo filter per far uscire dall'array l'elemento con l'id selezionato
      const appointments = actualAppointment.filter(appointment => appointment.id !== id);
      //aggiorno lo state
      this.setState({
        appointments
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
            {/*creo il componente dove andranno a visualizzarsi gli appuntamenti memorizzati */}
            <div className='mt-5 col-md-8 '>
              <ListAppointments 
                appointments = {this.state.appointments} 
                deleteAppointment = {this.deleteAppointment}
              />
            </div>
          </div>
        </div>
       );
    }
  }
   


export default App;
