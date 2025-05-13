/*

███████╗██████╗ ███████╗ ██████╗██╗ █████╗ ██╗      ██████╗  ██████╗ ██╗ ██████╗
██╔════╝██╔══██╗██╔════╝██╔════╝██║██╔══██╗██║     ██╔═══██╗██╔════╝ ██║██╔════╝
███████╗██████╔╝█████╗  ██║     ██║███████║██║     ██║   ██║██║  ███╗██║██║     
╚════██║██╔═══╝ ██╔══╝  ██║     ██║██╔══██║██║     ██║   ██║██║   ██║██║██║     
███████║██║     ███████╗╚██████╗██║██║  ██║███████╗╚██████╔╝╚██████╔╝██║╚██████╗
╚══════╝╚═╝     ╚══════╝ ╚═════╝╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝  ╚═════╝ ╚═╝ ╚═════╝
                                                                                
╔═════════════════════════════════════════════════════════════════════════╗
║ 🧠 INDICE DE LENGUAJE - i18next                              
║ ───────────────────────────────────────────────────────────────────────  
║ 📄 Archivo: Recursos por idioma y namespace                              
║ 📦 Uso: Carga modular de traducciones (por componente, no global)        
║ 🔐 Seguridad: No se usa defaultNS, todos los `t()` son explícitos        
║ 🛠️ Mantenido por: Kevin Díaz Moya / Equipo Dev                           
║ 📅 Última actualización: 2025                                             
╚═════════════════════════════════════════════════════════════════════════╝

*/


// Se importan los archivos de traducción del namespace "auth" para cada idioma soportado.
// Cada archivo contiene las claves y textos traducidos específicos para esa sección del sistema (en este caso: autenticación).
import enAuth from "../en/auth/translation.json";
import esAuth from "../es/auth/translation.json";

// Se construye un objeto llamado "resources" que será usado por i18next para inicializar las traducciones.
// Este objeto está estructurado por idioma (en, es) y dentro de cada idioma se definen los distintos namespaces disponibles.
// Cada namespace agrupa traducciones específicas de una sección de la aplicación.
export const resources = {
  en: {
    auth: enAuth, // Namespace "auth" en inglés
  },
  es: {
    auth: esAuth, // Namespace "auth" en español
  },
};