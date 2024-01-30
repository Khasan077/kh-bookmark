const elsTabItem = document.querySelectorAll('.tabs__item');    
const elsTabPanel = document.querySelectorAll('.taps__panel ');
const elsTabLink = document.querySelectorAll('.js-tab-link');

const elsAccordionItem = document.querySelectorAll('.accordion__item')
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler')

function deactivateTabItems() {
    elsTabItem.forEach(function (elTabItem) {
        elTabItem.classList.remove('tabs__item--active');
    })
}

function deactivateTabPanel() {
    elsTabPanel.forEach(function (elTabPanel) {
        elTabPanel.classList.remove('tabs__panel--active');
    })
}

function closeAccordionItems() {
    elsAccordionItem.forEach(function (elsAccordionItem) {
        elsAccordionItem.classList.remove('accordion__item--open');
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
        elTabLink.parentElement.classList.add('tabs__item--active')

        // show active panel
        const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
        elTargetPanel.classList.add('tabs__panel--active');
    });
});

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
    elAccordionItemToggler.addEventListener('click', function () {
        closeAccordionItems();

        elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
    })
})