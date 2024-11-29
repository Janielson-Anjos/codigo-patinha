import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
<<<<<<< HEAD
import { buscarUsuarioPorId, editarUsuario, salvarUsuario } from "../services/ApiService";
=======
import { buscarUsuarioPorId, editarUsuario, salvarUsuario } from "../services/ApiService.js";
>>>>>>> refs/remotes/origin/adotante

function UsuariosForm() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const carregarUsuario = async () => {
        const { data } = await buscarUsuarioPorId(id);
        reset(data);
      };
      carregarUsuario();
    }
  }, [id, reset]);

  const submit = async (data) => {
    if (id) {
      await editarUsuario(data, id);
    } else {
      await salvarUsuario(data);
    }
    navigate("/usuarios-list");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <form
            onSubmit={handleSubmit(submit)}
            className="p-4 border rounded shadow-lg bg-white"
          >
            <h2 className="mb-4 text-center text-uppercase text-primary">
              {id ? "Editar Usuário" : "Cadastrar Usuário"}
            </h2>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Nome</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Digite o nome"
                  {...register("nome", { required: "Nome é obrigatório" })}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">E-mail</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Digite o e-mail"
                  {...register("email", { required: "Email é obrigatório" })}
                />
              </div>
            </div>
            {!id && (
              <div className="mb-3">
                <label className="form-label">Senha</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Digite uma senha"
                  {...register("senha", { required: "Senha é obrigatória" })}
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Telefone</label>
              <input
                className="form-control"
                type="tel"
                placeholder="Digite o telefone"
                {...register("telefone")}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Perfil</label>
              <select
                {...register("perfil", { required: "Perfil é obrigatório" })}
                className="form-select"
              >
                <option value="">Selecione</option>
                <option value="ADMIN">Admin</option>
                <option value="FUNCIONARIO">Funcionário</option>
                <option value="CLIENTE">Cliente</option>
              </select>
            </div>
            <button
              className="btn btn-primary w-100 py-2"
              type="submit"
            >
              {id ? "Salvar Alterações" : "Cadastrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UsuariosForm;
