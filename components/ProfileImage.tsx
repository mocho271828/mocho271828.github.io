import Image from 'next/image'

export default function ProfileImage() {
  return (
    <Image
      src="/images/profile.jpg"
      alt="Profile"
      width={500}
      height={500}
    />
  )
}
