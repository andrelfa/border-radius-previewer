const box = document.getElementById('box');
const borderInputs = document.getElementsByClassName('border-input');
const topLeft = document.getElementById('top-left');
const topLeftEliptical = document.getElementById('top-left-eliptical');
const bottomLeft = document.getElementById('bottom-left');
const bottomLeftEliptical = document.getElementById('bottom-left-eliptical');
const topRight = document.getElementById('top-right');
const topRightEliptical = document.getElementById('top-right-eliptical');
const bottomRight = document.getElementById('bottom-right');
const bottomRightEliptical = document.getElementById('bottom-right-eliptical');

for (const input of borderInputs) {
  console.log('input', input);
  input.addEventListener('keyup', (event) => {
    console.log(box.style);
    switch (event.target.id) {
      case 'top-left':
        box.style.borderTopLeftRadius = `${event.target.value || 0}px ${topLeftEliptical.value || 0}px`;
        break;
      case 'top-left-eliptical':
        box.style.borderTopLeftRadius = `${topLeft.value}px ${event.target.value || 0}px`;
        break;        
      case 'top-right':
        box.style.borderTopRightRadius = `${event.target.value || 0}px ${topRightEliptical.value || 0}px`;
        break;
      case 'top-right-eliptical':
        box.style.borderTopRightRadius = `${topRight.value}px ${event.target.value || 0}px`;
        break;                
      case 'bottom-left':
        box.style.borderBottomLeftRadius = `${event.target.value || 0}px ${bottomLeftEliptical.value || 0}px`;
        break;
      case 'bottom-left-eliptical':
        box.style.borderBottomLeftRadius = `${bottomLeft.value}px ${event.target.value || 0}px`;
        break;                
      case 'bottom-right':
        box.style.borderBottomRightRadius = `${event.target.value || 0}px ${bottomRightEliptical.value || 0}px`;
        break;
      case 'bottom-right-eliptical':
        box.style.borderBottomRightRadius = `${bottomRight.value}px ${event.target.value || 0}px`;
        break;                
    }
  })
}

// topLeft.addEventListener('keyup', (event) => {
//   console.log(event.target.value);
//   box.style = `border-top-left-radius: ${event.target.value}px`
// })