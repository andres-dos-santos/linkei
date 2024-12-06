import { QrCode } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import QRCode from 'react-qr-code'

type Props = {
  url: string
}

export function GenerateQrCode({ url }: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        <button>
          <QrCode className="size-4" />
        </button>
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center">
        <div className="flex items-center my-5">
          <QRCode value={url} size={250} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
