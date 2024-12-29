import './comment.css'
import { CommentType } from '../data/comments'

type CommentProps = {
  commentData: CommentType[];
};

const comment = (props) => {
  const {commentData} = props;
  return (
    <>
      <h1>
        Hii This is PRS
      </h1>
      <div className='commentContainer'>
        <div> Comment 1</div>
        <div className='controls'>
          <span>View reply</span>
          <span>Add reply</span>
        </div>
      </div>
    </>

  )
}

export default comment