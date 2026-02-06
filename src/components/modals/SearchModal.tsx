"use client"
import { title } from 'process';
import Modal from './Modal'
import { useModalStore } from '@/store/useModalStore'

const results = [
  {
    id: 1,
    title: "Building a Blog Site like Splice with Next.js",
    slug: "/articles/splice-style-blog"
  } ,
  {
    id: 2,
    title: "Something Music Related for article two",
    slug: "/articles/article-two"
  }
]

export default function SearchModal() {
  const {closeSearch, isSearchOpen} = useModalStore();
  return (
    <Modal onClose={closeSearch} isOpen={isSearchOpen}>
      <div className='space-y-4'>
        <input type="text" placeholder='Search articles' autoFocus
        className='w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white text-lg outline-none focus:text-indigo-500'/>

        {/** display search results */}
      <div className='max-h-80 overflow-y-auto rounded-xl border border-white/10 divide-y divide-white/10'>
      {results.map((result) => {
        return (
          <button key={result.id} className='w-full text-left px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white cursor-pointer'>
          {result.title}
          </button>
        )
      })}
      </div>
      </div>

    </Modal>
  )
}
