// main.js - Shared JavaScript for all pages

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
    }
    
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = {
        'index.html': 'navHome',
        'financing.html': 'navFinancing',
        'equipment.html': 'navEquipment',
        'adders.html': 'navAdders',
        'documents.html': 'navDocuments',
        'contact.html': 'navContact'
    };
    
    const activeId = navLinks[currentPage];
    if (activeId) {
        const activeLink = document.getElementById(activeId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});

// Function to load HTML components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${componentPath}:`, error);
    }
}

// Function to convert Google Drive link to direct download
function getDirectDownloadLink(shareUrl) {
    const match = shareUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? `https://drive.google.com/uc?export=download&id=${match[1]}` : shareUrl;
}