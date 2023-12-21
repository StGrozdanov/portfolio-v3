'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '90vh' }}>
            <Image
                src='/images/error-page.jpeg'
                alt=''
                priority={true}
                fill
            />
            <h3 style={{ zIndex: 1, color: 'white', position: 'absolute', bottom: 150, left: 100 }}>
                While we work on fixing the problem you can use the try again button or come back later
            </h3>
            <button
                style={{
                    background: 'orange none repeat scroll 0 0',
                    color: '#000',
                    fontSize: '1rem',
                    padding: '10px 0',
                    transition: 'all 0.3s ease 0s',
                    width: '165px',
                    marginTop: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'absolute',
                    bottom: 100,
                    zIndex: 1,
                    left: 400
                }}
                onClick={reset}
            >
                Try again
            </button>
            <FontAwesomeIcon
                icon={faRotateRight}
                style={{ position: 'absolute', left: 420, bottom: 112, zIndex: 1 }}
            />
        </div>
    )
}