import { useNavigate, useParams } from "react-router-dom";
import { buscarAgendamentoPorId, editarAgendamento, salvarAgendamento } from "../services/ApiService";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { format } from "date-fns";


function AgendamentosForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const carregarAgendamento = async () => {
        const { data } = await buscarAgendamentoPorId(id);

        const formattedData = {
          ...data,
          data: format(new Date(data.data), "yyyy-MM-dd"),
          hora: format(new Date(data.hora), "HH:mm")
        };
        reset(formattedData);
      };
      carregarAgendamento();
    }
  }, [id, reset]);

  const submit = async (data) => {
    try {
      if (id) {
        await editarAgendamento(data, id);
      } else {
        await salvarAgendamento({
          ...data,
          usuarioId: "8a746df9-6c1d-435e-bdac-cd6faa969a7d"});
      }
      reset();
      navigate("/agendamentos");
    } catch (error) {
      console.error("Erro ao processar o agendamento:", error);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <form
            onSubmit={handleSubmit(submit)}
            className="p-4 border rounded shadow-sm bg-light"
          >
            <h2 className="mb-4 text-center text-primary">
              {id ? "Editar Agendamento" : "Cadastrar Agendamento"}
            </h2>

            <div className="mb-3">
              <label className="form-label">Serviço</label>
              <input
                className={`form-control ${errors.servico ? "is-invalid" : ""}`}
                type="text"
                placeholder="Digite o serviço"
                {...register("servico", { required: "Serviço é obrigatório" })}
              />
              {errors.servico && (
                <div className="invalid-feedback">{errors.servico.message}</div>
              )}
            </div>
            
            <div className="mb-3">
              <label className="form-label">Data</label>
              <input
                className={`form-control ${errors.data ? "is-invalid" : ""}`}
                type="date"
                {...register("data", { required: "Data é obrigatória" })}
              />
              {errors.data && (
                <div className="invalid-feedback">{errors.data.message}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Hora</label>
              <input
                className={`form-control ${errors.hora ? "is-invalid" : ""}`}
                type="time"
                {...register("hora", { required: "Hora é obrigatória" })}
              />
              {errors.hora && (
                <div className="invalid-feedback">{errors.hora.message}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 mt-3"
            >
              {id ? "Salvar Alterações" : "Cadastrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgendamentosForm;
