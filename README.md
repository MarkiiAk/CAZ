# Cruz Azul Tultepec — demo navegable

Prototipo **mult página HTML** basado visualmente en el mockup proporcionado, con recursos locales, CSS compartido y JavaScript sin frameworks.

## Cómo abrir
1. Descomprime el ZIP completo.
2. Abre `index.html` en cualquier navegador moderno. No necesitas Node, servidor ni instalar dependencias.
3. Navega por los menús; entra en **Alumnos** para filtrar por nombre, categoría o año y abre las dos variantes del perfil.

## Páginas
- `index.html`: Home (hero, valores, presentación, categorías).
- `alumnos.html`: directorio con búsqueda y filtros funcionales.
- `perfil.html?id=1`: ficha clásica adaptable a cada alumno.
- `perfil-divertido.html?id=1`: ficha divertida, sueños y galería.
- `categorias.html`: presentación de categorías.
- `nosotros.html`: filosofía y presentación de la escuela.
- `noticias.html`: diseño de sección editorial con contenido ficticio.
- `contacto.html`: datos oficiales disponibles y contacto por WhatsApp.
- `inscripciones.html`: proceso ilustrativo y solicitud de informes.
- `aviso.html`: privacidad y derechos.

## Recursos
- `assets/css/styles.css`: diseño global, responsive (escritorio, tableta, móvil).
- `assets/js/site.js`: iconos SVG embebidos, menú móvil, búsqueda, filtros, perfil dinámico, galería ampliable, compartir y WhatsApp.
- `assets/img/`: fotografías **recortadas del mockup generado proporcionado** y escudo conceptual SVG.
- `referencia/mockup-original.png`: imagen de referencia para comparar.

## Interactividad
- El directorio filtra en tiempo real sin servidor.
- Cada ficha cambia nombre, número, foto, categoría y textos por `?id=1` a `?id=8`.
- Los botones de compartir usan Web Share cuando esté disponible; en otros casos portapapeles o copia manual.
- La galería abre un visor al pulsar las imágenes.
- Los formularios preparan un mensaje de WhatsApp al número mostrado por el directorio oficial; **NO** envían los datos automáticamente ni realizan inscripción o reserva.

## Antes de publicar (obligatorio)
- Todos los jugadores, imágenes y métricas de la maqueta son **ficticios**. Sustituir por datos verificables y autorizados.
- Las categorías y edades del mockup son ilustrativas. Confirmar con academia.
- Los perfiles de menores deberían ser **privados por defecto**, con acceso a padres/tutores. Obtener consentimiento específico para toda fotografía, nombre o número visible al público.
- El escudo incluido es **conceptual**, no el logotipo oficial licenciado del club. Solicitar aprobación formal de identidad de marca.
- Preparar aviso de privacidad adecuado a la operación real. Validar número y otros contactos antes del despliegue.
- Reemplazar contenido ficticio de Noticias por eventos reales confirmados.
- Agregar backend seguro si se requiere login, panel admin, fichas privadas, fotos y estadísticas reales.

## Fidelidad al boceto
El sitio reproduce el **lenguaje de diseño** (escala, azul institucional, hero fotográfico, titulares condensados, mosaico de alumnos, ficha clásica y divertida, tarjetas de colores), no es una captura pegada. Como la única fuente de fotografías es la imagen compuesta, algunos recortes pueden verse menos nítidos que los assets finales. Los textos y trazos de la captura se maquetaron nuevamente en HTML/CSS.

La tipografía externa Google Fonts es opcional; si no hay conexión, se usa tipografía de respaldo.
