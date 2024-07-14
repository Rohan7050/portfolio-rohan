

function SkillList({ src, skill }) {
    return (
        <span>
            <img src={src} alt='CheckMark image' />
            <p>{skill}</p>
        </span>
    )
}

export default SkillList