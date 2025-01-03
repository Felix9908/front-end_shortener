import { useState, useEffect } from "react";
import userService from "../services/userService";
import { mutate } from "swr";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Función para iniciar sesión
  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await userService.login(credentials);
      mutate.apply("user", response.data.userData);
      setError(null);
      return(true)
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError(err.response?.data?.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  // Función para cerrar sesión
  const logout = async () => {
    try {
      setLoading(true);
      await userService.logOut();
      mutate("user", null);
      navigate("/");
      setError(null);
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
      setError(err.response?.data?.message || "Error al cerrar sesión");
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener el usuario actual
  const fetchCurrentUser = async () => {
    try {
      setLoading(true);
      const response = await userService.getCurrentUser();
      mutate("user", response.data);
    } catch (err) {
      console.error("Error al obtener el usuario actual:", err);
      setError(err.response?.data?.message || "No se pudo obtener el usuario actual");
    } finally {
      setLoading(false);
    }
  };

  // Función para actualizar el perfil del usuario
  const updateProfile = async (data) => {
    try {
      setLoading(true);
      const response = await userService.editProfile(data);
      mutate(response.data);
      setError(null);
    } catch (err) {
      console.error("Error al actualizar el perfil:", err);
      setError(err.response?.data?.message || "Error al actualizar el perfil");
    } finally {
      setLoading(false);
    }
  };

  // Efecto para cargar el usuario actual al montar el componente
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return {
    loading,
    error,
    login,
    logout,
    updateProfile,
  };
};

export default useAuth;
