// Este ejemplo hace uso de un anidamiento de 3 Callbacks
const http = require("http");
const fs = require("fs");

// Creamos un servidor y hacemos uso de una callback para definir la lógica de respuesta a una
// solicitud entrante
http
  .createServer((req, res) => {
    if (req.url === "/") {
      // Leemos el archivo JSON y usamos una callback para definir que hacer con su contenido
      fs.readFile("./titles.json", (err, data) => {
        if (err) {
          console.error(err);
          res.end("Server Error");
        } else {
          // Parseamos los datos del archivo JSON
          const titles = JSON.parse(data.toString());
          // Leemos la plantilla HTML y usamos un callback para cuando cargen los datos
          fs.readFile("./template.html", (err, data) => {
            if (err) {
              console.error(err);
              res.end("Server Error");
            } else {
              const tmpl = data.toString();
              // Ensamblamos el contenido de la pág HTML para mostrar los títulos del blog
              const html = tmpl.replace("%", titles.join("</li><li>"));
              res.writeHead(200, { "Content-Type": "text/html" });
              // Enviamos la página resultante al cliente
              res.end(html);
            }
          });
        }
      });
    }
  })
  .listen(8000, "127.0.0.1");
