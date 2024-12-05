'use client'

import { ArrowRight, Loader } from 'lucide-react'
import { toast } from 'sonner'

// import { Checkbox } from './ui/checkbox'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from '@/components/ui/dialog'
import { useState } from 'react'
import { api } from '@/lib/api'
// import QRCode from 'react-qr-code'
// import { Input, InputLabel } from './ui/input'

export function Create() {
  const [, setUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function submit(formData: FormData) {
    setLoading(true)

    const url = formData.get('url')
    const qrCode = formData.get('qr-code')

    if (url) {
      const response = await api('', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
        method: 'POST',
      })

      if (response.ok) {
        const { data } = await response.json()

        navigator.clipboard.writeText(data.originalUrl)

        toast('✅ Link copiado', data.shortUrl)
      } else {
        toast('Houve algum erro ao criar seu link.')
      }

      if (qrCode === 'on') {
        setUrl(url.toString())
      }
    } else {
      toast('Você passou a URL?')
    }

    setLoading(false)
  }

  return (
    <>
      <form action={submit} className="relative flex flex-col">
        <input
          type="text"
          name="url"
          className="h-10 rounded-md w-80 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-600 p-2 border focus:ring-4 focus:ring-cyan-500/20 dark:focus:border-cyan-600 focus:border-cyan-500 bg-transparent outline-none text-[13px] -tracking-wider text-zinc-700 font-medium"
          placeholder="https://meulinkaqui.com"
        />

        <button className="h-10 group rounded-md bg-cyan-500 transition-all duration-300 hover:bg-cyan-500/90 w-full mt-1.5 flex items-center justify-center outline-none">
          {loading ? (
            <Loader className="size-4 mr-2 text-white animate-spin" />
          ) : (
            <ArrowRight className="size-4 mr-2 text-white group-hover:translate-x-10 transition-all duration-500" />
          )}

          <p className="group-hover:opacity-0 font-medium -tracking-wide transition-all duration-500 text-[13px] flex items-center text-white">
            Faça isso!
          </p>
        </button>
      </form>

      {/* <Dialog open={!!url} onOpenChange={() => setUrl(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <span className="text-zinc-500">Agora é só</span> compartilhar
            </DialogTitle>
            <DialogDescription>
              Compartilhe seu link através do código QR.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center mt-5">
            {url && (
              <div className="p-2 border border-dashed border-primary">
                <QRCode value={url} />
              </div>
            )}

            <button
              type="button"
              className="flex items-center w-[92.5%] mt-5 justify-center h-9 bg-zinc-900 dark:bg-white rounded-[2px] hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-200"
            >
              <ArrowRight className="text-secondary dark:text-primary size-4" />{' '}
              <p className="text-[13px] font-medium text-secondary dark:text-primary">
                Copiar
              </p>
            </button>
          </div>
        </DialogContent>
      </Dialog> */}
    </>
  )
}
