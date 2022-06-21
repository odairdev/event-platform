import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string
}

function App() {

  const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY)

  return (
    <div className="App">
      <ul>
        {data && data.lessons.map(lesson => (
          <li>{lesson.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
