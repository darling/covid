import React, { Component } from 'react'
import * as data from 'jhucsse.covid'
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'
import moment from 'moment'
import Axios from 'axios'

class CountryGraph extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: [],
      isLoaded: false,
      isScaled: false,
      isGraphed: 0,
      status: 0,
      countryName: ''
    }

    this.handleToggleScale = this.handleToggleScale.bind(this)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.country !== this.props.country) {
      this.setState({ isLoaded: false, isGraphed: 0, isScaled: false })

      // Little remount trick I found, DONT TOUCH
      this.componentDidMount()
    }
  }

  componentDidMount () {
    if (this.props.cc === 'ALL') {
      const total = []

      this.setState({ status: 10 })

      Axios.get('https://pomber.github.io/covid19/timeseries.json')
        .then(res => {
          this.setState({ status: 20 })
          return res.data
        })
        .then(data => {
          if (this.props.country !== 'Everyone') {
            const country = this.props.country

            Object.keys(data[country]).forEach(date => {
              // [{date:, deaths:, recoveries:, confirmed:, existing:}]
              const day = data[country][date]

              total.push({
                date: new Date(day.date).getTime() + 86400000,
                deaths: day.deaths,
                recoveries: day.recovered,
                confirmed: day.confirmed,
                existing: day.confirmed - (day.recovered + day.deaths)
              })
            })
            return
          }

          Object.keys(data).forEach((country, index) => {
            const outIndex = index

            this.setState({ status: 20 + 80 * (index / data[country].length) })

            Object.keys(data[country]).forEach((date, index) => {
              // [{date:, deaths:, recoveries:, confirmed:, existing:}]
              const day = data[country][date]

              if (outIndex === 0) {
                total.push({
                  date: new Date(day.date).getTime() + 86400000,
                  deaths: day.deaths,
                  recoveries: day.recovered,
                  confirmed: day.confirmed,
                  existing: day.confirmed - (day.recovered + day.deaths)
                })
              } else {
                total[index].deaths += day.deaths
                total[index].recoveries += day.recovered
                total[index].confirmed += day.confirmed
                total[index].existing +=
                  day.confirmed - (day.recovered + day.deaths)
              }
            })
          })
        })
        .finally(() => {
          this.setState({ status: 100 })
          this.setState({
            data: total,
            isLoaded: true,
            countryName: this.props.country
          })
        })
    } else {
      this.setState({ status: 10 })
      data
        .getCountry({ cc: this.props.cc })
        .then(res => {
          // Can't return Object, returning array
          // schema: [{'1/11/20': 0}]
          this.setState({ status: 20 })
          return [res.deaths, res.recovered, res.confirmed]
        })
        .then(data => {
          const a = []
          Object.keys(data[0]).forEach((date, index) => {
            const obj = {
              date: new Date(date).getTime(),
              deaths: data[0][date],
              recoveries: data[1][date],
              confirmed: data[2][date],
              existing: data[2][date] - (data[0][date] + data[1][date])
            }
            a.push(obj)
            this.setState({ status: 20 + 80 * (index / data[0].length) })
          })

          // React states can't be objects for some reason, so we use an array of objects
          // data: [{date:, deaths:, recoveries:, confirmed:, existing:}]
          this.setState({ data: a })
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.setState({
            status: 100,
            isLoaded: true
          })
        })
    }
  }

  formatXAxis (tick) {
    return moment(tick).format('MM/DD')
  }

  graph (isloading) {
    if (isloading) {
      return (
        <progress
          className='progress is-small'
          value={this.state.status.toString()}
          max='100'
        >
          0%
        </progress>
      )
    }
    return (
      <ResponsiveContainer
        minHeight={100}
        minWidth={200}
        aspect={2}
        className={!isloading ? '' : 'is-hidden'}
      >
        <AreaChart data={this.state.data} margin={{ top: 10, bottom: 10 }}>
          <defs>
            <linearGradient id='colorDeaths' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#ff3d3d' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#ff8f8f' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorRecov' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#c7fff0' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#75ffda' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorExist' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#ffe5ad' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#ffd16e' stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='4 4' />
          <XAxis
            interval='preserveStart'
            tickCount={10}
            dataKey='date'
            tickFormatter={this.formatXAxis}
          />
          <YAxis
            interval='preserveStartEnd'
            tickCount={10}
            domain={this.state.isScaled ? [0, 100000] : ['auto', 'auto']}
          />
          <Tooltip content={<CustomToolTip />} />
          <Area
            animationDuration={500}
            animationEasing='ease-out'
            type='linear'
            stackId='1'
            dataKey='deaths'
            stroke='#ff3d3d'
            fillOpacity={1}
            fill='url(#colorDeaths)'
          />
          <Area
            animationDuration={500}
            animationEasing='ease-out'
            type='linear'
            stackId='1'
            dataKey='existing'
            stroke='#ffd16e'
            fillOpacity={1}
            fill='url(#colorExist)'
          />
          <Area
            animationDuration={500}
            animationEasing='ease-out'
            type='linear'
            stackId='1'
            dataKey='recoveries'
            stroke='#75ffda'
            fillOpacity={1}
            fill='url(#colorRecov)'
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }

  handleToggleScale () {
    this.setState(prevState => ({ isScaled: !prevState.isScaled }))
    console.log('isScaled: ', this.state.isScaled)
  }

  render () {
    return (
      <div className='box'>
        <h1
          onClick={this.handleToggleScale}
          className='has-text-centered title is-5'
        >
          {this.props.country} - Coronavirus Statistics
        </h1>
        <h1
          onClick={this.handleToggleScale}
          className='has-text-centered subtitle is-6'
        >
          Time vs. Amt. of People Effected
        </h1>
        <div className='columns is-vcentered' style={{ minHeight: 300 + 'px' }}>
          <div
            className={
              this.state.isLoaded
                ? 'column'
                : 'column is-half is-offset-one-quarter'
            }
          >
            {this.graph(!this.state.isLoaded)}
          </div>
        </div>
      </div>
    )
  }
}

class CustomToolTip extends Component {
  disNum (payload) {
    const returnArray = []

    payload.forEach(data => {
      returnArray.push(
        <p key={data.dataKey} style={{ color: data.color }}>
          {data.dataKey}: {data.value.toLocaleString()}
        </p>
      )
    })

    return returnArray.reverse()
  }

  render () {
    const { active } = this.props

    if (active) {
      const { payload, label } = this.props

      const formatLabel = moment(label).format('MMM Do, YY')

      return (
        <>
          <div className='notification'>
            <p>{formatLabel}</p>
            {this.disNum(payload)}
            <p>
              Total: {payload[0].value + payload[1].value + payload[2].value}
            </p>
          </div>
        </>
      )
    }

    return null
  }
}

export default CountryGraph
