alert('Hello!');

function replaceText(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
       element.textContent = element.textContent.replace(/coronavirus/gi, '■■■■■■■■■■■');
    }
  }
  
  replaceText(document.body);

  function replaceText(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
      if (element.textContent.match(/coronavirus/gi)) {
        element.parentElement.style.color = 'black';
        element.parentElement.style.backgroundColor = 'black';
      }
    }
  }
  
  replaceText(document.body);
  
  function replaceText(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
      if (element.textContent.match(/coronavirus/gi)) {
        const newElement = document.createElement('span');
        newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span style="background-color: black; color: black;">$1</span>');
        element.replaceWith(newElement);
      }
    }
  }
  
  replaceText(document.body);
  function replaceText(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
      if (element.textContent.match(/coronavirus/gi)) {
        element.parentElement.remove();
      }
    }
  }
  
  replaceText(document.body);

  function replaceText(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
      if (element.textContent.match(/coronavirus/gi)) {
        const newElement = document.createElement('span');
        newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>');
        element.replaceWith(newElement);
      }
    }
  }
  function replaceText(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
      if (element.textContent.match(/coronavirus/gi)) {
        const newElement = document.createElement('span');
        newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>');
        element.replaceWith(newElement);
      }
    }
  }
  function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/coronavirus/gi)) {
            const reversedWord = 'coronavirus'.split('').reverse().join('');
            const newElement = document.createElement('span');
            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, 
                '<span style="font-family: Arial, sans-serif; font-style: italic;">' + reversedWord + '</span>');
            element.replaceWith(newElement);
        }
    }
}