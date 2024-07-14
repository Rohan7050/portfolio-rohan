

function ProjectCard({name, desc, src}) {
    return (
        <a>
            <img className='hove' src={src} alt={`${name} logo`} />
            <h3>{name}</h3>
            <p>{desc}</p>
        </a>
    )
}

export default ProjectCard