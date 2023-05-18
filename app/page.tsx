"use client"

import Image from 'next/image'
import Button from '@mui/material/Button';
import { css } from '@emotion/react';

export default function Home() {
  //style with emotion css
  const style = css`
    color: red;
    font-size: 50px;
  `
  return (
    <main>
      <div>
      <Button variant="contained">Hello World</Button>
      </div>
    </main>
  )
}
