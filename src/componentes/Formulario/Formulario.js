import React, {useState} from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import './Formulario.css'

 const Formulario = () => {

     const [formularioEnviado, setFormularioEnviado] = useState(false);
     
     return(
     <div className='contenido-formulario'>
         <h3>Formulario de consultas</h3>
         <Formik
            initialValues={{nombre:'', correo:'',problematica:'', nacionalidad:'Costarricense'}}
            validate ={valores => {
              const errors ={};

              if(!valores.nombre){
                errors.nombre = 'Requerido';
              }

              if(!valores.correo){
                  errors.correo = 'Requerido';
              }else if(
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.correo)
              ) {
                  errors.correo = 'Formato incorrecto';
              }
              
              if(!valores.problematica){
                errors.problematica = 'Requerido';
              }

              return errors;

            }}
            onSubmit={(valores, { setSubmitting, resetForm }) => {
                setFormularioEnviado(true);
                setTimeout(() => {
                    resetForm();
                    setFormularioEnviado(false);
                    console.log(JSON.stringify(valores, null, 2));
                    setSubmitting(false);
                  }, 2000);
            }}
         >
             {({ isSubmitting }) => (
                 <Form className='formulario'>
                     <div>
                        <label>Buenas ¿Cuál es su nombre?</label>
                        <Field name="nombre" type="text" placeholder="Escriba"/>
                        <ErrorMessage name="nombre" component="p" />
                     </div>
                    
                    <div>
                        <label>Correo electrónico</label>
                        <Field name="correo" type="email" placeholder="correo@correo.com"/>
                        <ErrorMessage name="correo" component="p" />
                    </div>

                    <div>
                        <label>Nacionalidad</label>
                        <Field name="nacionalidad" as="select">
                            <option value="Costarricense">Costarricense</option>
                            <option value="Extrangero">Extranjero</option>
                        </Field>
                        <ErrorMessage name="nacionalidad" component="p" />
                    </div>

                    <div>
                        <label>Explique su problemática</label>
                        <Field name="problematica" as="textarea" placeholder="Escriba"/>
                        <ErrorMessage name="problematica" component="p" />
                    </div>

                    <button type="submit" disabled={isSubmitting}>Enviar</button>
                    {formularioEnviado &&<p className='parrafo-proceso'>Se envió el formulario</p>}
                 </Form>
             )}
    
         </Formik>
     </div>
  )};


export default Formulario;