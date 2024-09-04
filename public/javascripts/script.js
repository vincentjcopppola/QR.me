document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const link = document.getElementById('linkInput').value;
    const size = document.getElementById('sizeSelect').value;
    const qrResult = document.getElementById('qrResult');
    
    if (link) {
        QRCode.toDataURL(link, { width: parseInt(size), height: parseInt(size) }, function (err, url) {
            if (err) {
                qrResult.innerHTML = '<p class="text-danger">Error generating QR code. Please try again.</p>';
            } else {
                qrResult.innerHTML = `<img src="${url}" alt="QR Code" class="img-fluid"><p class="mt-3"><a href="${url}" download="QR.meDownload.png" class="btn btn-success">Download QR Code</a></p>`;
            }
        });
    }
});

function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
    };
    dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately on page load
updateDateTime();
