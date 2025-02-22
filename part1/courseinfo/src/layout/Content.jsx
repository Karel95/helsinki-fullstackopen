import Part from "../components/Part"

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} partName={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}

export default Content