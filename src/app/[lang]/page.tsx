import Content from '@/components/content';
import Image from 'next/image';
import {
  logoIcon,
  ambevImg,
  baraoImg,
  havannaImg,
  itauImg,
  openPromotoraIm,
  philipMorrisImg,
  takaoImg
} from "../../../public/public-modules";
import useServerInter from '../../utils/hooks/use-server-inter';
import Paragraph from '@/components/paragraph';
import Anch from '@/base-components/anch';
import ContactForm from '@/containers/contact-form';

export default async function Home() {
  const texts: any = await useServerInter("home");

  return (
    <div className="c-900 flex flex-col items-center justify-center w-full text-white">
      <header className="lg:px-0 px-5 flex justify-center items-center w-full min-h-screen bg-gradient-to-t to-zinc-400 to-100% via-zinc-200 via-40% from-transparent dark:to-black dark:via-zinc-800">
        <div className="md:grid py-28 xs:grid-cols-5 flex flex-col items-center max-w-128  gap-9 flex-wrap w-11/12 ">
          <div className='flex flex-col flex-1 gap-6 md:col-span-3 col-span-1 '>
            <h1 className="text-4xl lg:text-7xl flex justify-start text-transparent  w-full bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
              {texts.header.title[0]}
            </h1>
            <h2>{texts.header.paragraph[0]}</h2>
            <div className='flex gap-3 font-semibold text-white '>
              <Anch className='text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all hover:from-violet-500 hover:to-fuchsia-400 p-1  px-6 w-fit rounded' href={''}>{texts.header.seeMore}</Anch>
              <Anch className='text-sm border rounded p-1 px-6 bg-zinc-800 hover:bg-zinc-700 transition-all' href={''}>{texts.header.contact}</Anch>
            </div>
          </div>
          <Image src={logoIcon} alt={''} className='w-full md:col-span-2 rounded-xl object-cover md:block hidden'></Image>
        </div>
      </header>
      <Content id='about-us'>
        <h1 className="text-2xl lg:text-4xl flex justify-start w-full text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
          {texts?.aboutMe.title}
        </h1>
        <div className='flex flex-col p-6 items-center justify-center gap-6 bg-zinc-800 shadow-sm rounded-md'>
          {
            texts.aboutMe.paragraph.map((e: any, i: any) =>
              <p key={i}>{e}</p>
            )
          }
        </div>
      </Content>
      <Content id='team'>
        <div className='flex gap-6 items-center flex-col'>
          <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 lg:max-w-lg font-sans text-transparent bg-clip-text text-5xl font-bold  sm:text-5xl ">
            {texts.team.title}
          </h2>
          <p>
            {texts.team.description}
          </p>
        </div>
        <div className='flex gap-24 flex-wrap items-center justify-center'>
          <Image className='w-36 object-contain' src={ambevImg} alt={''} />
          <Image className='w-36 object-contain' src={itauImg} alt={''} />
          <Image className='w-36 object-contain' src={baraoImg} alt={''} />
          <Image className='w-36 object-contain' src={takaoImg} alt={''} />
          <Image className='w-36 object-contain' src={philipMorrisImg} alt={''} />
          <Image className='w-36 object-contain' src={openPromotoraIm} alt={''} />
          <Image className='w-36 object-contain' src={havannaImg} alt={''} />
        </div>
      </Content>
      <Content id='contact'>
        <div className='w-full flex gap-6 flex-col-reverse lg:flex-row '>
          <div className="flex flex-col rounded p-12 w-full bg-white text-black">
            <h3 className=" text-xl font-semibold sm:text-center sm:text-2xl">
              {texts.contactForm.title}
            </h3>
            <p className="text-center">{texts.contactForm.description}</p>
            <ContactForm></ContactForm>
          </div>
          <div className="flex flex-col bg-white bg-opacity-10 rounded p-12 w-full">
            <h2 className="mb-6 pb-2 text-4xl font-bold">{texts.services.title}</h2>
            <div className="mb-6 flex flex-wrap flex-col">
              {texts.services.items.map((e: any, i: any) =>
                <div key={i} className="mb-6 flex gap-3">
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
                  <p>{e}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Content>
      <footer className="flex w-full flex-col justify-center items-center z-[21]">
        <Content id='footer'>
          <div className='flex flex-col gap-8'>
            <hr className="border-zinc-300 w-full" />
            <div className='flex gap-3 w-full'>
              <div className='flex flex-col  gap-3 w-full'>
                <Paragraph className=''>
                  victoralves.contact@glafyros.com
                </Paragraph>
                <Paragraph className=''>
                  marcosfelipe.contact@glafyros.com
                </Paragraph>
              </div>
            </div>
            <hr className="border-zinc-300 w-full" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm ">© 2024. All Rights Reserved.</span>
            </div>
          </div>
        </Content>
      </footer >
    </div >
  );
}
