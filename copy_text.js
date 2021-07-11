function FallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
}

function CopyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }

    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}

function CopyEmail()
{
    let emailText = document.getElementsByClassName('contact-email')[0].getElementsByTagName('p')[0];
    CopyTextToClipboard(emailText.innerText);
}

function GetCoppyButtonElements(form)
{
    return [
        form.getElementsByClassName('copy-button')[0],
        form.getElementsByClassName('copy-button-img')[0],
        form.getElementsByClassName('contact-email')[0]
    ];
}

function OnCopyButtonHover(contactForm)
{
    [copyButton, copyButtonImg, emailDisplay] = GetCoppyButtonElements(contactForm);
    copyButtonImg.setAttribute('src', 'https://img.icons8.com/material-outlined/24/ffffff/clipboard.png');
    copyButton.style.backgroundColor = '#a842e4';
    emailDisplay.style.backgroundColor = 'white';
}

function OnCopyButtonUnhover(contactForm)
{
    [copyButton, copyButtonImg, emailDisplay] = GetCoppyButtonElements(contactForm);
    copyButtonImg.setAttribute('src', 'https://img.icons8.com/material-outlined/24/000000/new-post.png');
    copyButton.style.backgroundColor = 'white';
    emailDisplay.style.backgroundColor = 'rgba(220, 220, 220, 1)';
}