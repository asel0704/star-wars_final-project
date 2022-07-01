import React, { useState } from "react";
import './TestPage.css';

export function TestPage() {
    const questions = [
        {
            questionText: 'С какой фразы начинается космическая киносага Джорджа Лукаса?',
            img: 'https://i.pinimg.com/originals/1a/a7/c1/1aa7c1233a0b10eb1c0f5f92a08551f9.jpg',
            answerOptions: [
                { answerText: 'Совсем недавно на соседней планете...', isCorrect: false },
                { answerText: 'Давным-давно в далекой-далекой галактике...', isCorrect: true },
                { answerText: 'В тридевятом царстве, в тридесятом государстве...', isCorrect: false },
                { answerText: 'Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему...', isCorrect: false },
            ]
        },

        {
            questionText: 'Какую фамилию носит один из главных героев оригинальной трилогии «Звездные войны» по имени Хан?',
            img: 'https://md-eksperiment.org/upload/image/redactor/5adcd0fa8abbf.jpeg',
            answerOptions: [
                { answerText: 'Батый', isCorrect: false },
                { answerText: 'Циммер', isCorrect: false },
                { answerText: 'Соло', isCorrect: true },
                { answerText: 'Скайуокер', isCorrect: false },
            ]
        },

        {
            questionText: 'Какой космический корабль пилотирует персонаж Харрисона Форда?',
            img: 'https://www.kino-teatr.ru/news/10210/100037.jpg',
            answerOptions: [
                { answerText: '«Годовалый страус»', isCorrect: false },
                { answerText: '«Десятилетний попугай»', isCorrect: false },
                { answerText: '«Столетняя сова»', isCorrect: false },
                { answerText: '«Тысячелетний сокол»', isCorrect: true },
            ]
        },

        {
            questionText: 'К какой расе принадлежит Чубакка?',
            img: 'https://www.factinate.com/wp-content/uploads/2018/07/68924-rey-chewbacca-star-wars-the-last-jedi-wide-169-lg.jpg',
            answerOptions: [
                { answerText: 'Андалы', isCorrect: false },
                { answerText: 'Вуки', isCorrect: true },
                { answerText: 'Клингонцы', isCorrect: false },
                { answerText: 'Хуорны', isCorrect: false },
            ]
        },

        {
            questionText: 'Что из перечисленного не является роботом?',
            img: 'https://cumgeek.com/wp-content/uploads/2017/09/SW17HR-118.jpg',
            answerOptions: [
                { answerText: 'R2-D2', isCorrect: false },
                { answerText: 'C-3PO', isCorrect: false },
                { answerText: 'BB-8', isCorrect: false },
                { answerText: 'АК-47', isCorrect: true },
            ]
        },

        {
            questionText: 'Как зовут короля преступного мира планеты Татуин?',
            img: 'https://www.bricktastic.nl/wp-content/uploads/2019/07/jabba-the-hutt-and-throne-deluxe_star-wars_gallery_5c4ccdd67df5b-e1563197484234.jpg',
            answerOptions: [
                { answerText: 'Тони Сопрано', isCorrect: false },
                { answerText: 'Вито Корлеоне', isCorrect: false },
                { answerText: 'Пабло Эскобар', isCorrect: false },
                { answerText: 'Джабба Хатт', isCorrect: true },
            ]
        },

        {
            questionText: 'Кем был дядя Люка Скайуокера?',
            img: 'https://pepelsbey.net/pres/semantics/pictures/html5.jpg',
            answerOptions: [
                { answerText: 'Имперским штурмовиком', isCorrect: false },
                { answerText: 'Охотником за головами', isCorrect: false },
                { answerText: 'Фермером-влагодобытчиком', isCorrect: true },
                { answerText: 'Мужем тети Мэй', isCorrect: false },
            ]
        },

        {
            questionText: 'Как полностью звучит реплика Оби-Ван Кеноби, обращенная к имперским штурмовикам?',
            img: 'https://www.film.ru/sites/default/files/news/25481590-924584.jpg',
            answerOptions: [
                { answerText: '«Это не те миллионы, что вы ищете»', isCorrect: false },
                { answerText: '«Это не те сценаристы, что вы ищете»', isCorrect: false },
                { answerText: '«Это не те дроиды, что вы ищете»', isCorrect: true },
                { answerText: '«Это не те андроиды, что вы ищете»', isCorrect: false },
            ]
        },

        {
            questionText: 'Выберите правильное написание фразы, которую используют в мире «Звездных войн» для пожелания удачи:',
            img: 'https://pbs.twimg.com/media/EkXaSsXXcAAjghc.jpg',
            answerOptions: [
                { answerText: '«Да пребудет со мной Сила»', isCorrect: false },
                { answerText: '«Да пребудет с тобой Сила»', isCorrect: true },
                { answerText: '«Да прибудет с тобой Сила»', isCorrect: false },
                { answerText: '«Да прибудет с тобой Сила и гуманитарная помощь»', isCorrect: false },
            ]
        },

        {
            questionText: 'Как называется вымышленная разумная микроскопическая форма жизни, находящаяся внутри всех живых существ, согласно вселенной «Звездных войн»?',
            img: 'https://www.gamingdragons.com/images/game_img/screenshots/starwarsbattlefront2/Walrus_pdp_screenhi_3840x2160_en_ww_deathstardebrisfield_v1.jpg',
            answerOptions: [
                { answerText: 'Бифидобактерии', isCorrect: false },
                { answerText: 'Мидихлорианы', isCorrect: true },
                { answerText: 'Хламидии', isCorrect: false },
                { answerText: 'Стрептомицеты', isCorrect: false },
            ]
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        }
        else {
            setShowScore(true)
        }
    }

    const refresh = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }
    return (
        <div className="app">
            {
                showScore
                    ? <div className="section_score">
                        <div>Правильных ответов {score} из {questions.length}</div>
                        <button
                            className="refresh_btn"
                            onClick={refresh}
                        >Попробовать ещё раз...</button>
                    </div>
                    : <div className="quizz">
                        <div className="question_section">
                            <div className="question_count">
                                <span style={{fontSize:'28px'}}>Вопрос {currentQuestion + 1}</span> / {questions.length}
                            </div>
                            <img className="image" src={questions[currentQuestion].img} />
                            <div className="question_text">{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className="answer_section">
                            {questions[currentQuestion].answerOptions.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick(item.isCorrect)}
                                >{item.answerText}</button>
                            ))}
                        </div>
                    </div>
            }
        </div>
    )
}
