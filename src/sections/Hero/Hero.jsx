import styles from './HeroStyles.module.css';
import ogHeroImg from '../../assets/og-img.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import leetcodeLight from '../../assets/leetcode-light.svg'
import leetcodeDark from '../../assets/leetcode-dark.svg'
import githubLight from '../../assets/github-light.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import cv from '../../assets/rohan-pagare-cv.pdf'
import { useTheme } from '../../common/ThemeContext';
import { Tilt } from 'react-tilt'

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme == 'light' ? sun : moon;
    const leetcodeIcon = theme == 'light' ? leetcodeDark : leetcodeLight;
    const githubIcon = theme == 'light' ? githubLight : githubDark;
    const linkedinIcon = theme == 'light' ? linkedinLight : linkedinDark;
    return (
        <section id="hero" className={styles.container}>
            <img className={styles.colorMode} src={themeIcon} onClick={toggleTheme} alt='color mode img' />
            <div className={styles.colorModeContainer}>
                <Tilt options={defaultOptions} >
                    <img className={styles.hero} src={ogHeroImg} alt='profile img' />
                </Tilt>
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
                    Full Stack Engineer with 2+ years of experience in web, mobile, and server applications. Actively engaged in solving 300+ DSA questions on Leetcode and GFG.
                </p>

                <a target='_blank' href={cv} download>
                    <button className='hover'>Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Hero