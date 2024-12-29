import './App.css'
import Comment from './components/comment'
import commentsData from './data/comments.ts'

function App() {
  return (
    <div>
      <Comment commentData ={commentsData} />
      </div>
  )
}

export default App