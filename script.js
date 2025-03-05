        let soundd = true;

        document.querySelector('.settings').addEventListener('click', function() {
            var setting = document.querySelector('.setting');
            if (getComputedStyle(setting).display === 'none') {
                setting.style.display = 'block';
            }
            if (soundd) {
                document.getElementById('clicksound').play();
            }
        });

        document.querySelector('.h2').addEventListener('click', function() {
            var setting = document.querySelector('.setting');
            if (getComputedStyle(setting).display === 'block') {
                setting.style.display = 'none';
            }
            if (soundd) {
                document.getElementById('clicksound').play();
            }
        });



        let easyquiz = [
            { question: 'What is 2 + 2?', answer: 4 },
            { question: 'What is 3 - 2?', answer: 1 },
            { question: 'What is 4 + 6?', answer: 10 },
            { question: 'What is 5 x 5?', answer: 25 },
            { question: 'What is 6 - 6?', answer: 0 },
            { question: 'What is 7 + 2?', answer: 9 },
            { question: 'What is 8 - 0?', answer: 8 },
            { question: 'What is 9 + 4?', answer: 5 },
            { question: 'What is 10 - 4?', answer: 6 }
        ];

        let mediumquiz = [
            { question: 'What is 12 + 15?', answer: 27 },
            { question: 'What is 23 - 17?', answer: 6 },
            { question: 'What is 34 - 26?', answer: 8 },
            { question: 'What is 45 + 35?', answer: 80 },
            { question: 'What is 56 - 46?', answer: 10 },
            { question: 'What is 67 + 57?', answer: 124 },
            { question: 'What is 78 x 68?', answer: 5304 },
            { question: 'What is 89 + 79?', answer: 168 },
            { question: 'What is 90 - 80?', answer: 10 }
        ];

        let hardquiz = [
            { question: 'What is 123 + 456?', answer: 579 },
            { question: 'What is 567 - 234?', answer: 333 },
            { question: 'What is 345 + 678?', answer: 1023 },
            { question: 'What is 456 - 789?', answer: 333 },
            { question: 'What is 567 + 890?', answer: 1457 },
            { question: 'What is 678 + 901?', answer: 1579 },
            { question: 'What is 789 - 1012?', answer: 223 },
            { question: 'What is 890 x 1123?', answer: 99970 },
            { question: 'What is 1234 - 901?', answer: 333 }
        ];

        let quiz = easyquiz;
        let currentquiz = 0;
        let currentanswers = 0;
        const totalquizs = quiz.length;

        function answers() {
            let input = document.getElementById('quiz-input').value;
            if (input == quiz[currentquiz].answer) {
                document.getElementById('quiz-feedback').innerHTML = 'correct';
                currentanswers++;
            } else {
                document.getElementById('quiz-feedback').innerHTML = 'incorrect';
            }
            currentquiz++;
            if (currentquiz >= quiz.length) {
                document.getElementById('quiz-feedback').innerHTML = `you scored ${currentanswers}/${totalquizs}`;
                currentanswers = 0;
                currentquiz = 0;
            } else {
                document.querySelector('.headerr').innerHTML = quiz[currentquiz].question;
            }
            document.getElementById('quiz-input').value = '';
        }

         document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('.headerr').innerHTML = quiz[currentquiz].question;
        });

        function toggle1() {
            var togglee = document.querySelector('.togglee');
            var toggleee = document.querySelector('.toggleee');
            var toggleeee = document.querySelector('.toggleeee');

            if (!togglee.classList.contains('active')) {
                togglee.classList.add('active');
                togglee.style.transition = 'transform 0.5s ease';
                togglee.style.transform = 'translateX(0px)';

                toggleee.classList.remove('active');
                toggleee.style.transform = 'translateX(0)';

                toggleeee.classList.remove('active');
                toggleeee.style.transform = 'translateX(0)';
            }
            quiz = easyquiz;
            currentquiz = 0;
            currentanswers = 0;
            totalquizs = quiz.length;
            document.querySelector('.headerr').innerHTML = quiz[currentquiz].question;
        }

        function toggle2() {
            var togglee = document.querySelector('.togglee');
            var toggleee = document.querySelector('.toggleee');
            var toggleeee = document.querySelector('.toggleeee');

            if (!toggleee.classList.contains('active')) {
                toggleee.classList.add('active');
                toggleee.style.transition = 'transform 0.5s ease';
                toggleee.style.transform = 'translateX(50px)';

                togglee.classList.remove('active');
                togglee.style.transform = 'translateX(-50px)';

                toggleeee.classList.remove('active');
                toggleeee.style.transform = 'translateX(0)';
            }
            quiz = mediumquiz;
            currentquiz = 0;
            currentanswers = 0;
            totalquizs = quiz.length;
            document.querySelector('.headerr').innerHTML = quiz[currentquiz].question;
        }

        function toggle3() {
            var togglee = document.querySelector('.togglee');
            var toggleee = document.querySelector('.toggleee');
            var toggleeee = document.querySelector('.toggleeee');

            if (!toggleeee.classList.contains('active')) {
                toggleeee.classList.add('active');
                toggleeee.style.transition = 'transform 0.5s ease';
                toggleeee.style.transform = 'translateX(50px)';

                togglee.classList.remove('active');
                togglee.style.transform = 'translateX(-50px)';

                toggleee.classList.remove('active');
                toggleee.style.transform = 'translateX(0)';
            }
            quiz = hardquiz;
            currentquiz = 0;
            currentanswers = 0;
            totalquizs = quiz.length;
            document.querySelector('.headerr').innerHTML = quiz[currentquiz].question;
        }

        function toggle4() {
            var toggleeeee = document.querySelector('.toggleeeee');
            if (toggleeeee.classList.contains('active')) {
                toggleeeee.classList.remove('active');
                toggleeeee.style.transform = 'translateX(0)';
                document.body.classList.remove('ggg');
                document.body.classList.remove('dark-mode');
            } else {
                toggleeeee.classList.add('active');
                toggleeeee.style.transition = 'transform 0.5s ease';
                toggleeeee.style.transform = 'translateX(50px)';
                document.body.classList.add('ggg');
                document.body.classList.add('dark-mode');
            }
            if (soundd) {
                document.getElementById('clicksound').play();
            }
        }

        function toggle5() {
            var toggleeeeee = document.querySelector('.toggleeeeee');
            var elements = document.querySelectorAll('.headerr, .quiz_input, .quiz_feedback, .quiz_question, .buttonn, .header, .setting, .settinghead, .toggle, .toggle2, .toggle3, .toggle4, .toggle5, .toggle6, .toggle7, .settingoption, .settingoption2, .settingoption3, .settingoption4, .settingoption5, .settingoption6 .settingoption7, .togglee, .toggleee, .toggleeee, .toggleeeee, .toggleeeee, .toggleeeeeee, .toggleeeeeeee');
            if (toggleeeeee.classList.contains('active')) {
                toggleeeeee.classList.remove('active');
                toggleeeeee.style.transform = 'translateX(0)';
                elements.forEach(function(element) {
                    element.style.boxShadow = '0px 0px 10px 0px #666666';
                });
            } else {
                toggleeeeee.classList.add('active');
                toggleeeeee.style.transition = 'transform 0.5s ease';
                toggleeeeee.style.transform = 'translateX(-50px)';
                elements.forEach(function(element) {
                    element.style.boxShadow = 'none';
                });
            }
            if (soundd) {
                document.getElementById('clicksound').play();
            }
        }

        function toggle6() {
            var toggleeeeeee = document.querySelector('.toggleeeeeee');
            var elements = document.querySelectorAll('.web-name, .settings, .headerr, .quiz_input, .quiz_feedback, .quiz_question, .buttonn, .header, .setting, .settinghead, .toggle, .toggle2, .toggle3, .toggle4, .toggle5, .toggle6, .toggle7, .settingoption, .settingoption2, .settingoption3, .settingoption4, .settingoption5, .settingoption6, .settingoption7, .togglee, .toggleee, .toggleeee, .toggleeeee, .toggleeeeee, .toggleeeeeee, .toggleeeeeeee');
            if (toggleeeeeee.classList.contains('active')) {
                toggleeeeeee.classList.remove('active');
                toggleeeeeee.style.transform = 'translateX(0)';
                elements.forEach(function(element) {
                    element.classList.remove('no-animation');
                    element.classList.remove('no-transition');
                });
            } else {
                toggleeeeeee.classList.add('active');
                toggleeeeeee.style.transition = 'transform 0.5s ease';
                toggleeeeeee.style.transform = 'translateX(-50px)';
                elements.forEach(function(element) {
                    element.classList.add('no-animation');
                    element.classList.add('no-transition');
                });
            }
            if (soundd) {
                document.getElementById('clicksound').play();
            }
        }

        function toggle7() {
            var toggleeeeeeee = document.querySelector('.toggleeeeeeee');
            if (toggleeeeeeee.classList.contains('active')) {
                toggleeeeeeee.classList.remove('active');
                toggleeeeeeee.style.transform = 'translateX(0)';
                soundd = true;
            } else {
                toggleeeeeeee.classList.add('active');
                toggleeeeeeee.style.transition = 'transform 0.5s ease';
                toggleeeeeeee.style.transform = 'translateX(-50px)';
                soundd = false;
            }
            if (soundd) {
                document.getElementById('clicksound').play();
            }
        }
        document.querySelector('.quiz_input').addEventListener('click', function() {
            if (soundd) {
                document.getElementById('clicksound').play();
            }
        });

        document.querySelector('.quiz_feedback').addEventListener('click', function() {
            if (soundd) {
                document.getElementById('clicksound').play();
            }
        });

        document.querySelector('.buttonn').addEventListener('click', function() {
            if (soundd) {
                document.getElementById('clicksound').play();
            }
        });
