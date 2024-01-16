function showToast(type, message) {
    var toastContainer = document.getElementById('toastContainer');
    
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.setAttribute('data-delay', '2000');

    var toastHeader = document.createElement('div');
    toastHeader.classList.add('toast-header');

    var strong = document.createElement('strong');
    strong.classList.add('mr-auto');
    strong.textContent = type === 'success' ? 'Success' : 'Info';

    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('ml-2', 'mb-1', 'close');
    closeButton.setAttribute('data-dismiss', 'toast');
    closeButton.setAttribute('aria-label', 'Close');

    var closeIcon = document.createElement('span');
    closeIcon.setAttribute('aria-hidden', 'true');
    closeIcon.innerHTML = '&times;';

    closeButton.appendChild(closeIcon);

    toastHeader.appendChild(strong);
    toastHeader.appendChild(closeButton);

    var toastBody = document.createElement('div');
    toastBody.classList.add('toast-body');
    toastBody.textContent = message;

    toast.appendChild(toastHeader);
    toast.appendChild(toastBody);

    toastContainer.innerHTML = ''; 
    toastContainer.appendChild(toast);

    // Create a new Toast instance and show it
    var toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();
  }