import siteMetadata from '~/data/siteMetadata'
import { BuiltWith } from './BuiltWith'
import Container from './Container'

export function Footer() {
  return (
    <Container as="footer">
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
        <BuiltWith />
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>{siteMetadata.title}</span>
        </div>
      </div>
    </Container>
  )
}
