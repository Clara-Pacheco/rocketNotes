import React from 'react'
import { Container } from './styles.js'

import { Button } from './../../components/Button'

// Podemos criar um component para container, outro para button
// e por aí em diante -  dessa forma conseguimos deixar tudo
// separado;

export function Details(){

  return (
  
  <Container>
    <h1>Hello World </h1>
    <span>Clara Pacheco</span>

    <Button />
    <Button />
    <Button />
    <Button />
  </Container>

  )
    
  
}

