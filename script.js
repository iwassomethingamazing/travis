// Function to update the live preview
function updatePreview() {
    const htmlCode = document.getElementById("htmlInput").value;
    const preview = document.getElementById("preview");
    
    // Set the HTML content inside the preview div
    preview.innerHTML = htmlCode;
}

// Function to clear the input text area
function clearText() {
    document.getElementById("htmlInput").value = '';
    document.getElementById("preview").innerHTML = '';
}

// Function to save HTML as a downloadable file
function saveHTML() {
    const htmlCode = document.getElementById("htmlInput").value;
    
    if (htmlCode) {
        const blob = new Blob([htmlCode], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'my-html-file.html';
        link.click();
    } else {
        alert("Please enter some HTML code before saving.");
    }
}
