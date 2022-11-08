import express  from "express";
import {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
} from "../controllers/paginasController.js";

import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

// Var test

const test = "🆗";

// Routing
router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);
router.get('/viajes', paginaViajes );
router.get('/viajes/:slug', paginaDetalleViaje ); // :varaible "comidin" (cualquier nombre)


export default router;