import { useState } from 'react';
import './App.css'
import Cabecalho from './components/Cabecalho';
import CardCurso from './components/CardCurso';
import Destaque from './components/Destaque';
import Rodape from './components/Rodape';

const cursos = [
  {
    nome: "Curso de menos cólica 1",
    duracao: "67 horas",
    modalidade: "online",
    nivel: "básico",
    vagas: 15,
  },

  {
    nome: "Curso de menos cólica 2",
    duracao: "120 horas",
    modalidade: "hibrida",
    nivel: "avançado",
    vagas: 15,
  },

  {
    nome: "Curso totalmente livre",
    duracao: "200 horas",
    modalidade: "online",
    nivel: "intermediario",
    vagas: 15,
  },

  {
    nome: "Curso de Educação Menstrual",
    duracao: "100 horas",
    modalidade: "online",
    nivel: "intermediario",
    vagas: 15,
  },

  {
    nome: "Curso sobre Saúde Menstrual",
    duracao: "80 horas",
    modalidade: "online",
    nivel: "básico",
    vagas: 15,
  },

  {
    nome: "Curso de Obstetrícia e Saúde Feminina",
    duracao: "250 horas ",
    modalidade: "presencial",
    nivel: "avançado",
    vagas: 15,
  },
];



function App() {
  return (
    <>
        <Cabecalho/>
      {
        cursos.map(e => {
          return <CardCurso nome={e.nome} duracao={e.duracao} modalidade={e.modalidade} nivel={e.nivel} vagas = {e.vagas}/>
        })
      }

    </>
  )
}

export default App
