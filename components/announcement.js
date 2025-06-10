import React from 'react';
import Link from 'next/link';

export default function Announcement() {
  return (
    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSehNBhz2nZYF2xR12RJGR005mHZUej9F4lnYfcAIqW921W75A/viewform">
    <div className='cursor-pointer border text-white min-w-[300px] rounded-lg p-1 text-center text-lg'>Be a part of the legacy!</div>
    </Link>
  )
}
