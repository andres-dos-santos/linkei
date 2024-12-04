import { Logo } from '@/components/logo'
import { ArrowRight, Link, Shield, Zap } from 'lucide-react'

// async function getUrls(): Promise<Url[]> {
//   const response = await api('shorten')

//   if (response.ok) {
//     const data = await response.json()

//     return data
//   }

//   return []
// }

export default async function _page() {
  // const urls = await getUrls()

  return (
    <div className="h-screen relative mx-auto flex items-center justify-center max-w-[800px]">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-[#1c1c1c] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:8px_10px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[340px] w-[310px] rounded-full bg-cyan-600 opacity-20 blur-[100px]"></div>
      <div className="absolute left-0 right-0 -z-10 h-[560px] w-[560px] rounded-full bg-fuchsia-200 opacity-20 blur-[100px]"></div>

      <div className="hidden sm:flex flex-col sticky top-40 w-[400px] pr-10">
        <Logo />

        <div className="mt-10">
          <p className="font-medium -tracking-wide text-sm flex items-center text-zinc-700 dark:text-white">
            <Link className="size-4 mr-2  text-zinc-500 dark:text-zinc-300" />{' '}
            Curto
          </p>
          <p className="font-medium text-[13px] text-zinc-500 dark:text-zinc-200 mt-2.5">
            Crie links pequenos e com maior aceitação.
          </p>
        </div>

        <div className="mt-7">
          <p className="font-medium -tracking-wide text-sm flex items-center text-zinc-700 dark:text-white">
            <Zap className="size-4 mr-2  text-zinc-500 dark:text-zinc-300" />{' '}
            Rápido
          </p>
          <p className="font-medium text-[13px] text-zinc-500 dark:text-zinc-200 mt-2.5">
            Entregamos em menos de 1.5 segundos.
          </p>
        </div>

        <div className="mt-7">
          <p className="font-medium -tracking-wide text-sm flex items-center text-zinc-700 dark:text-white">
            <Shield className="size-4 mr-2  text-zinc-500 dark:text-zinc-300" />{' '}
            Seguro
          </p>
          <p className="font-medium text-[13px] text-zinc-500 dark:text-zinc-200 mt-2.5">
            Usamos HTTP's para proteger seu link.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col w-[400px] items-center shadow-lg justify-center h-auto border rounded-2xl p-10 border-zinc-200 bg-white dark:border-zinc-700 dark:bg-[#1c1c1c]">
        <h1 className="text-2xl font-semibold -tracking-widest">
          Encurte aqui
        </h1>

        <p className="text-[13px] font-medium text-zinc-600 -tracking-wide mt-2.5 mb-5 dark:text-zinc-300">
          Digite o seu link no campo abaixo e encurte-o.
        </p>

        <form action="" className="relative flex flex-col">
          <input
            type="text"
            className="h-10 rounded-md w-80 border bg-zinc-50 p-2 bg-transparent outline-none text-[13px] -tracking-wider text-zinc-700 font-medium"
          />

          <button className="h-10 group rounded-md bg-cyan-500 transition-all duration-300 hover:bg-cyan-500/90 w-full mt-1.5 flex items-center justify-center outline-none">
            <ArrowRight className="size-4 mr-2 text-white group-hover:translate-x-10 transition-all duration-500" />
            <p className="group-hover:opacity-0 font-medium -tracking-wide transition-all duration-500 text-[13px] flex items-center text-white">
              Faça isso!
            </p>
          </button>
        </form>

        <div className="h-20 -z-10 w-full rounded-b-2xl bg-zinc-100 dark:bg-zinc-800 absolute -bottom-14 flex items-end justify-center">
          <p className="text-[13px] font-medium text-zinc-600 -tracking-wide mt-2.5 mb-5 dark:text-zinc-300">
            Ainda não tem conta?{' '}
            <span className="text-blue-500 underline">Clique aqui</span>.
          </p>
        </div>
      </div>

      <footer className="fixed bottom-0 flex items-center justify-between mb-5 w-[800px] mx-auto">
        <p className="font-medium text-[13px] -tracking-wider text-zinc-500">
          © 2024 Andres dos Santos
        </p>

        <p className="font-medium text-[13px] -tracking-wider text-zinc-500">
          Suporte • Privacidade • Termos
        </p>
      </footer>
    </div>
  )
}
