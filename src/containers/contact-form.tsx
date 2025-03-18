'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Input from './input';
import useClientInter from '@/utils/hooks/use-client-inter';

function ContactForm() {
    const [send, setSend] = useState(false)
    const texts = useClientInter<any>("home")

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
        <form className='rounded' onSubmit={handleSubmit(handleOnSubmit)}>
            <Input error={errors.nome?.message} name={"nome"} label={texts?.contactForm.fields.name} register={register} />
            <Input error={errors.email?.message} name={"email"} label={texts?.contactForm.fields.email} register={register} />
            <Input error={errors.telefone?.message} name={"telefone"} label={texts?.contactForm.fields.phone} register={register} />
            <Input error={errors.assunto?.message} name={"assunto"} label={texts?.contactForm.fields.subject} register={register} />
            <Input error={errors.problema?.message} name={"problema"} label={texts?.contactForm.fields.message} register={register} />
            <div className="mt-4 mb-2 sm:mb-4">

                <button
                    type="submit"
                    className="inline-flex items-center text-white justify-center w-full bg-gradient-to-r from-violet-600 to-indigo-600 h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    {texts?.contactForm.fields.next}
                </button>
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
            <p className="text-xs text-gray-600 sm:text-sm">{texts?.contactForm.fields.privacy}</p>
            <p className="text-xs text-gray-600 sm:text-sm">{texts?.contactForm.fields.unsubscribe}</p>
        </form>
    )
}

export default ContactForm