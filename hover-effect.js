// Mapping hoverers to their corresponding text elements
const mapping = [
    {hoverer: '.hoverer-for-games', text: '.text-for-games'},
    {hoverer: '.hoverer-for-github', text: '.text-for-github' },
    {hoverer: '.hoverer-for-youtube', text: '.text-for-youtube'},
    {hoverer: '.hoverer-for-roblox', text: '.text-for-roblox'},
];

// Add hover effect
mapping.forEach(({hoverer, text}) => {
    const hoverElement = document.querySelector(hoverer);
    const textElement = document.querySelector(text);

    if (hoverElement && textElement) {
        hoverElement.addEventListener('mouseenter', () => {
            textElement.style.border = '10px solid white'; // Add outline
            textElement.style.borderRadius = '10px';
        });

        hoverElement.addEventListener('mouseleave', () => {
            textElement.style.border = 'none'; // Remove outline
        });
    }
});