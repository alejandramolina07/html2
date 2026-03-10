// Create the cursor element if it doesn't exist
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

// Track the mouse movement
document.addEventListener('mousemove', (e) => {
    // We subtract half the cursor size (12.5px) so it centers on the tip
    cursor.style.left = (e.clientX - 12.5) + 'px';
    cursor.style.top = (e.clientY - 12.5) + 'px';
});

// Optional: Add a "clicked" effect
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.5)';
    cursor.style.backgroundColor = '#ffffff';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.backgroundColor = '#6b21a8';
});