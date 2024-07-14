import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png'
import ogHeroImg from '../../assets/og-img.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import leetcodeLight from '../../assets/leetcode-light.svg'
import leetcodeDark from '../../assets/leetcode-dark.svg'
import githubLight from '../../assets/github-light.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import cv from '../../assets/rohan-pagare-cv.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme == 'light' ? sun : moon;
    const twitterIcon = theme == 'light' ? twitterLight : twitterDark;
    const leetcodeIcon = theme == 'light' ? leetcodeDark : leetcodeLight;
    const githubIcon = theme == 'light' ? githubLight : githubDark;
    const linkedinIcon = theme == 'light' ? linkedinLight : linkedinDark;
    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={ogHeroImg} alt='profile img' />
                <img className={styles.colorMode} src={themeIcon} onClick={toggleTheme} alt='color mode img' />
            </div>
            <div className={styles.info}>
                <h1>Rohan
                    <br />
                    Pagare
                </h1>
                <h2>Full-Stack Developer</h2>
                <span className={styles.text}>
                    {/* <a href='https://twitter.com/' target='_blank'>
                        <img src={twitterIcon} alt="twitter icon" />
                    </a> */}
                    <a href='https://leetcode.com/u/Rohan7529/' target='_blank'>
                        <img src={leetcodeIcon} alt="leetcode icon" />
                    </a>
                    <a href='https://github.com/Rohan7050' target='_blank'>
                        <img src={githubIcon} alt="github icon" />
                    </a>
                    <a href='https://www.linkedin.com/in/rohanpagare75/' target='_blank'>
                        <img src={linkedinIcon} alt="linkedin icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    With a passion for developing modern React web apps for commercial businesses.
                </p>
                
                <a target='_blank' href={cv} download>
                    <button className='hover'>Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Hero