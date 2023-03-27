import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function HomePage() {

    const url = "https://api-aluno.vercel.app/aluno";
    const [estudante, setEstudante] = useState([]);
    const [nome, setNome] = useState("");
    const [matricula, setMatricula] = useState("");
    const [curso, setCurso] = useState("");
    const [bimestre, setBimestre] = useState("");
    const [id, setId] = useState("");

    const navigate = useNavigate();

    function limpar() {

          setNome("");
          setMatricula("");
          setCurso("");
          setBimestre("");
      }

    async function getEstudantes() {
        try {
          const response = await axios.get("https://api-aluno.vercel.app/aluno");
          setEstudante(response.data);

        } catch (error) {
          alert("Dados não encontrado");
        }
    }

    async function deleteAluno(id) {
        try {
          await axios.delete(`url+${id}`);
          getEstudantes();
          alert("Dados do aluno foram apados");
        } catch (error) {
          alert(error);
        }
      }

    useEffect(() => {
        getEstudantes();
      }, []);
  
    return (
      <div className= 'form'>
            <h1>Desafio HomePage</h1>
            <button onClick={() => navigate("/formulario/form")}>Inserir aluno</button>
            <ul>
                {alunos.map((estudante) => (
                    <li  key={estudante._id}>

                        <h2>{estudante.nome}</h2>
                        <p>{estudante.matricula}</p>
                        <p>{estudante.curso}</p>
                        <p>{estudante.bimestre}</p>

                        <button onClick={() => deleteEstudante(estudante._id)}>Excluir</button>
                        <button onClick={() => navigate(`/formulario/${estudante._id}`)}>Editar</button>
                    </li>
                ))}
            </ul>
      </div>
    );
}
