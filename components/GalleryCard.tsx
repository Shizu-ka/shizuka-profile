import { useTranslation } from 'next-i18next'
import useSWR from 'swr'
import type { GalleryCardProps } from '~/types/components'
import type { GithubRepository } from '~/types/server'
import { fetcher } from '~/utils/fetcher'
import { GithubRepo } from './GithubRepo'
import { Image } from './Image'
import { Link } from './Link'

export function GalleryCard({ gallery }: GalleryCardProps) {
  let { t } = useTranslation('common')
  let { title, imgSrc, } = gallery

  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-transparent shadow-nextjs dark:shadow-nextjs-dark">
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-48 lg:h-80"
          width={1088}
          height={612}
        />
        <div className="flex grow flex-col justify-between space-y-6 p-4 md:p-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              {(
                title
              )}
            </h2>
            <div className="max-w-none space-y-2 text-gray-500 dark:text-gray-400">
              <div className="flex flex-wrap space-x-1.5">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
