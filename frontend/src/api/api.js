const API = "https://fiverr-clone-backend-l1zx.onrender.com";

export const registerUser = async (data) => {

  const res = await fetch(`${API}/auth/register`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  });

  return res.json();

};

export const loginUser = async (data) => {

  const res = await fetch(`${API}/auth/login`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  });

  return res.json();

};

export const createGig = async (data, token) => {

  const res = await fetch(`${API}/gigs`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":token
    },
    body:JSON.stringify(data)
  });

  return res.json();

};

export const getGigs = async () => {

  const res = await fetch(`${API}/gigs`);

  return res.json();

};

export const getGigById = async (id) => {

  const res = await fetch(`${API}/gigs/${id}`);

  return res.json();

};