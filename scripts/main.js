$(() => {
  // Sidebar Toggle
  $('#main-header').on('click', 'div.toggle-icon', () => {
    document.querySelector('.navbar-links').classList.toggle('sidebar')
    document.querySelector('div.toggle-icon').classList.toggle('toggled')
  })

  // current year
  $('span.current-year').html(new Date().getFullYear())
})


// Support toggle
const accordionItemHeaders = document.querySelectorAll(".suport-column")

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener('click', event => {
    const currentlyActivateaccordionItemHeader = document.querySelector('.suport-column.icon-minus');
    if (currentlyActivateaccordionItemHeader && currentlyActivateaccordionItemHeader != accordionItemHeader) {
      currentlyActivateaccordionItemHeader.classList.toggle('icon-minus');
      currentlyActivateaccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle('icon-minus');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains('icon-minus')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'
    }
    else {
      accordionItemBody.style.maxHeight = 0
    }
  })
})
