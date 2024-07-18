import { PageSeo } from 'components/SEO'
import { ScrollTopButton } from '~/components/ScrollTopButton'
import { siteMetadata } from '~/data/siteMetadata'
import type { ResumeLayoutProps } from '~/types'

export function ResumeLayout({ children }: ResumeLayoutProps) {
  let description = 'My experiences, education and skills.'

  return (
    <>
      <PageSeo
        title={`Resume - ${siteMetadata.fullName} - ${description}`}
        description={`Resume - ${siteMetadata.fullName} - ${description}`}
      />
      <ScrollTopButton />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        <iframe title="resume" src="/resume.pdf" className="w-full h-screen"></iframe>
      </div>
    </>
  )
}

export default ResumeLayout
