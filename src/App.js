import React, { Component } from 'react';
import './App.css';
import './students.scss';
import berlinStudents from './data.json';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Counter from './Counter';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allStudents: berlinStudents,
      selectedCountry:""
    }
  }

  onClickHandler = country => {
    this.setState({selectedCountry: country});
  }  

  render() {
    let filteredStudents = this.state.allStudents.filter( (student) => {
        if(!this.state.selectedCountry) return student;
        if(student.country === this.state.selectedCountry) return student;
      }).map(student => {
      return(
      <IdCard 
        firstName={student.firstName}
        lastName={student.lastName}
        img={student.img}
        country={student.country}
        isStudent={student.isStudent}
      />)
    })

    return (
      <main>
        <div className='counter-div'>
          <Counter />
        </div>
        <div className='students-div'>
          <div className='students-btn'>
            <button onClick={() => this.onClickHandler("")}>All</button>
            <button onClick={() => this.onClickHandler("England")}>England</button>
            <button onClick={() => this.onClickHandler("Germany")}>Germany</button>
            <button onClick={() => this.onClickHandler("USA")}>USA</button>
          </div>
         {filteredStudents}
        </div>
        <div className='greetings-div'>
          <Greetings lang='de'>Ludwiiig</Greetings>
        </div>
        <div className='random-div'>
          <Random min={1} max={100}/>
          <Random min={69} max={420}/>
        </div>
        <div className='color-div'>
          <BoxColor r={255} g={0} b={0}/>
        </div>
        <div className='credit-card-div'>
          <CreditCard 
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" />
          <CreditCard 
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" />
          <CreditCard 
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" />
        </div>
      </main>
    );
  }
}

export default App;
