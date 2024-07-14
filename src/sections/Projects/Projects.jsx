import Styles from './ProjectsStyle.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/components/ProjectCard'
function Projects() {
    const projectList = [
        { id: 1, name: 'Viberr', desc: 'Streaming App', link: '', src: viberr },
        { id: 2, name: 'Viberr', desc: 'Streaming App', link: '', src: viberr },
        { id: 3, name: 'Viberr', desc: 'Streaming App', link: '', src: viberr }
    ]
    return (
        <section id='projects' className={Styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={Styles.projectsContainer}>
                {projectList.map((project) => (
                     <ProjectCard
                        name={project.name}
                        desc={project.desc}
                        src={project.src}
                        key={project.id} />
                ))}
            </div>
        </section>
    )
}

export default Projects