const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  return (
    <p>{props.content.part} {props.content.exercises}</p>
  )
}
const Content = (props) => {

  return (
    <div>
      <Part content={props.content[0]}/>
      <Part content={props.content[1]}/>
      <Part content={props.content[2]}/>

    </div>
    
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.content[0].exercises+props.content[1].exercises+props.content[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ]


  return (
    <div>
      <Header course={course} />
      <Content content = {content}/>
      <Total content = {content} />
    </div>
  )
}

export default App
