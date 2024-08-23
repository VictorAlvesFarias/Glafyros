import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ambevLogoImage from '../../assets/images/ambev-logo.png'
import baraoLogoImage from '../../assets/images/barao-logo.png'
import havannaLogoImage from '../../assets/images/havanna-logo.png'
import itauLogoImage from '../../assets/images/itau-logo.png'
import openPromotoraLogoImage from '../../assets/images/open-promotora-logo.png'
import philipMorrisLogoImage from '../../assets/images/philip-morris-logo.png'
import takaoLogoImage from '../../assets/images/takao-logo.png'
import LogoNeon from '../../components/logo-neon'
import Input from '../../components/input'
import Button from '../../components/button'
import { Link } from 'react-router-dom';


function Home() {
  const [send, setSend] = useState(false)

  function handleOnSubmit(data?: any) {
    setSend(true)
  }

  const schema = z.object({
    email: z.string().nonempty("Campo obrigatório"),
    nome: z.string().nonempty("Campo obrigatório"),
    assunto: z.string().nonempty("Campo obrigatório"),
    problema: z.string().nonempty("Campo obrigatório"),
    telefone: z.string().nonempty("Campo obrigatório"),
  })
  const { handleSubmit, formState: { errors }, register } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  })

  return (
    <main className="items-center w-full justify-center flex flex-col mb-20 gap-24">
      <div id='start' className='max-w-7xl w-11/12 lg:px-0 px-5 flex flex-col lg:flex-row min-h-screen'>
        <div className="flex flex-col gap-6 justify-center h-screen lg:w-1/2 w-full">
          <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text  lg:max-w-lg font-sans text-5xl font-bold  sm:text-5xl ">
            Glafyros
          </h2>
          <p className="lg:max-w-xl text-base font-semibold text-zinc-200 text-bold md:text-xl w-full">
            Otimize seu tempo e simplifique os processos da sua empresa
            <br />
            Maximize seus resultados com a Glafyros
          </p>
          <div className='flex gap-3 font-semibold text-white '>
            <Link className='text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all hover:from-violet-500 hover:to-fuchsia-400 p-1  px-6 w-fit rounded' to={''}>Ver mais</Link>
            <Link className='text-sm border rounded p-1 px-6 bg-zinc-800 hover:bg-zinc-700 transition-all' to={''}>Contato</Link>
          </div>
        </div>
        <div className=' flex h-screen lg:w-1/2 w-full items-center'>
          <LogoNeon className="h-fit w-full "></LogoNeon>
        </div>
      </div>
      <div id="we" className='max-w-7xl w-11/12 flex gap-6'>
        <div className='bg-white bg-opacity-10  w-full flex rounded flex-col gap-6 relative'>
          <div className='bg-zinc-700 p-12 rounded flex flex-col gap-3'>
            <h2 className=" lg:max-w-lg font-sans text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text ">
              Sobre nós
            </h2>
            <p>
              Na Glafyros, nossa paixão é transformar negócios e otimizar processos através da
              tecnologia. Estamos dedicados a oferecer soluções inovadoras que não apenas
              aumentam a eficiência, mas também elevam a lucratividade da sua empresa.
            </p >
            <p>
              Nossa equipe é composta por especialistas com vasta experiência em grandes
              corporações, o que nos permite entender profundamente os desafios das empresas
              modernas. Atuamos em diversas frentes, incluindo o desenvolvimento de sites e
              aplicativos móveis, consultoria em TI, suporte técnico e marketing digital. Nosso
              objetivo é impulsionar seus negócios para novos patamares de sucesso, utilizando
              tecnologia de ponta e estratégias personalizadas para atender às suas necessidades
              específicas.
            </p>
            <p>
              Acreditamos firmemente que o sucesso dos nossos clientes é o nosso próprio
              sucesso. Por isso, estamos comprometidos em colocar todo o nosso conhecimento e
              experiência a serviço das empresas que buscam crescimento e inovação no mercado.
              Junte-se a nós e descubra como podemos ajudar a transformar seus desafios em
              oportunidades.
            </p>
          </div>
        </div>
      </div>
      <div className='max-w-7xl w-11/12 flex gap-20 items-center flex-col'>
        <div className='flex gap-6 items-center flex-col'>
          <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 lg:max-w-lg font-sans text-transparent bg-clip-text text-5xl font-bold  sm:text-5xl ">
            Uma equipe forte
          </h2>
          <p>
            Contamos com profissionais com experiência em grandes empresas
          </p>
        </div>
        <div className='flex gap-24 flex-wrap items-center justify-center'>
          <img className='w-36 object-contain' src={ambevLogoImage} alt={''} />
          <img className='w-36 object-contain' src={itauLogoImage} alt={''} />
          <img className='w-36 object-contain' src={baraoLogoImage} alt={''} />
          <img className='w-36 object-contain' src={takaoLogoImage} alt={''} />
          <img className='w-36 object-contain' src={philipMorrisLogoImage} alt={''} />
          <img className='w-36 object-contain' src={openPromotoraLogoImage} alt={''} />
          <img className='w-36 object-contain' src={havannaLogoImage} alt={''} />
        </div>
      </div>
      <div className='max-w-7xl w-11/12 flex gap-6 flex-col-reverse lg:flex-row '>
        <div className="text-black flex flex-col rounded p-12 w-full bg-white">
          <h3 className=" text-xl font-semibold sm:text-center sm:text-2xl">
            Consultoria gratuita
          </h3>
          <p className="text-center">Envie-nos um e-mail com sua necessidade e nós responderemos o quanto antes</p>
          <form className=' p-12 rounded' onSubmit={handleSubmit(handleOnSubmit)}>
            <Input error={errors.nome?.message} name={"nome"} label={"Nome"} register={register} />
            <Input error={errors.email?.message} name={"email"} label={"E-mail"} register={register} />
            <Input error={errors.telefone?.message} name={"telefone"} label={"Telefone"} register={register} />
            <Input error={errors.assunto?.message} name={"assunto"} label={"Assunto"} register={register} />
            <Input error={errors.problema?.message} name={"problema"} label={"O que você precisa"} register={register} />
            <div className="mt-4 mb-2 sm:mb-4">
              <Button>Avançar</Button>
            </div>
            {
              send ?
                <div className="mb-6 flex gap-3">
                  <p className="flex">
                    <svg
                      className="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                  <p>Enviado</p>
                </div>
                : ""
            }
            <p className="text-xs text-gray-600 sm:text-sm">Nós respeitamos sua privacidade.</p>
            <p className="text-xs text-gray-600 sm:text-sm">Cancelamento da inscrição a qualquer momento.</p>
          </form>
        </div>
        <div className="flex flex-col bg-white bg-opacity-10 rounded p-12 w-full">
          <h2 className="mb-6 pb-2 text-4xl font-bold">Nossos serviços</h2>
          <div className="mb-6 flex flex-wrap flex-col">
            <div className="mb-6 flex gap-3">
              <p className="flex">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
              <p>Desenvolvimento Web</p>
            </div>
            <div className="mb-6 flex gap-3">
              <p className="flex">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
              <p>Consultoria em TI</p>
            </div>
            <div className="mb-6 flex gap-3">
              <p className="flex">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
              <p>Desenvolvimento de Aplicativos Móveis</p>
            </div>
            <div className="mb-6 flex gap-3">
              <p className="flex">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
              <p>Suporte Técnico</p>
            </div>
            <div className="mb-6 flex gap-3">
              <p className="flex">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
              <p>Marketing Digital</p>
            </div>
            <div className="mb-6 flex gap-3">
              <p className="flex">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
              <p>Design Gráfico</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
