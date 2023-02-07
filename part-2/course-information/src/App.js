const Header = (props) => {
  console.log('header', props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log("part", props)
  return (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log('Content', props)
  console.log('Content', props.parts)
  return (
    <>
       {props.parts.map( part => {
         console.log("Content part map", part)
          return (
            <Part 
              key = {part.id}
              part = {part}
            />
          )
      })} 
      {/* <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} /> */}
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const Course = (props) => {
  console.log('Course', props)
  return (
  <div>
    <Header 
      course={props.course.name} 
    />
    <Content 
      parts = {props.course.parts}
    />
    {/* <Total 
      parts = {props.parts}
    /> */}
  </div>
  )
}




const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  console.log("App", course)

  return <Course course={course} />
}

export default App


