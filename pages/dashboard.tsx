import { PageSeo } from 'components/SEO'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GalleryCard } from '~/components/GalleryCard'
import type { Project_g } from '~/types/data'

export async function getStaticProps({ locale }) {
  let projectsDataModule = await import(`~/data/${locale}/galleryData.ts`)
  let projectsData = projectsDataModule.galleryData

  return {
    props: {
      projectsData,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default function Projects({ projectsData }: { projectsData: Project_g[] }) {
  // let workProjects = projectsData.filter(({ type }) => type === 'work')
  let sideProjects = projectsData.filter(({ type }) => type === 'self')
  // let indProjects = projectsData.filter(({ type }) => type === 'indonesia')
  let { t } = useTranslation('common')

  let description = t('projects.dasboard_description')

  return (
    <>
      <PageSeo
        title={`${t('projects.dashboard_title')} - ${t('site_meta_data.author')} - ${t(
          'site_meta_data.title'
        )}`}
        description={description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('projects.dashboard_title')}
          </h1>
          <p className="text-base md:text-lg md:leading-7 text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="container py-12">
          <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            {t('projects.self_title')}
          </h3>
          <div className="-m-4 flex flex-wrap">
            {sideProjects.map((project) => (
              <GalleryCard key={project.title} gallery={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
