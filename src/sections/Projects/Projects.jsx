import Styles from './ProjectsStyle.module.css'
import Upvote from '../../assets/upvote.png'
import KotakMF from '../../assets/kotakmf.png'
import TicTacToe from '../../assets/tic-tac-toe.png'
import KotakGlobal from '../../assets/kotak-international.png'
import ProjectCard from '../../common/components/ProjectCard'
function Projects() {
    const projectList = [
        { id: 2, name: 'KotakMF', desc: '', link: 'https://www.kotakmf.com/', src: KotakMF },
        { id: 3, name: 'Kotak Global', desc: '', link: 'https://www.kotak-international.com/', src: KotakGlobal },
        { id: 1, name: 'Upvote', desc: '', link: 'https://github.com/Rohan7050/upvote', src: Upvote },
        {id: 4, name: 'Tic Tac Toe', desc: '', link: 'https://github.com/Rohan7050/tic-tac-toe', src: TicTacToe}
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
                        link={project.link}
                        key={project.id} />
                ))}
            </div>
        </section>
    )
}

export default Projects