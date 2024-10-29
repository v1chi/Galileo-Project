// src/getInfoUser.js
import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_USER_INFO = gql`
  query getUserById($id: Int!) {
    getUserById(id: $id) {
      id
      nombre
      email
      profesion
      pais
      genero
      descripcion
      isActive
    }
  }
`;

const useFetchUserData = (userId) => {
  const { data, loading, error } = useQuery(GET_USER_INFO, {
    variables: { id: userId },
    onError: (err) => {
      console.error("Error fetching user data:", err);
    },
  });

  // Manejo de errores
  if (error) {
    console.error("Error:", error.message);
    return {
      userData: {
        id: "null",
        nombre: "null",
        email: "null",
        profesion: "null",
        pais: "null",
        genero: "null",
        descripcion: "null",
        isActive: "false",
      },
      loading: false,
      error: true,
    };
  }

  const userData = {
    id: data?.getUserById?.id ? String(data.getUserById.id) : "",
    nombre: data?.getUserById?.nombre ? String(data.getUserById.nombre) : "",
    email: data?.getUserById?.email ? String(data.getUserById.email) : "",
    profesion: data?.getUserById?.profesion ? String(data.getUserById.profesion) : "",
    pais: data?.getUserById?.pais ? String(data.getUserById.pais) : "",
    genero: data?.getUserById?.genero ? String(data.getUserById.genero) : "",
    descripcion: data?.getUserById?.descripcion ? String(data.getUserById.descripcion) : "",
    isActive: data?.getUserById?.isActive !== undefined ? String(data.getUserById.isActive) : "",
  };

  return { userData, loading, error: false };
};

const GetInfoUser = ({ userId }) => {
  const { userData, loading, error } = useFetchUserData(userId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <h1>User Information</h1>
      <p>ID: {userData.id}</p>
      <p>Name: {userData.nombre}</p>
      <p>Email: {userData.email}</p>
      <p>Profession: {userData.profesion || "Not specified"}</p>
      <p>Country: {userData.pais || "Not specified"}</p>
      <p>Gender: {userData.genero || "Not specified"}</p>
      <p>Description: {userData.descripcion || "Not specified"}</p>
      <p>Status: {userData.isActive ? "Active" : "Inactive"}</p>
    </div>
  );
};

export default GetInfoUser;
export { useFetchUserData };