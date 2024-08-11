'use client'
import HeadingWithBrackets from '@/components/ui/HeadingWithBrackets/HeadingWithBrackets'
import ProjectListItem from '@/components/ui/ProjectListItem/ProjectListItem'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { projects } from './projects.data'

const ProjectSection = () => {
  const { t } = useTranslation()

  return (
    <section
      className={`pt-[85px] pb-[150px] bg-black-secondary relative overflow-x-hidden`}
      id='projects'
    >
      <div className='container mx-auto sm:px-[150px] px-[50px]'>
        <HeadingWithBrackets
          isSectionTitle
          text={t('projects.title')}
          className='mb-[105px] block text-center'
        />
        <AnimatePresence>
          <motion.ul transition={{ duration: 0.5 }}>
            {projects.map((item, index) => (
              <ProjectListItem item={item} index={index} key={item.link} />
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectSection
