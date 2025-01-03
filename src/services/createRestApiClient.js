import axios from 'axios';
import { polyfill } from 'es6-promise';
import { mutate } from "swr";
import { clearData } from "./storageWorker";
import cacheData from "memory-cache";
const API_URL = import.meta.env.VITE_API_URL
axios.defaults.withCredentials = true;

polyfill();


class RestApiClient {
  constructor(config) {
    this.client = axios.create(config);
    // Se asegura de que Axios siempre envíe cookies con las solicitudes.
    this.client.defaults.withCredentials = true;
  }

  request(options, token = "", noErrorMessage = false) {
    if (!window.navigator.onLine) {
      const data = cacheData.get(options.url);
      if (data) {
        return new Promise((resolve) => {
          resolve({ data });
        });
      }
    }

    // Buscar el token en las cookies
    token = this.getTokenFromCookies();

    if (token) {
      // Si no hay encabezado de autorización, lo añadimos
      if (!options['headers']) {
        options['headers'] = {};
      }
      if (!options['headers']['authorization']) {
        options['headers']['authorization'] = `Bearer ${token}`;
      }
    }

    let tmp = this.client.request(options);
    
    tmp.then(res => {
      if (res.status === 200 && res.data && options.method === 'GET') {
        const hours = 24;
        cacheData.put(options.url, res.data, hours * 1000 * 60 * 60);
      }
    });

    tmp.catch((err) => {
      if (err && err.response) {
        if (err?.response?.status === 401) {
          clearData();
          mutate("user", undefined);
          window.location.pathname = "/";
        } else if (err?.response?.status === 403 && err.response?.config?.method !== "get") {
          // Mostrar notificación de acceso denegado
        }
      }
      if (err && err.message === "Network Error" && !noErrorMessage) {
        // Mostrar mensaje de error de conexión
      }
    });

    return tmp;
  }

  // Método para obtener el token desde las cookies
  getTokenFromCookies() {
    const name = "token=";
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookies.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
}

const createRestApiClient = () => ({
  withConfig: config => new RestApiClient(config)
});

export default createRestApiClient;

export const client = createRestApiClient().withConfig({ baseURL: API_URL });
