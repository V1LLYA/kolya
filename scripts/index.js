    // Отображение товаров
    document.addEventListener('DOMContentLoaded', function () {
        let products = [
            {
                id: 1,
                title: "Iphon 15 pro",
                category: "phone",
                desc: `<div class="desc-grid">
                    <div class="desc-name">Экран:</div><div class="desc-value">6.1 дюйм</div>
                    <div class="desc-name">Батарея:</div><div class="desc-value">4500мАч</div>
                    <div class="desc-name">Камера:</div><div class="desc-value">48 Мп + 12 Мп</div>
                    <div class="desc-name">Память:</div><div class="desc-value">512Гб</div>
                    <div class="desc-name">ОЗУ:</div><div class="desc-value">12Гб</div>
                    </div>`,
                image: "../images/main_product/1.webp", 
                popular: true
            },
            {
                id: 2,
                title: "Samsung S23 Ultra",
                category: "phone",
                desc: `<div class="desc-grid">
                    <div class="desc-name">Экран:</div><div class="desc-value">6.8 дюйм</div>
                    <div class="desc-name">Батарея:</div><div class="desc-value">5000мАч</div>
                    <div class="desc-name">Камера:</div><div class="desc-value">200 Мп + 12 Мп</div>
                    <div class="desc-name">Память:</div><div class="desc-value">1Тб</div>
                    <div class="desc-name">ОЗУ:</div><div class="desc-value">12Гб</div>
                    </div>`,
                image: "../images/main_product/s23u.jpg", 
                popular: true
            },
            {
                id: 3,
                title: "Xiaomi Poco X5",
                category: "phone",
                desc: `<div class="desc-grid">
                    <div class="desc-name">Экран:</div><div class="desc-value">6.67 дюйм</div>
                    <div class="desc-name">Батарея:</div><div class="desc-value">5000мАч</div>
                    <div class="desc-name">Камера:</div><div class="desc-value">48 Мп + 8 Мп</div>
                    <div class="desc-name">Память:</div><div class="desc-value">128Гб</div>
                    <div class="desc-name">ОЗУ:</div><div class="desc-value">8Гб</div>
                    </div>`,
                image: "../images/main_product/poco.png",
                popular: true
            }
        ];
    
        function displayProducts(category, showPopular = false) {
            let container = document.getElementById("products-container");
            container.innerHTML = ""; // Очищаем контейнер
            products.forEach(function(item) {
                if ((item.category === category || category == null) && (!showPopular || item.popular)) {
                    let card = `
                        <div class="product">
                            <img src="${item.image}" alt="${item.title}">
                            <h3>${item.title}</h3>
                            <p>${item.desc}</p>
                        </div>
                    `;
                    container.innerHTML += card;
                }
            });
        }
    
        // Инициализация отображения товаров при загрузке страницы
        displayProducts(null, true); // Показываем все популярные товары
    });

    // Фильтры
    document.querySelectorAll(".filter").forEach(function (button) {
        button.addEventListener("click", function () {
            let category = button.dataset.category;
            displayProducts(category);
        });
    });

    // Инициализация слайдера
    document.addEventListener('DOMContentLoaded', function() {
        let currentIndex = 0;
        const slides = document.querySelectorAll('#slides-container img');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        }

        document.getElementById('next').addEventListener('click', nextSlide);
        document.getElementById('prev').addEventListener('click', prevSlide);

        // Автоматическая смена слайдов каждые 3 секунды
        setInterval(nextSlide, 3000);

        // Показываем первый слайд при инициализации
        showSlide(currentIndex);
    });


    document.addEventListener('DOMContentLoaded', function () {
        const feedbackButton = document.getElementById("openFeedbackForm");
        const form = document.getElementById("feedbackForm");

        // Обработчик для открытия/закрытия формы и изменения текста кнопки
        feedbackButton.addEventListener("click", function() {
            if (form.style.display === "none" || form.style.display === "") {
                form.style.display = "block";
                feedbackButton.textContent = "Закрыть";
                feedbackButton.className = "button-style";
            } else {
                form.style.display = "none";
                feedbackButton.textContent = "Свяжитесь с нами"; // Возвращаем исходный текст кнопки
                feedbackButton.className = "button-style";
            }
        });

        // Добавляем обработчик события submit для формы
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Отменяем стандартное действие формы (отправку)

            const name = document.forms["feedbackForm"]["name"].value;
            const email = document.forms["feedbackForm"]["email"].value;
            const message = document.forms["feedbackForm"]["msg"].value;

            // Проверяем, заполнены ли все поля
            if (name === "" || email === "" || message === "") {
                alert("Все поля должны быть заполнены!");
            } else {
                // Здесь может быть код для отправки данных формы, например, через AJAX
                form.style.display = "none"; // Закрываем форму
                feedbackButton.textContent = "Отправить"; // Возвращаем текст кнопки к исходному
                // Очистка формы
                document.forms["feedbackForm"].reset();
            }
        });
    });

