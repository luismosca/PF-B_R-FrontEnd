import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import styles from './Detail.module.css';
// import { useSelector } from "react-redux";

const Comments = (id) => {
  // const {userInfo} = useSelector(state => state.signIn)
  const user = useSelector((state) => state.user);
  const valueId = Object.values(id);
  const value = valueId[0];

  // const [comment, setComment] = useState("");
  const [comment, setComment] = useState({
    userId: user.id,
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
          title: 'Comentario ennviado, en espera de ser aprobado',
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
    <form onSubmit={onSubmit} style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={user.image}
          alt="userImage"
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            objectFit: 'cover',
            margin: '5px',
          }}
        />
        <label style={{ margin: '2px' }}>{user.name}</label>
      </div>

      <textarea
        name="comment"
        id="comment"
        rows="4"
        cols="100"
        value={comment.comment}
        onChange={onInputChange}
        style={{
          maxWidth: '100%',
          width: '100%',
          borderRadius: '20px',
          padding: '10px',
        }}
      />
      <div>
        <button type="submit" className={styles.commentButton}>
          COMENTAR
        </button>
      </div>
    </form>
  );
};

export default Comments;
