import { useState } from "react";
// import { useSelector } from "react-redux";


const Comments = ({id}) => {

    // const {userInfo} = useSelector(state => state.signIn)

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [commentsRealTime, setCommentsRealTime] = useState([]);

    useEffect(() => {
        setCommentsRealTime()
    })

    function onInputChange(event) {
        event.preventDefault();
        setComment(""); //vaciar el estado
        let value = event.target.value
        setComment(value);       
        
        console.log(comment);
    }

    const addComment =  async () => {

    }

    // async function onSubmit(e) { // para enviar los comentarios
    //     e.preventDefault();

    //     axios
    //         .post("http://localhost:3001/reports", dataReport) //
    //         .then(() => {
    //             navigate("/home");
    //             Swal.fire({
    //                 position: 'top-start',
    //                 icon: 'success',
    //                 title: 'Your report was submited',
    //                 showConfirmButton: false,
    //                 timer: 3000
    //               })
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         console.log("Hubo un problema al guardar el reporte");
    //         });
    // }

    return (
        <form action="">
            <textarea
                name="comment"
                id="comment"
                rows="4"
                cols="100"
                value={comment}
                onChange={onInputChange}
            />
            <div>
                <button type="submit">COMMENT</button>
            </div>
        </form>
    )
}

export default Comments;