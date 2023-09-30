// import axios from "axios";
import style from './About.module.css'
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import logo from '../../assets/B&R.png'
import { NavBar } from "../NavBar/NavBar";

// ! condicionar formulario

//*----------------------------------------------------


const About = () => {



//----------------------------------------------------------------

    return (

        <div>

            <div>
                <div >
                    <a href="/home">
                        <img src={logo} alt="Logo" className={style.logo} />
                    </a>
                </div>

                <div>
                    <NavBar />
                </div>

            </div>

            <div className={style.aboutContainer}>

                



                <div className={style.paragraphContainer}>

                    <div className={style.containerLeftParagraph}>

                        <div className={style.containerH1}>
                            <h1>Acerca de la Aplicación B&R - Búsqueda & Rescate</h1>
                        </div >
                        
                        <div className={style.containerParrafo}>
                            <p className={style.leftParagraph}>                    
                                Bienvenido a B&R - Búsqueda & Rescate, la aplicación que marca la diferencia cuando se trata de buscar a personas desaparecidas. Somos un equipo de voluntarios comprometidos con la noble tarea de reunir a familias y seres queridos en momentos de angustia. Permítenos explicarte cómo nuestra aplicación se convierte en una herramienta esencial tanto para los voluntarios como para aquellos que buscan a sus seres queridos.               
                            </p>  
                        </div>
                    

                    </div>
                    
                    
                    <div className={style.containerImage}>
                        <img src="https://estarbien.ibero.mx/wp-content/uploads/redes_apoyo.jpg" className={style.imagenParagraph} alt="imagen" />
                    </div>
                </div>






                <div className={style.paragraphContainerRight}>

                    <div className={style.containerImage}>
                        <img src="https://estarbien.ibero.mx/wp-content/uploads/redes_apoyo.jpg" className={style.imagenParagraph}alt="imagen" />
                    </div>

                    <div className={style.containerRightParagraph}>

                        <div className={style.containerH1}>
                            <h1>Como Voluntario</h1>
                        </div>

                        <div className={style.containerParrafo}>
                            <p className={style.rightParagraph}>
                            ¿Deseas hacer la diferencia? Como voluntario de B&R, tendrás la oportunidad de colaborar en la búsqueda de personas desaparecidas en tu área o en la zona que elijas. Nuestra aplicación web te proporcionará información actualizada sobre las personas desaparecidas en tu región y te permitirá contribuir a la búsqueda de estas personas de varias maneras:

                            Reporta Novedades: Si tienes información relevante sobre la búsqueda de una persona desaparecida, puedes compartirlo a través de la aplicación. Tu conocimiento podría ser crucial para resolver casos.

                            Únete al Equipo de Búsqueda y Rescate: Si deseas participar de manera más activa, puedes unirte al equipo de búsqueda y rescate de una persona desaparecida. Juntos, podemos aumentar las posibilidades de éxito.

                            Coordina con Otros Voluntarios: La aplicación facilita la comunicación entre voluntarios para acordar puntos de reunión y horarios de búsqueda, lo que mejora la eficiencia de nuestros esfuerzos.

                            Reporta a las Autoridades Civiles: Puedes utilizar la aplicación para comunicar cualquier novedad o acontecimiento a las autoridades civiles, lo que agiliza la colaboración entre voluntarios y organismos de aplicación de la ley.

                            Identificación Única: Cada persona desaparecida contará con un ID único en la aplicación. Esto permite la creación de folletos con el ID de la persona desaparecida, que pueden distribuirse para obtener información valiosa sin revelar información personal innecesaria.
                            </p>
                        </div>
                    </div>

                    
                </div>

                <div className={style.paragraphContainer} >

                    <div className={style.containerLeftParagraph}>
                        <div className={style.containerH1}>
                            <h1>
                                Como Persona que Reporta
                            </h1>
                        </div>

                        <div className={style.containerParrafo}>
                            <p className={style.leftParagraph}>
                            Si has perdido a un ser querido y deseas utilizar nuestra plataforma para ayudar en su búsqueda, te proporcionamos las siguientes opciones:

                            Publica a tu Familiar/Amigo: Puedes publicar la información de la persona desaparecida en nuestra plataforma, pero es importante contar con un documento de reporte policial de desaparición emitido por las autoridades locales. Esto evita la publicación de desapariciones falsas y garantiza la seriedad de nuestras operaciones.

                            Completa un Formulario de Información: Rellena un formulario con los detalles de la persona desaparecida, incluyendo una copia escaneada de su identificación. A través de la aplicación, recibirás actualizaciones sobre solicitudes para unirse al equipo de búsqueda y mensajes relacionados con la publicación.

                            En B&R, estamos comprometidos a proporcionar una plataforma segura y efectiva para la búsqueda y rescate de personas desaparecidas. Nuestra aplicación busca garantizar la privacidad y seguridad de todos los usuarios mientras trabajamos juntos para reunir a seres queridos con sus familias.

                            Únete a nosotros en esta misión de esperanza y solidaridad. Juntos, podemos hacer la diferencia en la búsqueda y rescate de personas desaparecidas.
                            </p>

                        </div>
                    </div>

                    <div className={style.containerImage}>
                        
                        <img src="https://estarbien.ibero.mx/wp-content/uploads/redes_apoyo.jpg" className={style.imagenParagraph}alt="imagen" />
                    </div>
                    
                </div>


                </div>
        </div>

        

        
    )
}

export default About;