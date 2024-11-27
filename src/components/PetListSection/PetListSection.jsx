// src/components/PetListSection.jsx
import React from "react";
import styles from "./PetListSection.module.css"; // Exemplo com CSS Modules

// Dados fictícios
const pets = [
  {
    id: 1,
    nome: "Rex",
    especie: "Cachorro",
    idade: "2 anos",
    descricao: "Amigável e cheio de energia, perfeito para famílias.",
    status: "Disponível",
  },
  {
    id: 2,
    nome: "Miau",
    especie: "Gato",
    idade: "1 ano",
    descricao: "Independente e carinhoso, ideal para apartamentos.",
    status: "Adotado",
  },
  {
    id: 3,
    nome: "Bobby",
    especie: "Coelho",
    idade: "6 meses",
    descricao: "Pequeno e adorável, ótimo para crianças.",
    status: "Disponível",
  },
  {
    id: 4,
    nome: "Nina",
    especie: "Cachorro",
    idade: "3 anos",
    descricao: "Protetora e brincalhona, perfeita para casas com quintal.",
    status: "Adotado",
  },
  {
    id: 5,
    nome: "Luna",
    especie: "Gato",
    idade: "2 anos",
    descricao: "Curiosa e brincalhona, adora explorar ambientes novos.",
    status: "Disponível",
  },
  {
    id: 6,
    nome: "Charlie",
    especie: "Cachorro",
    idade: "5 anos",
    descricao: "Calmo e leal, perfeito para quem busca companhia tranquila.",
    status: "Adotado",
  },
  {
    id: 7,
    nome: "Pipoca",
    especie: "Hamster",
    idade: "4 meses",
    descricao: "Pequeno e ativo, precisa de espaço para correr.",
    status: "Disponível",
  },
  {
    id: 8,
    nome: "Kika",
    especie: "Pássaro",
    idade: "1 ano",
    descricao: "Canta ao amanhecer, ótima companhia para quem gosta de natureza.",
    status: "Adotado",
  },
];

// Inclui Whatsapp do PetFinder (Site real) -- Luccas Medina
const PetListSection = () => {
  return (
    <section className={styles.petListSection}>
      <h2 className={styles.title}>Conheça os Pets para Adoção</h2>
      <div className={styles.petGrid}>
        {pets.map((pet) => (
          <div
            key={pet.id}
            className={`${styles.petCard} ${
              pet.status === "Adotado" ? styles.adopted : ""
            }`}
          >
            <h3>{pet.nome}</h3>
            <p
              className={
                pet.status === "Disponível"
                  ? styles.available
                  : styles.unavailable
              }
            >
              <a href="https://wa.me/5531986477000"><strong>Adotar</strong></a>
            </p> 
            <p><strong>Espécie:</strong> {pet.especie}</p>
            <p><strong>Idade:</strong> {pet.idade}</p>
            <p><strong>Descrição:</strong> {pet.descricao}</p>
            <p
              className={
                pet.status === "Disponível"
                  ? styles.available
                  : styles.unavailable
              }
            >
              <strong>Status:</strong> {pet.status}
            </p>

            <p><strong>Histórico {pet.nome}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetListSection;
