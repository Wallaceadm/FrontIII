import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function FormPage() {

    const [nome, setNome] = useState("");
    const [matricula, setMatricula] = useState("");
    const [curso, setCurso] = useState("");
    const [periodo, setPeriodo] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();




}

async function addEstudante(){

    try{
        await axios.post("https://api-aluno.vercel.app/aluno", {
            nome: nome,
            matricula: number,
            curso: course,
            bimestre: periodo,

        });

        navigate("/")

        alert("Aluno incluso com sucesso")

    }catch (error){

        alert("Revise o cadastro")
    }

}

async function getEstudante(id){

        try{
            const response = await axios.get(`https://api-aluno.vercel.app/aluno/${id}`);
            setNome(response.data.nome);
            setMatricula(response.data.matricula);
            setCurso(response.data.curso);
            setBimestre(response.data.bimestre);
        } catch (error) {
            console.log(error);
        }

}

async function editEstudante(e) {

    try {
        await axios.put(`https://api-aluno.vercel.app/aluno/${id}`, {
            nome: nome,
            matricula: matricula,
            curso: curso,
            bimestre: bimestre
        });
        console.log("Troca realizada com sucesso");
        navigate("/");
    } catch (error) {
        console.log(error);
    }
    
}

useEffect(() => {  if(id !== "form")getEstudante();}, []);

return(
    <div>
        <h1> Desafio Forms</h1>

        <input type="text" value={nome} placeholder="Insira o nome" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={matricula} placeholder="Insira a matricula" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={curso} placeholder="Insira oo curso" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={bimestre} placeholder="Insira o bimestre" onChange={(e) => setName(e.target.value)} />
        
        <button onClick={() => id === " " ? addEstudante() : editEstudante()}>
                {id === "form" ? "Cadastrar Aluno" : "Editar Aluno"}
            </button>

    </div>
)
