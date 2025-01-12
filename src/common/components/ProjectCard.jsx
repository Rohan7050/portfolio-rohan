

function ProjectCard({name, desc, src, link}) {
    return (
        <a target="_blank" href={link}>
            <img className='hove' src={src} alt={`${name} logo`} />
            <h3>{name}</h3>
            <p>{desc}</p>
        </a>
    )
}

export default ProjectCard