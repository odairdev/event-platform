import { Logo } from "../components/Logo";

import codeMockup from "../assets/code-mockup.png";
import { useState, FormEvent } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`

export function Subscribe() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const navigate = useNavigate()

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="text-gray-100 text-[2.5rem] mt-8 leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>,{" "}
            <br /> do zero, com{" "}
            <strong className="text-blue-500">React</strong>
          </h1>
          <p className="block mt-6 text-gra-200 text-xs leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais <br /> utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="bg-gray-700 p-8 rounded border border-gray-500 w-96">
          <strong className="text-2xl">Inscreva-se gratuitamente</strong>

          <form className="flex flex-col gap-2 w-full mt-6" onSubmit={handleSubmit}>
            <input type="text" placeholder="Seu nome completo" value={name} onChange={(e) => setName(e.target.value)}
            className="h-14 px-5 rounded placeholder:text-gray-300 bg-gray-900 outline-none"/>
            <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}
            className="h-14 px-5 rounded placeholder:text-gray-300 bg-gray-900 outline-none"/>
            <button 
            disabled={loading}
            type="submit"
            className="uppercase text-sm font-bold bg-green-500 mt-4 py-4 rounded hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={codeMockup} alt="code mockup image" />
    </div>
  );
}
