import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../assets/checkmark-light.svg'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/components/SkillList'
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const {theme, toggleTheme} = useTheme();
    const checkMarkImg = theme == 'light' ? checkMarkLight : checkMarkDark;
    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <h3 className='subSectionTitle'>Languages</h3>
            <div className={styles.skillList}>
                <SkillList src={checkMarkImg} skill='Typescript' />
                <SkillList src={checkMarkImg} skill='Javascript' />
                <SkillList src={checkMarkImg} skill='HTML' />
                <SkillList src={checkMarkImg} skill='CSS' />
                <SkillList src={checkMarkImg} skill='SCSS' />
            </div>
            <hr />
            <h3 className='subSectionTitle'>Front-end & Back-end</h3>
            <div className={styles.skillList}>
                <SkillList src={checkMarkImg} skill='React JS' />
                <SkillList src={checkMarkImg} skill='Angular' />
                <SkillList src={checkMarkImg} skill='Ionic' />
                <SkillList src={checkMarkImg} skill='Node.js' />
                <SkillList src={checkMarkImg} skill='Express' />
            </div>
            <hr />
            <h3 className='subSectionTitle'>Databases</h3>
            <div className={styles.skillList}>
                <SkillList src={checkMarkImg} skill='Postgres' />
                <SkillList src={checkMarkImg} skill='MySQL' />
                <SkillList src={checkMarkImg} skill='MongoDB' />
            </div>
            <hr />
            <h3 className='subSectionTitle'>Tools</h3>
            <div className={styles.skillList}>
                <SkillList src={checkMarkImg} skill='Git' />
                <SkillList src={checkMarkImg} skill='Docker' />
                <SkillList src={checkMarkImg} skill='AWS' />
                <SkillList src={checkMarkImg} skill='Git' />
                <SkillList src={checkMarkImg} skill='Jenkins' />
                <SkillList src={checkMarkImg} skill='Redis' />
                <SkillList src={checkMarkImg} skill='Postman' />
                <SkillList src={checkMarkImg} skill='NGINX' />
                <SkillList src={checkMarkImg} skill='Postman' />
            </div>
            <hr />
            <h3 className='subSectionTitle'>Other</h3>
            <div className={styles.skillList}>
                <SkillList src={checkMarkImg} skill='Data structures' />
                <SkillList src={checkMarkImg} skill='Algorithms' />
                <SkillList src={checkMarkImg} skill='Server management' />
                <SkillList src={checkMarkImg} skill='CI/CD' />
            </div>
            <hr />
        </section>
    )
}

export default Skills