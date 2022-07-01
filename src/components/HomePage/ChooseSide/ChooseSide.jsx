import PropTypes from 'prop-types';
import cn from 'classnames';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgBlue from './img/blue.jpg';

import styles from './ChooseSide.module.css';

const ChooseSideItem = ({
    classes,
    theme,
    img,
}) => {
    const isTheme = useTheme();

    return (
        <div
            className={cn(styles.item, classes)}
            onClick={() => isTheme.change(theme)}
        >
            <img className={styles.item__img} src={img} />
        </div>
    )
}

ChooseSideItem.propTypes = {
    classes: PropTypes.string,
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
}


const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: "Светлая сторона",
            img: imgLightSide,
            classes: styles.item__light,
        },
        {
            theme: THEME_DARK,
            text: "Тёмная сторона",
            img: imgDarkSide,
            classes: styles.item__dark,
        },
        {
            theme: THEME_NEITRAL,
            text: "I'm Han Solo",
            img: imgBlue,
            classes: styles.item__neitral,
        },
    ];

    return (
        <div className={styles.container}>
            {elements.map(({ theme, text, img, classes }, index) => (
                <ChooseSideItem
                    key={index}
                    theme={theme}
                    text={text}
                    img={img}
                    classes={classes}
                />
            ))}
        </div>
    )
}

export default ChooseSide;
