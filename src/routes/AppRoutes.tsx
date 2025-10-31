
import {Routes,Route} from "react-router-dom"
import MainLayout from '../layouts/MainLayout'
import { HomePage,AboutPage,EducationPage,ProjectsPage } from '../pages'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout> <HomePage /> </MainLayout>}  />
      <Route path="/about" element={<MainLayout> <AboutPage /> </MainLayout>}  />
      <Route path="/education" element={<MainLayout> <EducationPage /> </MainLayout>}  />
      <Route path="/projects" element={<MainLayout> <ProjectsPage /> </MainLayout>}  />
      <Route path="*" element={<MainLayout> <HomePage /> </MainLayout>} />
    </Routes>
  )
}

export default AppRoutes