const Part = (props) => {
  return(
    <div>
            {props.part.name} {props.part.exercise}
    </div>
  )
}

const Header = (props) => {

  return(
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Content = (props) => {

  return(
    <>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </>
  )
}

const Total = (props) => {
  let total = 0;

  {props.parts.map( part => {
    total += part.exercise;
  })}
  return(
    <>
      <p>Total = {total} </p>
    </>
  )
}


const App = () => {

  const course ={
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }


  return (
    <div>
      <Header course ={course} />
      <Content parts = {course.parts}/>
      <Total parts ={course.parts} />
    </div>
  )
}

export default App
