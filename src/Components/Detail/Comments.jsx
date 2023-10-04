import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
// import { useSelector } from "react-redux";

const Comments = (id) => {
  // const {userInfo} = useSelector(state => state.signIn)
  const valueId = Object.values(id);
  const value = valueId[0];

  // const [comment, setComment] = useState("");
  const [comment, setComment] = useState({
    userId: 'a2210d45-a5c0-4204-8ef0-10889db8c19c',
    reportId: value,
    comment: '',
  });
  // const [commentsRealTime, setCommentsRealTime] = useState([]);

  // useEffect(() => {
  //     setCommentsRealTime()
  // })

  function onInputChange(event) {
    event.preventDefault();
    let value = event.target.value;
    // setComment(value);
    setComment({
      ...comment,
      comment: value,
    });

    // console.log(comment);
  }

  async function onSubmit(e) {
    // para enviar los comentarios
    e.preventDefault();

    axios
      .post('https://br-service.onrender.com/comments', comment) //
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Comment posted',
          showConfirmButton: false,
          timer: 3000,
        });
        setComment({ ...comment, comment: '' }); //vaciar el estado
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          position: 'top-end',
          icon: 'error', // confirmar que existe este icono en Swal
          title: 'Comment was not posted :(', // Mirar que pasa ahí XD
          showConfirmButton: false,
          timer: 3000,
        });
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea
        name="comment"
        id="comment"
        rows="4"
        cols="100"
        value={comment.comment}
        onChange={onInputChange}
      />
      <div>
        <button type="submit">COMMENTARIO</button>
      </div>
    </form>
  );
};

export default Comments;
