import React, { Component } from 'react'

class Table extends Component {
  constructor (props) {
    super(props)

    this.setState({
      cols: [
        { key: 'country', label: 'Country' },
        { key: 'cases', label: 'Cases' },
        { key: 'todayCases', label: 'Cases (today)' },
        { key: 'deaths', label: 'Deaths' },
        { key: 'todayDeaths', label: 'Deaths (Today)' },
        { key: 'recovered', label: 'Recovered' },
        { key: 'critical', label: 'Critical' }
      ]
    })
    this.genHeaders = this.genHeaders.bind(this)
    this.genRows = this.genRows.bind(this)
  }

  genHeaders () {
    const cols = this.state.cols

    return cols.map(col => {
      return <th key={col.key}>{col.label}</th>
    })
  }

  genRows () {
    const cols = this.state.cols
    const data = this.props.data

    return data.map((country, i) => {
      const countryData = cols.map((colData, i) => {
        return <td key={i}>{country[colData.key]}</td>
      })
      return <tr key={i}>{countryData}</tr>
    })
  }

  render () {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>{this.genHeaders()}</tr>
          </thead>
          <tbody>{this.genRows()}</tbody>
        </table>
      </div>
    )
  }
}

export default Table
