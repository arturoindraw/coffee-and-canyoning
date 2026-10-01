
import { Translation, ChatDictionary } from './types';

export const TRADUCCIONES: { [key: string]: Translation } = {
  es: {
    nav_inicio: "Inicio",
    nav_nosotros: "Nosotros",
    nav_galeria: "Galería",
    hero_title: "AVENTURA EXTREMA EN CASCADAS",
    hero_subtitle: "⚡️ Adrenalina pura + Naturaleza + Seguridad",
    hero_cta_reserva: "HAZ TU RESERVA",
    hero_cta_video: "Ver Video ▶",
    exp_title: "¿Qué es Canyoning?",
    exp_stats: "6 CASCADAS | 6-8 HORAS | TODOS LOS NIVELES",
    exp_descripcion_1: "En ",
    exp_descripcion_nombre: "Coffee & Canyoning",
    exp_descripcion_2: ", no solo bajamos por cascadas; creamos momentos que te quitan el aliento. Sergio Castañeda y su equipo te guiarán por cañones vírgenes donde el agua es la protagonista y tú el aventurero.",
    exp_icon1: "Descenso Técnico",
    exp_icon2: "Agua Cristalina",
    exp_icon3: "Naturaleza Virgen",
    exp_icon4: "Adrenalina Pura",
    nosotros_titulo: "Conoce a Coffee & Canyoning",
    nosotros_subtitulo: "Pasión por la aventura, compromiso con la seguridad",
    nosotros_badge: "Guía Certificado",
    nosotros_quien: "¿Quiénes Somos?",
    nosotros_desc1: "Somos un equipo de apasionados por el barranquismo con más de 5 años de experiencia explorando las mejores cascadas del Eje Cafetero.",
    nosotros_desc2: "Liderados por Sergio Castañeda, guía certificado en técnicas de canyoning y rescate vertical, ofrecemos experiencias seguras y memorables en Santa Rosa de Cabal.",
    valor_1_titulo: "Profesionalismo",
    valor_1_desc: "Equipos certificados y guías capacitados",
    valor_2_titulo: "Seguridad",
    valor_2_desc: "Protocolos estrictos y seguros activos",
    valor_3_titulo: "Sostenibilidad",
    valor_3_desc: "Respeto total por el medio ambiente",
    nosotros_cta: "Reserva tu Aventura",
    galeria_titulo: "Galería de Aventuras",
    galeria_subtitulo: "Momentos inolvidables en las cascadas",
    galeria_img1: "Descenso en Cascada Principal",
    galeria_img2: "Rappel Técnico",
    galeria_img3: "Aventura en Grupo",
    galeria_img4: "Toboganes Naturales",
    galeria_img5: "Naturaleza Virgen",
    galeria_img6: "Equipo Profesional",
    galeria_img7: "Saltos Opcionales",
    galeria_img8: "Vistas Espectaculares",
    galeria_cta_texto: "¿Quieres ver más?",
    galeria_cta_btn: "Síguenos en Instagram",
    serv_title: "Servicios Incluidos",
    serv_1: "Equipamiento profesional completo",
    serv_2: "Guía certificado Sergio Castañeda: RNT 252901",
    serv_3: "Seguro de accidentes",
    serv_4: "Fotos y videos profesionales",
    seg_title: "Implementos de Seguridad",
    seg_badge: "TU SEGURIDAD ES NUESTRA PRIORIDAD",
    test_title: "Lo que dicen nuestros clientes",
    test_cta: "Síguenos en @coffeeandcanyoning",
    ubic_title: "¿Dónde estamos?",
    ubic_direccion: "Santa Rosa de Cabal, Colombia",
    ubic_info: "10 km de Pereira | 1 hora desde Armenia",
    res_title: "Haz tu Reserva",
    res_descripcion: "Reserva tu cupo con anticipación. Las salidas matutinas son ideales para ver el sol filtrarse por el cañón.",
    res_nombre: "Nombre completo",
    res_telefono: "WhatsApp/Teléfono",
    res_email: "Email",
    res_fecha: "Fecha preferida",
    res_personas: "Número de personas",
    res_btn: "RESERVAR POR WHATSAPP",
    res_alt: "O escríbenos a coffeeandcanyoning@gmail.com",
    res_horarios: "Salidas: 7:00 AM y 3:00 PM",
    foot_tagline: "Descendemos por las mejores cascadas ⚡️ Una experiencia llena de adrenalina",
    foot_enlaces: "Enlaces Rápidos",
    foot_contacto: "Contacto",
    foot_horarios: "Horarios",
    foot_copyright: "© 2026 Bigermark | Todos los derechos reservados",
    foot_empresa: "Bigermark.online",
    chat_saludo: "¡Hola! Soy Seryei 👋 Su asistente de barranquismo/canyoning. ¿En qué le puedo ayudar hoy?",
    chat_estado: "En línea",
    chat_placeholder: "Escribe tu mensaje..."
  },
  en: {
    nav_inicio: "Home",
    nav_nosotros: "About Us",
    nav_galeria: "Gallery",
    hero_title: "EXTREME ADVENTURE AT WATERFALLS",
    hero_subtitle: "⚡️ Pure adrenaline + Nature + Safety",
    hero_cta_reserva: "BOOK NOW",
    hero_cta_video: "Watch Video ▶",
    exp_title: "What is Canyoning?",
    exp_stats: "6 WATERFALLS | 6-8 HOURS | ALL LEVELS",
    exp_descripcion_1: "At ",
    exp_descripcion_nombre: "Coffee & Canyoning",
    exp_descripcion_2: ", we don't just descend waterfalls; we create breathtaking moments. Sergio Castañeda and his team will guide you through pristine canyons where water is the protagonist and you are the adventurer.",
    exp_icon1: "Technical Descent",
    exp_icon2: "Crystal Clear Water",
    exp_icon3: "Virgin Nature",
    exp_icon4: "Pure Adrenaline",
    nosotros_titulo: "Meet Coffee & Canyoning",
    nosotros_subtitulo: "Passion for adventure, commitment to safety",
    nosotros_badge: "Certified Guide",
    nosotros_quien: "Who We Are?",
    nosotros_desc1: "We are a team passionate about canyoning with over 5 years of experience exploring the best waterfalls of the Coffee Region.",
    nosotros_desc2: "Led by Sergio Castañeda, a certified guide in canyoning techniques and vertical rescue, we offer safe and memorable experiences in Santa Rosa de Cabal.",
    valor_1_titulo: "Professionalism",
    valor_1_desc: "Certified equipment and trained guides",
    valor_2_titulo: "Safety",
    valor_2_desc: "Strict protocols and active insurance",
    valor_3_titulo: "Sustainability",
    valor_3_desc: "Total respect for the environment",
    nosotros_cta: "Book your Adventure",
    galeria_titulo: "Adventure Gallery",
    galeria_subtitulo: "Unforgettable moments at the waterfalls",
    galeria_img1: "Main Waterfall Descent",
    galeria_img2: "Technical Rappel",
    galeria_img3: "Group Adventure",
    galeria_img4: "Natural Slides",
    galeria_img5: "Virgin Nature",
    galeria_img6: "Professional Equipment",
    galeria_img7: "Optional Jumps",
    galeria_img8: "Spectacular Views",
    galeria_cta_texto: "Want to see more?",
    galeria_cta_btn: "Follow us on Instagram",
    serv_title: "Included Services",
    serv_1: "Complete professional equipment",
    serv_2: "Certified guide Sergio Castañeda: RNT 252901",
    serv_3: "Accident insurance",
    serv_4: "Professional photos and videos",
    seg_title: "Safety Equipment",
    seg_badge: "YOUR SAFETY IS OUR PRIORITY",
    test_title: "What our clients say",
    test_cta: "Follow us @coffeeandcanyoning",
    ubic_title: "Where are we?",
    ubic_direccion: "Santa Rosa de Cabal, Colombia",
    ubic_info: "10 km from Pereira | 1 hour from Armenia",
    res_title: "Make your Reservation",
    res_descripcion: "Book your spot in advance. Morning departures are ideal to see the sun filtering through the canyon.",
    res_nombre: "Full name",
    res_telefono: "WhatsApp/Phone",
    res_email: "Email",
    res_fecha: "Preferred date",
    res_personas: "Number of people",
    res_btn: "BOOK VIA WHATSAPP",
    res_alt: "Or write to us at coffeeandcanyoning@gmail.com",
    res_horarios: "Departures: 7:00 AM and 3:00 PM",
    foot_tagline: "We descend through the best waterfalls ⚡️ An adrenaline-filled experience",
    foot_enlaces: "Quick Links",
    foot_contacto: "Contact",
    foot_horarios: "Schedule",
    foot_copyright: "© 2026 Bigermark | All rights reserved",
    foot_empresa: "Bigermark.online",
    chat_saludo: "Hello! I'm Seryei 👋 Your canyoning assistant. How can I help you today?",
    chat_estado: "Online",
    chat_placeholder: "Type your message..."
  }
};

export const CHAT_RESPUESTAS_ES: ChatDictionary = {
  keywords: {
    "rutas": ["ruta", "rutas", "recorrido", "recorridos", "tour", "tours", "cascadas", "cascada"],
    "ubicacion": ["ubicación", "ubicacion", "donde", "dónde", "lugar", "dirección", "direccion", "como llegar"],
    "actividades": ["actividad", "actividades", "que hacen", "qué hacen", "incluye", "servicio", "servicios"],
    "precio": ["precio", "costo", "cuanto", "cuánto", "tarifa", "valor", "pagar"],
    "reserva": ["reservar", "reserva", "agendar", "cita", "disponibilidad", "fecha"],
    "horarios": ["horario", "horarios", "hora", "cuando", "cuándo", "sale", "salida"],
    "equipo": ["equipo", "implementos", "que llevar", "qué llevar", "necesito", "debo llevar"],
    "experiencia": ["experiencia", "principiante", "novato", "primera vez", "dificil", "difícil"],
    "contacto": ["contacto", "contactar", "hablar", "comunicar", "teléfono", "telefono", "email"],
    "saludo": ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey", "saludos"]
  },
  respuestas: {
    "rutas": {
      texto: "¡Excelente elección! 🏔️ Descendemos por las 7 mejores cascadas de Santa Rosa de Cabal. El recorrido dura entre 6-8 horas y es apto para todos los niveles.\n\n¿Quieres saber dónde estamos ubicados o prefieres hacer una reserva?",
      botones: ["📍 Ubicación", "📅 Reservar", "💰 Ver precios"]
    },
    "ubicacion": {
      texto: "📍 Nos encontramos en Santa Rosa de Cabal, Risaralda, Colombia.\n\n• 10 km de Pereira\n• 1 hora desde Armenia\n• Punto de encuentro: Santa Rosa de Cabal\n\n¿Te gustaría ver el mapa o hacer una reserva?",
      botones: ["🗺️ Ver mapa", "📅 Reservar", "🏔️ Ver rutas"]
    },
    "actividades": {
      texto: "¡Perfecto! 💦 En nuestros recorridos incluimos:\n\n✅ Descenso técnico en rappel\n✅ Toboganes naturales\n✅ Saltos opcionales\n✅ Caminata por naturaleza virgen\n✅ Guía experto certificado\n\n¿Quieres conectarte con uno de nuestros guías o hacer una reserva?",
      botones: ["👨‍🏫 Hablar con guía", "📅 Reservar", "📸 Ver fotos"]
    },
    "precio": {
      texto: "💰 Para obtener información actualizada sobre precios y paquetes, te recomiendo contactar directamente con nuestro equipo.\n\nPuedo conectarte ahora mismo vía WhatsApp para una cotización personalizada. ¿Te parece?",
      botones: ["📱 WhatsApp", "✉️ Email", "📅 Reservar"]
    },
    "reserva": {
      texto: "¡Genial! 📅 Para hacer tu reserva necesito algunos datos.\n\nPuedo enviarte directamente a WhatsApp donde Sergio te atenderá personalmente, o puedes llenar el formulario aquí. ¿Qué prefieres?",
      botones: ["📱 WhatsApp directo", "📝 Formulario", "❓ Más info"]
    },
    "horarios": {
      texto: "⏰ Nuestras salidas son:\n\n🌅 Salida matutina: 8:00 AM\n🌤️ Salida tarde: 1:30 PM\n\nDuración: 6-8 horas\nIncluye transporte, equipo y guía\n\n¿Quieres reservar para alguna fecha específica?",
      botones: ["📅 Reservar mañana", "📅 Reservar tarde", "📞 Llamar"]
    },
    "equipo": {
      texto: "🎒 ¡No te preocupes! Nosotros incluimos todo el equipo profesional:\n\n✅ Casco certificado\n✅ Arnés de seguridad\n✅ Neopreno completo\n✅ Cuerdas y mosquetones\n\nTú solo trae ropa cómoda para mojar y actitud de aventura ⚡\n\n¿Listo para reservar?",
      botones: ["📅 Reservar", "📸 Ver equipo", "❓ Más dudas"]
    },
    "experiencia": {
      texto: "👍 ¡Perfecto para principiantes! No necesitas experiencia previa.\n\nSergio Castañeda está certificado y tiene años de experiencia. El 90% de nuestros clientes son primerizos 😊\n\n¿Te animas?",
      botones: ["📅 Reservar", "📸 Ver testimonios", "📞 Hablar con guía"]
    },
    "contacto": {
      texto: "📞 Puedes contactarnos por WhatsApp o Email.\n\n¿Prefieres que te conecte directamente por WhatsApp?",
      botones: ["📱 Abrir WhatsApp", "✉️ Enviar email", "📝 Formulario"]
    },
    "saludo": {
      texto: "¡Hola! 👋 Bienvenido a Coffee & Canyoning.\n\nSoy Seryei, tu asistente virtual. Estoy aquí para ayudarte con rutas, ubicación, precios y más.\n\n¿En qué puedo ayudarte hoy?",
      botones: ["🏔️ Ver rutas", "📅 Reservar", "📞 Contactar"]
    },
    "default": {
      texto: "Interesante pregunta 🤔\n\nPara darte la mejor respuesta, te recomiendo contactar directamente con Sergio por WhatsApp.\n\n¿Te conecto ahora?",
      botones: ["📱 WhatsApp", "📝 Formulario", "🏔️ Ver info general"]
    }
  },
  acciones: {
    "📍 Ubicación": "ubicacion",
    "📅 Reservar": "reserva",
    "💰 Ver precios": "precio",
    "🗺️ Ver mapa": "scrollToMap",
    "🏔️ Ver rutas": "scrollToRoutes",
    "👨‍🏫 Hablar con guía": "whatsapp",
    "📸 Ver fotos": "scrollToGallery",
    "📱 WhatsApp": "whatsapp",
    "📱 WhatsApp directo": "whatsapp",
    "📱 Abrir WhatsApp": "whatsapp",
    "✉️ Email": "email",
    "✉️ Enviar email": "email",
    "📝 Formulario": "showForm",
    "❓ Más info": "default",
    "❓ Más dudas": "default",
    "📅 Reservar mañana": "whatsapp",
    "📅 Reservar tarde": "whatsapp",
    "📞 Llamar": "whatsapp",
    "📞 Contactar": "contacto",
    "📞 Hablar con guía": "whatsapp",
    "📸 Ver equipo": "scrollToEquipment",
    "📸 Ver testimonios": "scrollToTestimonials"
  }
};

export const CHAT_RESPUESTAS_EN: ChatDictionary = {
  keywords: {
    "rutas": ["route", "routes", "tour", "tours", "waterfall", "waterfalls", "trail"],
    "ubicacion": ["location", "where", "place", "address", "how to get"],
    "actividades": ["activity", "activities", "what do you do", "include", "service", "services"],
    "precio": ["price", "cost", "how much", "rate", "fee", "pay"],
    "reserva": ["book", "booking", "reserve", "reservation", "schedule", "date", "availability"],
    "horarios": ["schedule", "time", "when", "departure", "start"],
    "equipo": ["equipment", "gear", "what to bring", "need", "should bring"],
    "experiencia": ["experience", "beginner", "first time", "difficult", "level"],
    "contacto": ["contact", "call", "phone", "email", "reach"],
    "saludo": ["hello", "hi", "good morning", "good afternoon", "hey"]
  },
  respuestas: {
    "rutas": {
      texto: "Excellent choice! 🏔️ We descend through the 7 best waterfalls of Santa Rosa de Cabal. The tour lasts 6-8 hours and is suitable for all levels.\n\nWould you like to know where we are located or make a reservation?",
      botones: ["📍 Location", "📅 Book", "💰 See prices"]
    },
    "ubicacion": {
      texto: "📍 We are located in Santa Rosa de Cabal, Risaralda, Colombia.\n\n• 10 km from Pereira\n• 1 hour from Armenia\n• Meeting point: Santa Rosa de Cabal\n\nWould you like to see the map or make a reservation?",
      botones: ["🗺️ View map", "📅 Book", "🏔️ See routes"]
    },
    "actividades": {
      texto: "Perfect! 💦 Our tours include:\n\n✅ Technical rappel descent\n✅ Natural slides\n✅ Optional jumps\n✅ Walk through virgin nature\n✅ Certified expert guide\n\nWould you like to connect with one of our guides or make a reservation?",
      botones: ["👨‍🏫 Talk to guide", "📅 Book", "📸 See photos"]
    },
    "precio": {
      texto: "💰 For updated information on prices and packages, I recommend contacting our team directly.\n\nI can connect you right now via WhatsApp for a personalized quote. Sound good?",
      botones: ["📱 WhatsApp", "✉️ Email", "📅 Book"]
    },
    "reserva": {
      texto: "Great! 📅 To make your reservation I need some information.\n\nI can send you directly to WhatsApp where Sergio will assist you personally, or you can fill out the form here. Which do you prefer?",
      botones: ["📱 Direct WhatsApp", "📝 Form", "❓ More info"]
    },
    "saludo": {
      texto: "Hello! 👋 Welcome to Coffee & Canyoning.\n\nI'm Seryei, your virtual assistant. I'm here to help you with:\n\n🏔️ Route information\n📍 Location and directions\n💰 Prices and bookings\n📸 Photos and testimonials\n\nHow can I help you today?",
      botones: ["🏔️ See routes", "📅 Book", "📞 Contact"]
    },
    "default": {
      texto: "Interesting question 🤔\n\nTo give you the best answer, I recommend contacting our team directly via WhatsApp. Sound good?",
      botones: ["📱 WhatsApp", "📝 Form", "🏔️ General info"]
    }
  },
  acciones: {
    "📍 Location": "ubicacion",
    "📅 Book": "reserva",
    "💰 See prices": "precio",
    "🗺️ View map": "scrollToMap",
    "🏔️ See routes": "scrollToRoutes",
    "👨‍🏫 Talk to guide": "whatsapp",
    "📸 See photos": "scrollToGallery",
    "📱 WhatsApp": "whatsapp",
    "📱 Direct WhatsApp": "whatsapp",
    "✉️ Email": "email",
    "📝 Form": "showForm",
    "❓ More info": "default",
    "🏔️ General info": "default",
    "📞 Contact": "contacto"
  }
};
