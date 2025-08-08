import Container from '@mui/material/Container';
import React, { Component }  from 'react';


export default function SimpleContainer1() {
  return (
    <>
      <Container maxWidth="lg">
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          Container Of maxWidth = lg 
         </h1>
      </Container>
      <Container maxWidth="md">
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          Container Of maxWidth = md 
         </h1>
      </Container>
      <Container maxWidth="sm">
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          Container Of maxWidth = sm
        </h1>
      </Container>
      <Container maxWidth="xs">
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          Container Of maxWidth = xs 
        </h1>
      </Container>
      <Container fixed>
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          Container with fixed prop
         </h1>
      </Container>
    </>
  );
}