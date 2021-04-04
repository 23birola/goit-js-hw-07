    const categories = [...document.querySelectorAll('.item')];
    const categoriesQuantity = categories.length;
    console.log(`В списке ${categoriesQuantity} категории.`);

    const items = [...document.querySelectorAll('.item ul')];
    items.forEach(item => {
        console.log(`Категория: ${item.previousElementSibling.textContent}`);
        console.log(`Количество элементов: ${item.childElementCount}`);
    }
    );