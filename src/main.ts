import { createApp } from 'vue' // Импортируем функцию createApp для создания экземпляра Vue-приложения
import App from './App.vue' // Импортируем корневой компонент приложения
import PrimeVue from 'primevue/config' // Импортируем основной плагин PrimeVue для подключения библиотеки компонентов
import { definePreset } from '@primeuix/themes' // Импортируем функцию definePreset для создания кастомного пресета темы PrimeVue
import Lara from '@primeuix/themes/lara' // Подключаем темную тему PrimeVue (Lara Dark Indigo)
import 'primeicons/primeicons.css' // Подключаем иконки PrimeIcons для использования в компонентах PrimeVue
import './assets/styles/main.scss' // Подключаем глобальные стили и дизайн-систему приложения

const preset = definePreset(Lara, {}) // Создаём тёмный пресет темы на основе Lara

const app = createApp(App) // Создаём экземпляр Vue-приложения на основе корневого компонента App
app.use(PrimeVue, { theme: { preset } }) // Подключаем PrimeVue как плагин ко всему Vue-приложению и передаём тёмный пресет темы
app.mount('#app') // Монтируем Vue-приложение в DOM-элемент с id="app"