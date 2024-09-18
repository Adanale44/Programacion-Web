import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div>
    <Header />
    <a>Hola</a>
    <Footer />
  </div>
);
}

export default function App(){
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getSession = async () =>{
      const {data, error} = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
    };
    getSession();
  }, []);
  const handleClick = async () => {
    const {data,error} = supabase.auth.signInWinthOAuth({
      provider:'github'
    })
    if (error) {
      console.log(error);
    }else{
      console.log(data);
    }
  };

  return(
    <header>
    <button onClick={handleClick}>conectar con github</button>
    </header>
  )
}

