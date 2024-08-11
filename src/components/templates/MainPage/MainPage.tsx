import AboutSection from '@/components/modules/AboutSection/AboutSection'
import ExperienceSection from '@/components/modules/ExperienceSection/ExperienceSection'
import MainSection from '@/components/modules/MainSection/MainSection'
import ScrollArrow from '@/components/ui/ScrollArrow/ScrollArrow'

const MainPage = () => {
  return (
    <>
      <MainSection />
      <AboutSection />
      <ExperienceSection />
      {/* <ProjectSection /> */}
      <ScrollArrow />
    </>
  )
}

export default MainPage
