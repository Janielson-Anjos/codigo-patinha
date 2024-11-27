import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { buscarAgendamentos, excluirAgendamento } from "../services/ApiService.js";

function AgendamentosLista() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [agendamentoToDelete, setAgendamentoToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listarAgendamentos = async () => {
      const { data } = await buscarAgendamentos();
      setAgendamentos(data);
    };
    listarAgendamentos();
  }, []);

  const deleteAgendamento = async () => {
    if (agendamentoToDelete) {
      await excluirAgendamento(agendamentoToDelete);
      setAgendamentos((a) =>
        a.filter((agendamento) => agendamento.id !== agendamentoToDelete)
      );
    }
    setShowModal(false);
  };
  const handleDeleteClick = (id) => {
    setAgendamentoToDelete(id);
    setShowModal(true);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-5 text-center text-primary font-weight-bold">Lista de Agendamentos</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Serviço</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((agendamento, index) => (
              <tr key={agendamento.id}>
                <td>{index + 1}</td>
                <td>{agendamento.servico}</td>
                <td>{new Date(agendamento.data).toLocaleDateString()}</td>
                <td>{new Date(agendamento.hora).toTimeString().slice(0, 5)}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => navigate(`/agendamentos-form/${agendamento.id}`)}
                  >
                    <i className="bi bi-pencil-square"></i> Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteClick(agendamento.id)}
                  >
                    <i className="bi bi-trash"></i> Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Você tem certeza de que deseja excluir este agendamento?</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button className="btn btn-danger" onClick={deleteAgendamento}>
            Confirmar Exclusão
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AgendamentosLista;
