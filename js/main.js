const modifiers = {
    tabItemActive: 'tabs__item--active',
    accordionItemOpen: 'accordion__item--open',
    tabsPanelActive: 'tabs__panel--active',
}

const elsTabItem = document.querySelectorAll('.tabs__item');    
const elsTabPanel = document.querySelectorAll('.taps__panel ');
const elsTabLink = document.querySelectorAll('.js-tab-link');

const elsAccordionItem = document.querySelectorAll('.accordion__item')
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler')

function deactivateTabItems() {
    elsTabItem.forEach(function (elTabItem) {
        elTabItem.classList.remove(modifiers.tabItemActive);
    })
}

function deactivateTabPanel() {
    elsTabPanel.forEach(function (elTabPanel) {
        elTabPanel.classList.remove(modifiers.tabItemActive);
    })
}

function closeAccordionItems() {
    elsAccordionItem.forEach(function (elsAccordionItem) {
        elsAccordionItem.classList.remove(modifiers.accordionItemOpen);
    })
}

elsTabLink.forEach(function (elTabLink) {
    elTabLink.addEventListener('click', function (evt) {
        // Prevent page move
        evt.preventDefault();

        // Remove active class from tabs__item elements
        deactivateTabItems();

        // Remove active class form tabs__panel elements
        deactivateTabPanel()

        // Add active class t current tabs__item
        elTabLink.parentElement.classList.add(modifiers.tabItemActive)

        // show active panel
        const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
        elTargetPanel.classList.add(modifiers.tabItemActive);
    });
});

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
    elAccordionItemToggler.addEventListener('click', function () {
        closeAccordionItems();

        elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
    })
})