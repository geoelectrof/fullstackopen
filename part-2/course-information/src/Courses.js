const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
          {props.part.name} {props.part.exercises}
      </p>
    )
  }
  
  const Content = (props) => {
    return (
      <>
         {props.parts.map( part => {
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
    const totalExercises = props.parts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      0,
    );
    return (
      <p><strong>total of {totalExercises} exercises</strong></p>
    )
  }
  
  const Courses = (props) => {
    return (
      <>
        {props.courses.map(course => {
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

export default Courses