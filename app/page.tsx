import { api } from '@/lib/api'

import type { Url } from '@prisma/client'

import { Urls } from '@/components/urls'
import { CreateShortUrlForm } from '@/components/create-short-url-form'
import { Logo } from '@/components/logo'
import { LinkSvg } from '@/components/svg/link.svg'
import { FreeSvg } from '@/components/svg/free.svg'
import { SecureSvg } from '@/components/svg/secure.svg'
import { QRCodeSvg } from '@/components/svg/qr-code.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

async function getUrls(): Promise<Url[]> {
  const response = await api('shorten')

  if (response.ok) {
    const data = await response.json()

    return data
  }

  return []
}

export default async function _page() {
  const urls = await getUrls()

  return (
    <div className="mx-auto grid grid-cols-2 max-w-[1120px]">
      <div className="pr-14 flex flex-col min-h-screen justify-between pb-5">
        <header className="flex flex-col items-start gap-2.5 mt-20 mb-10">
          <div className="flex flex-col items-start gap-2.5">
            <Logo />

            <p className="-tracking-wide text-[13px] text-zinc-600 font-medium">
              Encurte seus URLs longos e compartilhe-os facilmente.
            </p>
          </div>
        </header>

        <CreateShortUrlForm />

        <div className="flex flex-col mt-auto">
          <div className="mt-auto grid grid-cols-2 gap-2.5 mb-2.5">
            <div className="bg-zinc-50 hover:scale-[1.02] cursor-not-allowed transition-all duration-200 p-5 rounded-[2px]">
              <div className="flex items-center gap-2.5">
                <div className="rounded flex items-center justify-center h-10 w-10 bg-white">
                  <LinkSvg />
                </div>
                <p className="text-sm font-medium">Curto</p>
              </div>
              <p className="text-xs text-zinc-600 mt-4">
                Encurte links de qualquer tamanho com o Encurtador
              </p>
            </div>

            <div className="bg-zinc-50 hover:scale-[1.02] cursor-not-allowed transition-all duration-200 p-5 rounded-[2px]">
              <div className="flex items-center gap-2.5">
                <div className="rounded flex items-center justify-center h-10 w-10 bg-white">
                  <FreeSvg />
                </div>
                <p className="text-sm font-medium">Grátis</p>
              </div>
              <p className="text-xs text-zinc-600 mt-4">
                Crie quantos links encurtados quiser e compartilhe
              </p>
            </div>

            <div className="bg-zinc-50 hover:scale-[1.02] cursor-not-allowed transition-all duration-200 p-5 rounded-[2px]">
              <div className="flex items-center gap-2.5">
                <div className="rounded flex items-center justify-center h-10 w-10 bg-white">
                  <SecureSvg />
                </div>
                <p className="text-sm font-medium">Seguro</p>
              </div>
              <p className="text-xs text-zinc-600 mt-4">
                Usamos protocolo https com criptografia de dados nas URLs
              </p>
            </div>

            <div className="bg-zinc-50 hover:scale-[1.02] cursor-not-allowed transition-all duration-200 p-5 rounded-[2px]">
              <div className="flex items-center gap-2.5">
                <div className="rounded flex items-center justify-center h-10 w-10 bg-white">
                  <QRCodeSvg />
                </div>
                <p className="text-sm font-medium">QR Code</p>
              </div>
              <p className="text-xs text-zinc-600 mt-4">
                Gere sua URL e disponibilize através de QRCode.
              </p>
            </div>
          </div>

          <hr className="my-10" />

          <div className="flex items-center gap-2.5 mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/andres-dos-santos.png" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>

            <p className="text-[13px]">Andres doSantos</p>
          </div>
        </div>
      </div>

      <Urls urls={urls} />
    </div>
  )
}
