console.log('MAIN.JS');

dataLayer.push({
    'event': `page_view_ga4`,
    'page_path':  window.location.pathname,
    'page_location': window.location.href,
    'page_title': `ecommerce - content - ${document.title}`
});