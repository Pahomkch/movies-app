'use client';

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      list of fresh movies
      <ul>
        <li>1</li>
        <li onClick={() => {throw new Error('BOO!')}}>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  )
}
