import { useState } from "react"

const Button = ({text, setter, feed }) => {
  return(
    <>
      <button onClick={() => setter(feed+1)} >{text}</button>
    </>
  )
}

const Statictics = ({good,neutral,bad}) => {

  if(good === 0 && neutral === 0 && bad === 0){
    return <p>No Feedback Given</p>
  }

  return(
    <div>
      <StatisticLine  text={"Good"} value={good}/>
      <StatisticLine  text={"Neutral"} value={neutral}/>
      <StatisticLine  text={"Bad"} value={bad}/>
      <StatisticLine  text={"All"} value={good+ neutral + bad}/>
      <StatisticLine  text={"Average"} value={(good-bad)/(good+ neutral + bad)}/>
      <StatisticLine  text={"Positive"} value={(good/(good+ neutral + bad))*100}/>
    </div>
    
  )
}

const StatisticLine = ({text,value}) => {

  return(
    <div>
      <table>
        <tbody>
          <tr>
            <th>{text}</th>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text = {"Good"} setter={setGood} feed={good}/>
      <Button text = {"Neutral"} setter={setNeutral} feed={neutral}/>
      <Button text = {"Bad"} setter={setBad} feed={bad}/>
      <Statictics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
