function CardCurso( {nome, duracao, modalidade, nivel, vagas}) {
  return (
    <>
      <h3>nome: {nome}</h3>
      <h3>duracao: {duracao}</h3>
      <h3>modalidade: {modalidade} </h3>
      <h3>nivel: {nivel}</h3>

      <h3>vagas: {vagas > 0 ? "disponivel" : "indisponivel"} </h3>
    </>
  )
}

export default CardCurso