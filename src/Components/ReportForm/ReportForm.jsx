
import style from './ReportForm.module.css'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios"; 
// import { useState, useEffect} from "react";
//*----------------------------------------------------
// import { validations } from "./validations"

const ReportForm = () => {    

    const [dataReport, setDataReport] = useState({
        name: "",
        edad:"",  
        date: "",
        lugar:"",
        particularidades:"",
        foto:"",
        reporte:""

    })

    function onInputChange(e) {
        e.preventDefault();

        setDataReport({
            ...dataReport,
            [e.target.name]: e.target.value,
        });       
        
        console.log(dataReport);
    }

    //---------------claoudinary Foto----------------
    const [urlImage, setUrlImage] = useState("")

    const changeUploadImage = async(e) => {
        const file = e.target.files[0];

        const data = new FormData()

        data.append("file", file)
        data.append("upload_preset", "preset_pf")

        const response = await axios.post("https://api.cloudinary.com/v1_1/drhqzywsx/image/upload", data);

        // url de imagen de cloudinary
        // console.log(response.data.secure_url);
        setUrlImage(response.data.secure_url)
        setDataReport({
            ...dataReport,
            foto: response.data.secure_url,
        });

    }

    //eliminar imagen:
    const FuncionDeleteImage = () => {
        // podemos poner una ruta que elimie la imagen de la db
        setUrlImage("")
        setDataReport({
            ...dataReport,
            foto: "",
        });
    }
    
    // FormData() =
    // {
    //     file: {...},
    //     upload_preset: preset_pf
    // }

    //---------------claoudinary Reporte----------------
    const [urlReport, setUrlReport] = useState("")

    const changeUploadReport = async(e) => {
        const file = e.target.files[0];

        const data = new FormData()

        data.append("file", file)
        data.append("upload_preset", "preset_reporte_pf")

        const response = await axios.post("https://api.cloudinary.com/v1_1/drhqzywsx/image/upload", data);

        // url de imagen de cloudinary
        // console.log(response.data.secure_url);
        setUrlReport(response.data.secure_url)
        setDataReport({
            ...dataReport,
            reporte: response.data.secure_url,
        });

    }

    //eliminar Reporte:
    const FuncionDeleteReport = () => {
        // podemos poner una ruta que elimie la imagen de la db
        setUrlReport("")
        setDataReport({
            ...dataReport,
            reporte: "",
        });
    }
    
    // FormData() =
    // {
    //     file: {...},
    //     upload_preset: preset_pf
    // }

    //--------------------------------------------
    // const [archivo, setArchivo] = useState(null);

    // const handleCambioDeArchivo = (e) => {
    //     const archivoSeleccionado = e.target.files[0];
    //     if (archivoSeleccionado) {
    //         setArchivo(archivoSeleccionado);
    //     }
    // };

    return (
        <div className={style.container}>
            <form>

                <div>
                    <h1>Reporte B&R</h1>
                </div>                

                <div className={style.inlineFields2}>
                    <div className={style.formfield}>
                        <label>Nombre y Apellido</label>
                        <br />
                        <input
                            className={style.input}
                            onChange={onInputChange}
                            name="name"
                            type="text"
                            value={dataReport.name}
                            required
                        />            
                        
                    </div>

                    <div className={style.formfield}>
                        <label>Edad:</label>
                        <br />

                        <input
                            className={style.input}
                            onChange={onInputChange}
                            name="edad"
                            type="number"
                            value={dataReport.edad}
                            min={0}
                            max={99}
                            required
                        />
                        <br/>
                        
                    </div>
                </div>
                

                <div className={style.inlineFields}>
                    <div className={style.formfield}>
                        <label>Fecha a la que fue visto por ultima vez</label>
                        <br />
                        <input
                            className={style.input}
                            onChange={onInputChange}
                            name="date"
                            type="date"
                            value={dataReport.date}
                            required
                        />  
                    </div>
                
                    <div className={style.formfield}>
                        <label>Lugar donde fue visto por ultima vez</label>
                        <br />
                        <br />
                        <input
                            className={style.input}
                            onChange={onInputChange}
                            name="lugar"
                            type="text"
                            value={dataReport.lugar}
                            required
                    />  
                    </div>
                    
                    
                </div>
                
                <br />

                <div className={style.formfield}>
                    <label>Señas particulares</label>
                    <br />
                    <textarea
                        className={style.input}
                        onChange={onInputChange}
                        name="particularidades"                        
                        value={dataReport.particularidades}
                        rows={5}
                        required
                    />            
                    
                </div>

                <div className={style.formfield}>
                    <label>Fotografia</label>
                    <br />
                    <input
                        className={style.input}
                        onChange={changeUploadImage}
                        name="foto"
                        type="file"
                        accept="image/*" // Especifica los tipos de archivo permitidos
                        // onChange={changeUploadImage}
                        // value={videogame.name}
                        required
                    />
                    {/* si subio archivo muetra el mensaje, el nombre y la imagen subida */}                    
                    {urlImage && (
                        <div>
                            {/* <p>Archivo seleccionado: {urlImage.name}</p> */}
                            <img src={urlImage} className={style.imagenSubida} alt="Imagen seleccionada" />
                            <br />
                            <button onClick={()=>FuncionDeleteImage()}>
                                Eliminar imagen
                            </button>
                        </div>
                    )}
                    
                </div>

                <div className={style.formfield}>
                    <label>Subir Reporte Oficial</label>
                    <br />
                    <input
                        className={style.input}
                        onChange={changeUploadReport}
                        name="reporte"
                        type="file"
                        accept="image/*" // permite imagenes y sus variantes
                        // onChange={handleCambioDeArchivo}
                        
                        required
                    />
                    {urlReport && (
                        <div>
                            {/* <p>Archivo seleccionado: {urlImage.name}</p> */}
                            <img src={urlReport} className={style.imagenSubida} alt="Imagen seleccionada" />
                            <br />
                            <button onClick={()=>FuncionDeleteReport()}>
                                Eliminar Reporte
                            </button>
                        </div>
                    )}                
                    
                    
                </div>

                <br />
                <div className={style.contenedorBoton}>
                    <button type="submit" className={style.submitbutton}>Enviar Información</button>
                </div>

                        {/* mapa */}
                <div>
                    {/* <hr />
                    <h1>Contacto</h1> */}
                    <hr />
                    {/* hay que usar camelCase para que no rompa  */}
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240864.19466040455!2d-99.30842498337833!3d19.390659363934184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2zQ2l1ZGFkIGRlIE3DqXhpY28sIENETVgsIE3DqXhpY28!5e0!3m2!1ses!2sco!4v1694555715837!5m2!1ses!2sco"
                    width="600"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen 
                    referrerPolicy="no-referrer-when-downgrade" 
                    ></iframe>
                </div>

                
            </form>
        </div>
    )
}

export default ReportForm;