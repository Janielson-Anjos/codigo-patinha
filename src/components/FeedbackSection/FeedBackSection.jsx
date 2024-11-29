import React from "react";
import "./FeedBackSection.css";
import imgComentario1 from '../../assets/image/comentario1.png';
import imgComentario2 from '../../assets/image/comentario2.png';
import imgComentario3 from '../../assets/image/comentario3.png';

const feedbacks = [
  {
    id: 1,
    nome: "Carlos Santana",
    descricao: "Tutor de gato",
    comentario:
      "Encontrei meu novo melhor amigo através deste site. Foi fácil navegar, conhecer os pets disponíveis e iniciar o processo de adoção. Recomendo para quem quer mudar a vida de um bichinho e ser recompensado com amor!",
    imagem: imgComentario1,
  },
  {
    id: 2,
    nome: "Giovanna Lima",
    descricao: "Tutora de cachorro",
    comentario:
      "Sempre quis adotar um pet, mas não sabia por onde começar. O site me ajudou a encontrar um cãozinho que precisava de um lar, e agora somos inseparáveis! O site é claro e cheio de informações úteis.",
    imagem: imgComentario2,
  },
  {
    id: 3,
    nome: "Regina Santos",
    descricao: "Tutora de gato",
    comentario:
      "Adorei as dicas sobre adoção e cuidados com pets! O site me orientou em cada etapa para garantir o bem-estar do meu bichinho. É uma plataforma indispensável para quem ama animais.",
    imagem: imgComentario3,
  },
];

function FeedbackSection() {
  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <h2>
          Saiba o que os usuários do Código <span className="highlight">Patinhas</span>{" "}
          estão achando!
        </h2>
        <div className="feedback-cards">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback-card">
              <img
                src={feedback.imagem}
                alt={`Foto de ${feedback.nome}`}
                className="user-image"
              />
              <h3>{feedback.nome}</h3>
              <p className="user-role">{feedback.descricao}</p>
              <p className="user-comment">{feedback.comentario}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;
