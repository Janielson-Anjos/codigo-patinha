import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Layout from "./components/Layout";
import UsuariosLista from "./pages/UsuariosLista";
import UsuariosForm from "./pages/UsuarioForm";
import HomeAdmin from "./pages/HomeAdmin";
import AgendamentosForm from "./pages/AgendamentoForm";
import AgendamentosLista from "./pages/AgendamentosLista";
import LandingPage from "./pages/LandingPage";
import LandingAdotante from "./pages/LandingAdotante";
import LoginLandingPage from "./pages/Login";

function App() {
  return (
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/adotante" element={<LandingAdotante />} />
          <Route path="/login" element={<LoginLandingPage />} />
          <Route path="/cadastro" element={<LoginLandingPage />} />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/usuarios-list" element={<UsuariosLista />} />
          <Route path="/usuarios-form" element={<UsuariosForm />} />
          <Route path="/usuarios-form/:id" element={<UsuariosForm />} />
          <Route path="/agendamentos-form" element={<AgendamentosForm />} />
          <Route path="/agendamentos-form/:id" element={<AgendamentosForm />} />
          <Route path="/agendamentos" element={<AgendamentosLista />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
