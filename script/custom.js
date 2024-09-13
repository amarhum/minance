// load component
function loadComponent(containerId, componentUrl) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => console.error('Error loading component:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('navbar', './components/navbar.html');
});
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('bannerFooter', './components/bannerFooter.html');
});
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('footer', './components/footer.html');
});

// end load component