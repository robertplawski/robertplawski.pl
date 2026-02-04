import GlowCard from "@/app/bits/GlowCard/GlowCard"
import { DownloadIcon } from "lucide-react"
import TiltedLines from "../decorational/TiltedLines"

const DOWNLOAD_URL_ROOT = "/documents/"
const FILENAME_ROOT = "robert-plawski-pl-"

interface DocumentCardProps {
  title: string,
  src: string,
  date: string,
}
function DocumentCard({ title, date, src }: DocumentCardProps) {
  return <GlowCard className="group">
    <a rel="noopener noreferrer" target="_blank" href={DOWNLOAD_URL_ROOT + src} download={FILENAME_ROOT + src} title={title}>
      <div className="flex-1 p-4 sm:p-4 cursor-pointer relative h-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl hover:shadow-neutral-500/10">
        <div className="flex flex-1 h-full justify-around flex-col gap-1">
          <p className="font-bold">{title}</p>
          <p>{date}</p>
          <div className='opacity-70 flex flex-row gap-3 items-center'>
            <DownloadIcon size={16} />

            <p >Kliknij aby pobrać...</p>
          </div>


        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 to-neutral-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

    </a>
  </GlowCard >
}

export default function References() {
  return <section
    id="references"
    className="py-20 border-neutral-700 border-b-1 px-4 sm:px-6 lg:px-8  bg-neutral-950/20 relative"
  >

    <TiltedLines />
    <div className=" flex-col mx-auto max-w-7xl">

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Documents and references
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Download documents relevant to my experience
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <DocumentCard date="Opole, dnia 13 lutego 2025" src="stem.jpg" title="Zaświadczenie 20h zajęcia rozwoju kompetencji kluczowych" />
          <DocumentCard date="Wrocław, dnia 29 sierpnia 2025" src="inf03.jpg" title="Certyfikat kwalifikacji zawodowej INF03 100%" />
          <DocumentCard date="Opole, dnia 11 października 2025" src="hackathon.jpg" title="Certyfikat uczestnictwa w studenckim hackathonie " />
        </div>
      </div>
    </div>
  </section>


}
