import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="logo-link" aria-label="Lab Integrity Pro home">
      <img src="/logo.svg" alt="" className="logo-image" width={34} height={34} />
      <span className="logo-wordmark">
        Lab Integrity <span>Pro</span>
      </span>
    </Link>
  )
}
