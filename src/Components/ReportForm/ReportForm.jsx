
import style from './ReportForm.module.css'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/B&R.png'
import { NavBar } from '../NavBar/NavBar';
// import axios from "axios"; 
// import { useState, useEffect} from "react";
//*----------------------------------------------------
// import { validations } from "./validations"



const ReportForm = () => {    
    const navigate = useNavigate();

    const [dataReport, setDataReport] = useState({
        name: "",
        age:"",  
        date: "",        
        particular_signs:"",
        image:"",
        court_order:"",
        description:"",
        gender:"",
        birthday_date:"",
        nationality:"",
        ethnicity:"",
        hair_style:"",
        hair_color:"",
        eyes_color:"",
        height:"",
        weight:"",
        clothes:"",
        location:"",

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
            image: response.data.secure_url,
        });

    }

    //eliminar imagen:
    const FuncionDeleteImage = () => {
        // podemos poner una ruta que elimie la imagen de la db
        setUrlImage("")
        setDataReport({
            ...dataReport,
            image: "",
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
            court_order: response.data.secure_url,
        });

    }

    //eliminar Reporte:
    const FuncionDeleteReport = () => {
        // podemos poner una ruta que elimie la imagen de la db
        setUrlReport("")
        setDataReport({
            ...dataReport,
            court_order: "",
        });
    }
    
    // FormData() =
    // {
    //     file: {...},
    //     upload_preset: preset_pf
    // }

    //-------------------onSubmit -------------------------
    async function onSubmit(e) {
        e.preventDefault();
        
        axios
            .post("http://localhost:3001/reports", dataReport)
            .then(() => {
                navigate("/home");
            })
            .catch((err) => {
                console.log(err.message);
            console.log("Hubo un problema al guardar el reporte");
            });
    }

    return (
        
        <div>
                <div>
                    <NavBar />
                </div>

                <div >
                    <a href="/home">
                        <img src={logo} alt="Logo" className={style.logo} />
                    </a>
                </div>
                
                <div className={style.reportContainer}>

                

                <div>
                    <form onSubmit={onSubmit} className={style.form}>

                    <div >
                        <h1 className={style.h1report}>Reporte B&R</h1>
                    </div>                

                    <div className={style.inlineFields2}>
                        <div className={style.formfield}>
                            <label className={style.labelreport} >Nombre y Apellido (Completos)</label  >
                            <br/>
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="name"
                                type="text"
                                value={dataReport.name}
                                required
                            />            
                            
                        </div>

                        <div className={style.formfield}>
                            <label className={style.labelreport}  >Edad:</label  >
                            <br/>
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="age"
                                type="number"
                                value={dataReport.age}
                                min={0}
                                max={99}
                                required
                            />
                            <br/>
                            
                        </div>
                    </div>
                    

                    <div className={style.inlineFields}>
                        <div className={style.formfield}>
                            <label className={style.labelreport}  >Fecha a la que fue visto por ultima vez</label  >
                            {/* <br /> */}
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="date"
                                type="date"
                                value={dataReport.date}
                                required
                            />  
                        </div>
                    
                        <div className={style.formfield}>
                            <label  className={style.labelreport} >Lugar donde fue visto por ultima vez</label  >
                            <br />
                            <br />
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="location"
                                type="text"
                                value={dataReport.location}
                                required
                        />  
                        </div>
                        
                        
                    </div>

                    <div className={style.formfield}>
                        <label  className={style.labelreport} >Resumen de lo hechos</label  >
                        <br />
                        <textarea
                            className={style.inputForm}
                            onChange={onInputChange}
                            name="description"                        
                            value={dataReport.description}
                            rows={5}
                            required
                        />            
                        
                    </div>
                    
                    <br />

                    

                    <div className={style.formfield}>
                        <label  className={style.labelreport} >Fotografia</label  >
                        <br />
                        <input
                            className={style.inputForm}
                            onChange={changeUploadImage}
                            name="image"
                            type="file"
                            accept="image/*" // Especifica los tipos de archivo permitidos
                            // onChange={changeUploadImage}
                            // value={videogame.name}
                            required
                        />
                        {/* si subio archivo muetra el mensaje, el nombre y la imagen subida */}                    
                        {urlImage && (
                            <div className={style.contenedorimg}>
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
                        <label  className={style.labelreport} >Subir Reporte Oficial</label  >
                        <br />
                        <input
                            className={style.inputForm}
                            onChange={changeUploadReport}
                            name="court_order"
                            type="file"
                            accept="image/*" // permite imagenes y sus variantes
                            // onChange={handleCambioDeArchivo}
                            
                            required
                        />
                        {urlReport && (
                            <div className={style.contenedorimg}>
                                {/* <p>Archivo seleccionado: {urlImage.name}</p> */}
                                <img src={urlReport} className={style.imagenSubida} alt="Imagen seleccionada" />
                                <br />
                                <button onClick={()=>FuncionDeleteReport()}>
                                    Eliminar Reporte
                                </button>
                            </div>
                        )}                
                        
                        
                    </div>

                    
                    
                    <div className={style.inlineFields3}>
                        <div className={style.formfield}>
                            <label className={style.labelreport}  >Genero</label  >
                            <br />
                            
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="gender"
                                type="text"
                                value={dataReport.gender}
                                placeholder='M / F / OTROS'
                                required
                            />  
                        </div>

                        <div className={style.formfield}>
                            <label  className={style.labelreport} >Fecha de nacimiento</label  >
                            {/* <br /> */}
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="birthday_date"
                                type="date"
                                value={dataReport.birthday_date}
                                required
                            />  
                        </div>

                        <div className={style.formfield}>
                            <label className={style.labelreport} >Nacionalidad</label  >
                            <br />
                            
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="nationality"
                                type="text"
                                value={dataReport.nationality}
                                required
                        />  
                        </div>
                    </div>

                    

                    <div className={style.formfield}>
                        <label  className={style.labelreport} >Estilo de cabello</label  >
                        <br />
                        
                        <input
                            className={style.inputForm}
                            onChange={onInputChange}
                            name="hair_style"
                            type="text"
                            value={dataReport.hair_style}
                            required
                    />  
                    </div>
                    
                    <div className={style.inlineFields3}>
                        <div className={style.formfield}>
                            <label className={style.labelreport}  >Etnia</label  >
                            <br />
                            
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="ethnicity"
                                type="text"
                                value={dataReport.ethnicity}
                                required
                        />  
                        </div>

                        <div className={style.formfield}>
                            <label  className={style.labelreport} >Color de cabello</label  >
                            <br />
                            
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="hair_color"
                                type="text"
                                value={dataReport.hair_color}
                                required
                        />  
                        </div>
                        
                        <div className={style.formfield}>
                            <label  className={style.labelreport} >Color de ojos</label  >
                            <br />
                            
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="eyes_color"
                                type="text"
                                value={dataReport.eyes_color}
                                required
                        />  
                        </div>
                    </div>

                    <div className={style.formfield}>
                        <label  className={style.labelreport} >Ropa que llevaba puesto en momento de la desaparicion</label  >
                        <br />
                        <textarea
                            className={style.inputForm}
                            onChange={onInputChange}
                            name="clothes"                        
                            value={dataReport.clothes}
                            rows={5}
                            required
                        />            
                        
                    </div>  
                    
                    <div className={style.inlineFields3Long}>
                        <div className={style.formfield}>
                            <label className={style.labelreport}  >Altura en CM</label  >
                            <br />
                            
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="height"
                                type="number"
                                value={dataReport.height}
                                min={0}
                                max={250}
                                required
                        />  
                        </div>

                        <div className={style.formfield}>
                            <label className={style.labelreport}  >Peso en KG</label  >
                            <br />
                            
                            <input
                                className={style.inputForm}
                                onChange={onInputChange}
                                name="weight"
                                type="number"
                                value={dataReport.weigth}
                                min={0}
                                max={200}
                                required
                        />  
                        </div>

                        {/* <div className={style.formfield}>
                            <label  >Ubicacion (???)</label  >
                            <br />
                            
                            <input
                                className={style.input}
                                onChange={onInputChange}
                                name="location"
                                type="text"
                                value={dataReport.location}
                                required
                        />  
                        </div> */}

                    </div>

                    <div className={style.formfield}>
                        <label className={style.labelreport} >Señas particulares</label  >
                        <br />
                        <textarea
                            className={style.inputForm}
                            onChange={onInputChange}
                            name="particular_signs"                        
                            value={dataReport.particular_signs}
                            rows={5}
                            placeholder='Tattoos, cicatrices y cualquier señal relevante '
                            required
                        />            
                        
                    </div>

                            

                    


                    <br />
                    <div className={style.contenedorBoton}>
                        <button type="submit" className={style.submitbutton}>Enviar Información</button>
                    </div>

                            {/*--------------------- mapa --------------------- */}
                    {/* <div> */}
                        {/* <hr />
                        <h1>Contacto</h1> */}
                        {/* <hr /> */}
                        {/* hay que usar camelCase para que no rompa  */}
                        {/* <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240864.19466040455!2d-99.30842498337833!3d19.390659363934184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2zQ2l1ZGFkIGRlIE3DqXhpY28sIENETVgsIE3DqXhpY28!5e0!3m2!1ses!2sco!4v1694555715837!5m2!1ses!2sco"
                            width="600"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen 
                            referrerPolicy="no-referrer-when-downgrade" 
                        ></iframe> */}
                    {/* </div> */}

                    
                </form>
                </div>


                </div>
        </div>
        
    )
}

export default ReportForm;