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
  console.log('total', props.parts)
  const totalExercises = props.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0,
  );
  return (
    <p><strong>total of {totalExercises} exercises</strong></p>
  )
}

const Courses = (props) => {
  console.log('Courses', props)
  return (
    <>
      {props.courses.map(course => {
        console.log('course map', course)
        return (
          <div>
            <Header 
              course={course.name} 
            />
            <Content 
              parts = {course.parts}
            />
            <Total 
              parts = {course.parts}
            />
          </div>
        )
      })}
    </>
  )
}




const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  console.log("App", courses)

  return <Courses courses={courses} />
}

export default App


