'use client'
import React from 'react';
import FormChooseUs from './FormChooseUs';

export default function Career() {
  return (
    <section id='career' className="h-screen bg-cover bg-center" style={{backgroundImage: 'url(/bg-career.png)'}}>
      <h1>Career</h1>
      <FormChooseUs />
    </section>
  )
}
