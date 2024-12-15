import { Create } from '@/components/create'
import { Logo } from '@/components/logo'
import { Profile } from '@/components/profile'
import { Theme } from '@/components/theme'
import { LinkIcon, Shield, Zap } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { HistoryTrigger } from '@/components/history-trigger'
import { getData } from './actions'
import { OpenUrl } from '@/components/open-url'
import { CopyToClipboard } from '@/components/copy-to-clipboard'

export default async function _page() {
  const data = await getData()

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-[#1c1c1c] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:8px_10px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[340px] w-[310px] rounded-full bg-cyan-600 opacity-20 blur-[100px]"></div>
      <div className="absolute left-0 right-0 -z-10 h-[560px] w-[560px] rounded-full bg-fuchsia-200 opacity-20 blur-[100px]"></div>

      <div className="h-screen w-screen flex items-center justify-center sm:mx-auto sm:max-w-[800px]">
        <header className="absolute h-24 flex w-full items-center justify-between px-10 sm:px-0 top-0 gap-10 sm:mx-auto sm:max-w-[800px]">
          <Logo />

          <div className="flex items-center gap-5">
            <Sheet>
              <HistoryTrigger />
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <span className="text-zinc-400 dark:text-white">Seu </span>{' '}
                    <br />
                    histórico
                  </SheetTitle>
                  <SheetDescription>
                    Salvamos os seus links encurtados, fique à vontade para
                    relembrar deles, passe o mouse por cima para ver um preview.
                  </SheetDescription>
                </SheetHeader>

                <ul className="mt-5">
                  {data.map((item) => {
                    return (
                      <li key={item.id}>
                        <div className="flex items-center gap-2.5 p-2 group rounded hover:bg-zinc-50/50 dark:hover:bg-zinc-700/50">
                          <div className="h-20 w-20 min-w-20 min-h-20 max-w-20 max-h-20 flex items-center bg-zinc-50 dark:bg-zinc-600 justify-center rounded">
                            {item.faviconlink ? (
                              <img src={item.faviconlink} alt="" />
                            ) : (
                              <p className="text-xs uppercase">
                                {item.faviconname}
                              </p>
                            )}
                          </div>

                          <div className="flex flex-col">
                            <OpenUrl
                              id={item.id}
                              originalurl={item.originalurl}
                              shorturl={item.shorturl}
                            />

                            <footer className="mt-1.5 flex items-center gap-2.5">
                              <p className="text-[12px] font-medium -tracking-wider text-zinc-700 dark:text-zinc-300">
                                {item.visits} visualizações
                              </p>

                              <CopyToClipboard shortUrl={item.shorturl} />
                            </footer>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </SheetContent>
            </Sheet>

            <Theme />
          </div>
        </header>

        <div className="flex flex-col-reverse sm:flex-row items-center px-10">
          <div className="grid w-full grid-cols-1 sm:w-[400px] mt-10 sm:mt-0 px-10">
            <div className="mt-10">
              <p className="font-medium -tracking-wide text-sm flex items-center text-zinc-700 dark:text-white">
                <LinkIcon className="size-4 mr-2  text-zinc-500 dark:text-zinc-300" />{' '}
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

          <div className="border bg-zinc-50 dark:bg-zinc-600/50 backdrop-blur-md p-2 relative flex flex-col items-center justify-between rounded-[20px]">
            <div className="flex flex-col sm:w-[400px] items-center shadow-lg justify-center border rounded-2xl p-10 border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-700/50">
              <h1 className="text-lg font-semibold -tracking-widest">
                Encurte aqui
              </h1>

              <p className="text-[13px] font-medium text-zinc-600 -tracking-wide mt-2.5 mb-5 dark:text-zinc-300">
                Digite o seu link no campo abaixo e encurte-o.
              </p>

              <Create />
            </div>

            <div className="w-full rounded-b-2xl flex items-end justify-center">
              <Profile />
            </div>
          </div>
        </div>

        <footer className="absolute bottom-0 left-0 right-0 flex items-center justify-between mb-5 w-full px-10 sm:w-[800px] sm:mx-auto">
          <p className="font-medium text-[13px] -tracking-wider text-zinc-500 dark:text-zinc-300">
            © 2024 Andres dos Santos
          </p>

          <p className="font-medium text-[13px] -tracking-wider text-zinc-500 dark:text-zinc-300">
            Suporte • Privacidade • Termos
          </p>
        </footer>
      </div>
    </div>
  )
}
