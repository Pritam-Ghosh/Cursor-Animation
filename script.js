const cursor = document.querySelector(".cursor");
let timeout;

// Function to handle cursor movement
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block'; // Ensure the cursor is visible

    // Clear the previous timeout and set a new one
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

// Function to hide the cursor after a period of inactivity
function mouseStopped() {
    cursor.style.display = 'none';
}
