const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.name}</h1>
  )
}
const Part = (props) => {
  console.log(props)
  return (
    <p>{props.part.part} {props.part.exercises}</p>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </div>
    
  )
}
const Total = (props) => {
  console.log(props)  
  return (
    <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { part: 'Fundamentals of React', exercises: 10 },
      { part: 'Using props to pass data', exercises: 7 },
      { part: 'State of a component', exercises: 14 },
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts} />
    </div>
  )
}

export default App
