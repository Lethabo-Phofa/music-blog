import ContainerLayout from '@/layout/ContainerLayout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutPage() {
  return (
    <ContainerLayout>
      <div className='px-4 sm:px-12 mb-10'>
        {/** heading */}
        <div className='text-center mb-16'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4'>
            About MusicBlog
          </h1>
          <p className='text-gray-400 max-w-2xl mx-auto leading-relaxed '>
            A modern music blog inspired by the likes of Splice. 
          </p>
        </div>
        {/** content */}
        <div className='space-y-14'>
          {/** section1  */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <Image src="/images/about.png" alt="about-image" width={600} height={600} className='rounded-2xl object-cover'/>
            <div>
              <h2 className='text-2xl font-semibold text-gray-200 mb-4'>
                Why MusicBlog?
              </h2>
              <p className='text-gray-400 leading-relaxed'>
                MusicBlog was created to share information on music as a whole. Whether it's history or the more modern kind, we aim to cover it all on our site. 
              </p>
            </div>
          </div>
          {/** section2 */}
          <div className='bg-secondary-background rounded-2xl p-8 border border-white/10'>
            <h2 className='text-2xl font-semibold text-gray-200 mb-4'>
              What We Write About
            </h2>
            <ul className='space-y-3 text-gray-400'>
              <li>• History of Music</li>
              <li>• Music Theory (Chords & Scales)</li>
              <li>• Music Deep Dive (Songs & Albums)</li>
            </ul>
          </div>
          {/** section3 */}
          <div className='text-center'>
          <h2 className='text-2xl font-semibold text-gray-200 mb-4'>Built for Music Enthusiasts</h2>
          <p className='text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore aut eveniet laboriosam consequuntur ratione beatae, optio distinctio voluptatem.</p>
          <Link href="/articles" className='inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold'> Explore </Link>
          </div>

        </div>
      </div>
    </ContainerLayout>
  )
}
