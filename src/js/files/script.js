// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"

window.addEventListener("load", pageLoad)

function pageLoad() {
  const htmlTag = document.documentElement

  // document.addEventListener('click', e => {
  //     const targetElement = e.target

  //     if (targetElement.closest('.class')) {
  //         console.log('1');
  //     }
  // })

  const checkboxes = document.querySelectorAll(".checkbox__input")

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
      const parent = checkbox.closest(".item-form-service")
      // Если чекбокс отмечен, добавляем класс, иначе убираем
      if (checkbox.checked) {
        parent.classList.add("active")
      } else {
        parent.classList.remove("active")
      }
    })
  })
}
