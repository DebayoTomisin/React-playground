import React, { useState } from "react"
import {CheckBox} from './CheckBox'
const Check = () => {

    const [dataSource, setDataSource] = useState([])

    const data = [
        {id: 1, value: "banana", isChecked: false},
        {id: 2, value: "apple", isChecked: false},
        {id: 3, value: "mango", isChecked: false},
        {id: 4, value: "grap", isChecked: false}
    ]

    setDataSource(data)

    const handleAllChecked = event => {
        let data = dataSource
        data.forEach(data => data.isChecked = event.target.checked)
        setDataSource(data)
        console.log(dataSource)
    }
    

    const handleCheckChildElement = event => {
        let data = dataSource
        data.forEach(item => {
            if(item.value === event.target.value)
                item.isChecked = event.target.checked
            console.log(item)
        })
        setDataSource(data)
        //console.log(dataSource)
    }

    /*const handleCheckChildElement = (event) => {
        let fruites = this.state.fruites
        fruites.forEach(fruite => {
           if (fruite.value === event.target.value)
              fruite.isChecked =  event.target.checked
        })
        this.setState({fruites: fruites})
    }*/

    return(
        <div>
            <h3>Jesus, I just want you to know, I will make room</h3>
            <input type="checkbox" onChange={handleAllChecked} value="checkedall"/>Check or Uncheck all
            <ul>
                {
                    dataSource.map((data, index) => {
                        return ( <CheckBox  key={index} handleCheckChildElement={handleCheckChildElement} {...data}/> )
                    })
                }
            </ul>
        </div>
        
    )
}

export default Check

/*import React, { Component } from 'react'


class CheckedInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruites: [
        {id: 1, value: "banana", isChecked: false},
        {id: 2, value: "apple", isChecked: false},
        {id: 3, value: "mango", isChecked: false},
        {id: 4, value: "grap", isChecked: false}
      ]
    }
  }
  
  handleAllChecked = (event) => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => fruite.isChecked = event.target.checked) 
    this.setState({fruites: fruites})
  }

  handleCheckChieldElement = (event) => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => {
       if (fruite.value === event.target.value)
          fruite.isChecked =  event.target.checked
    })
    this.setState({fruites: fruites})
  }


  render() {
    return (
      <div className="App">
      <h1> Check and Uncheck All Example </h1>
      <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" /> Check / Uncheck All
        <ul>
        {
          this.state.fruites.map((fruite, index) => {
            return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
          })
        }
        </ul>
      </div>
    );
  }
}

export default CheckedInput */
