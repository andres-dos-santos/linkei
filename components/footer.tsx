import { supabase } from '@/services/supabase/server'

export async function Footer() {
	const { count } = await supabase.from('urls').select('*', { count: 'exact' })

	return (
		<footer className="flex items-center absolute bottom-8 gap-1.5">
			<p className="text-2xl text-zinc-500 font-barlow font-bold -tracking-wider leading-0">
				{count && count > 0 ? `+${count - 1}` : 0}
			</p>
			<p className="font-sans -tracking-wide text-lg mt-1 italic text-zinc-500 font-normal leading-0">
				Links encurtados
			</p>
		</footer>
	)
}
