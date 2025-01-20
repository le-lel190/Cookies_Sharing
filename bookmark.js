javascript: (function() {
    var url = 'https://raw.githubusercontent.com/le-lel190/Cookies_Sharing/refs/heads/main/cookies.json';
    fetch(url).then(response => response.text()).then(data => {
        var node = document.createElement('textarea');
        node.value = data;
        document.body.appendChild(node);
        navigator.clipboard.writeText(data).then(() => {
            document.body.removeChild(node);
            // alert('Cookies copied to clipboard!');
        }).catch(error => {
            console.error('Error copying to clipboard:', error);
            alert('Failed to copy cookies to clipboard.');
        });
    }).catch(error => {
        console.error('Error fetching cookies:', error);
        alert('Failed to fetch cookies.');
    });
})();
