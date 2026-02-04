import Image from "next/image"
import Link from "next/link"

export const posts= [
  {
    id: 1,
    title: "The Resurgence of Analog: Why Vinyl Still Rules",
    excerpt: "In a world of streaming algorithms, the tactile experience of needle-to-groove is making a massive comeback.",
    date: "2026-02-01",
    slug: "resurgence-of-analog-vinyl",
    image: "https://images.unsplash.com/photo-1539375665275-f9ad415ef9ac?q=80&w=1000",
    category: "Culture"
  },
  {
    id: 2,
    title: "Synthesizer Dreams: A Guide to Modular Gear",
    excerpt: "Diving into the expensive, addictive, and infinitely creative world of Eurorack modules.",
    date: "2026-01-28",
    slug: "guide-to-modular-synths",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000",
    category: "Gear"
  },
  {
    id: 3,
    title: "Lo-fi Beats to Study To: The Science of Focus",
    excerpt: "How 808s and muffled jazz samples became the soundtrack for a generation of students.",
    date: "2026-01-15",
    slug: "lo-fi-beats-science-of-focus",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000",
    category: "Lifestyle"
  },
  {
    id: 4,
    title: "Underground Echoes: Berlin’s Techno Scene in 2026",
    excerpt: "Exploring the dark, industrial basements where the pulse of electronic music never stops.",
    date: "2026-01-10",
    slug: "berlin-techno-scene-2026",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
    category: "Events"
  }
]
export default function RecentPosts() {
  return (
    <div className='space-y-2 mb-10'>
      <h2 className='text-white text-xl sm:text-2xl md:text-3xl font-semibold'>
        Recent Posts
      </h2>
      {/* cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post) => {
          return(
            <div key={post.id} className="group rounded-xl overflow-hidden bg-[#0B0B0B] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
              {/* image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={post.image} alt={post.title} className="object-cover transition-transform duration-500 group-hover:scale-105" fill/>
                <div className="absolute inset-0 bg-black/30"/>
              </div>
               {/* content */}
               <div className="p-5 space-y-3">
                <time className="text-xs text-gray-400">{post.date}</time>
                <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-indigo-400 transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <Link href={`/articles/${post.slug}`} className="inline-block text-sm font-medium text-indigo-400 hover:underline"> Read article → </Link>
               </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
