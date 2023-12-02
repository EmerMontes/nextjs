import Link from 'next/link'

export default function Page() {
    return <ul>
        <li><Link href={'/about'}> About me </Link></li>
        <li><Link href={'/'}> Home </Link></li>
     </ul>
    
  }