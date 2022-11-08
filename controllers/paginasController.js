import { Viaje } from "../models/Viajes.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, resp) => {
    // Consultando el modelo viaje
    try {
        const viajes = await Viaje.findAll({ limit: 3 }) // Se trae 3
        const testimoniales = await Testimonial.findAll() 
        
        resp.render("inicio", {
            titulo: "Inicio",
            clase: 'home',
            viajes,
            testimoniales
        })
    } catch (error) {
        console.log(error);
    }
    
};

const paginaNosotros = (req, resp) => resp.render("nosotros", { titulo: "Nosotros" });

const paginaTestimoniales = async (req, resp) => {
    try {
        // Lee comentarios de la BBDD
        const testimoniales = await Testimonial.findAll()
        resp.render("testimoniales", {
            titulo: "Comentarios",
            testimoniales
        });
        
    } catch (error) {
        console.log(error);
        
    }
}

const paginaViajes = async (req, resp) => {
    // const viajes = Viaje.findAll({
    //      attributes: ['id', 'titulo', 'precio', 'fecha_ida', 'fecha_vuelta', 'imagen', 'descripcion', 'disponibles', 'slug']
    // });

    const viajes = await Viaje.findAll();

    // console.log(viajes);
    
    resp.render("viajes", {
        titulo: "Viajes",
        viajes // visjes: viajes
    })
};

// Slugs


const paginaDetalleViaje = async (req, resp) => {
    
    // console.log(req.params);
    
    const { slug } = req.params; // -> variable usada en el routing (slug)

    try {
        const viaje = await Viaje.findOne({ where: { slug } }); // Consulta BBDD {slug: slug }
        resp.render('viaje', {
            titulo: 'Información Viaje',
            viaje // pasamos los resultados de la consulta
        })
    } catch (error) {
        console.log(error);
        
    }
    
}

export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
}
