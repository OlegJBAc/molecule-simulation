document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.querySelector(".select-selected");
    const itemsElement = document.querySelector(".select-items");

    // Проверяем, существуют ли элементы, прежде чем добавлять события
    if (selectElement && itemsElement) {
        const options = itemsElement.querySelectorAll("div");

        // Открытие/закрытие кастомного списка
        selectElement.addEventListener("click", function (event) {
            event.stopPropagation(); // Останавливаем всплытие события
            itemsElement.classList.toggle("select-show");
        });

        // Выбор элемента из списка
        options.forEach(option => {
            option.addEventListener("click", function () {
                selectElement.textContent = this.textContent;
                itemsElement.classList.remove("select-show");
                const selectedValue = this.getAttribute("data-value");

                // Здесь вызываем функцию смены молекулы
                changeMolecule(selectedValue);
            });
        });

        // Закрытие выпадающего списка при клике за его пределами
        document.addEventListener("click", function () {
            itemsElement.classList.remove("select-show");
        });
    } else {
        console.error("Элементы для кастомного выпадающего списка не найдены");
    }
});
