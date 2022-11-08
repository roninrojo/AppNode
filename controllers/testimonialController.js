// CONTROLADOR -> VUSTA

import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    
    // Validación
    const { nombre, email, mensaje } = req.body;
    const errores = [];

    if (nombre.trim() === '' ) {
        errores.push({mensaje: "El nombre esta vacio"})
    }
    if (email.trim() === '' ) {
        errores.push({mensaje: "El email esta vacio"})
    }
    if (mensaje.trim() === '' ) {
        errores.push({mensaje: "El mensaje esta vacio"})
    }
    
    if (errores.length > 0) {
        // Lee comentarios de la BBDD
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            titulo: "Comentarios",
            errores, //- errores: errores
            nombre, //- nombre: nombre
            email, //- nombre: nombre
            mensaje, //- mensaje: mensaje
            testimoniales
        })
    } else {
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje
            });
            res.redirect('/testimoniales');

        } catch (error) {
            console.log(error)
        }
    }
    // console.log(req.body);
    
}

export { guardarTestimonial };