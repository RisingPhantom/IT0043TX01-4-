document.getElementById('reset').addEventListener('click', resetFlexbox);
document.getElementById('setGap').addEventListener('click', setGap);
document.getElementById('row').addEventListener('click', () => setFlexDirection('row'));
document.getElementById('column').addEventListener('click', () => setFlexDirection('column'));

document.querySelectorAll('.justify').forEach(button => {
  button.addEventListener('click', (e) => {
    setJustifyContent(e.target.dataset.value);
    highlightActiveButton('.justify', e.target);
  });
});

document.querySelectorAll('.align').forEach(button => {
  button.addEventListener('click', (e) => {
    setAlignItems(e.target.dataset.value);
    highlightActiveButton('.align', e.target);
  });
});

document.getElementById('resetGrow').addEventListener('click', resetGrow);
document.getElementById('setGrow').addEventListener('click', setGrow);
document.getElementById('growAll').addEventListener('click', growAll);

function resetFlexbox() {
  const container = document.querySelector('.flex-container');
  container.style.flexDirection = 'row';
  container.style.justifyContent = 'flex-start';
  container.style.alignItems = 'flex-start';
  container.style.gap = '10px';
  
  document.getElementById('gap').value = '10';
  
  document.getElementById('box1').value = '1';
  document.getElementById('box2').value = '1';
  document.getElementById('box3').value = '1';

  resetGrow();
  highlightActiveButton('.justify', null);
  highlightActiveButton('.align', null);
  highlightActiveButton('#row, #column', document.getElementById('row'));
}

function setGap() {
  const gap = document.getElementById('gap').value;
  document.querySelector('.flex-container').style.gap = `${gap}px`;
}

function setFlexDirection(direction) {
  document.querySelector('.flex-container').style.flexDirection = direction;
  highlightActiveButton('#row, #column', direction === 'row' ? document.getElementById('row') : document.getElementById('column'));
}

function setJustifyContent(value) {
  document.querySelector('.flex-container').style.justifyContent = value;
}

function setAlignItems(value) {
  document.querySelector('.flex-container').style.alignItems = value;
}

function resetGrow() {
  document.getElementById('item1').style.flexGrow = '1';
  document.getElementById('item2').style.flexGrow = '1';
  document.getElementById('item3').style.flexGrow = '1';

  document.getElementById('box1').value = '1';
  document.getElementById('box2').value = '1';
  document.getElementById('box3').value = '1';
}

function setGrow() {
  const box1 = document.getElementById('box1').value;
  const box2 = document.getElementById('box2').value;
  const box3 = document.getElementById('box3').value;

  document.getElementById('item1').style.flexGrow = box1;
  document.getElementById('item2').style.flexGrow = box2;
  document.getElementById('item3').style.flexGrow = box3;
}

function growAll() {
  const items = document.querySelectorAll('.flex-item');
  items.forEach(item => item.style.flexGrow = '1');
}

function highlightActiveButton(selector, activeButton) {
  document.querySelectorAll(selector).forEach(button => {
    button.classList.remove('active');
  });
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

highlightActiveButton('#row, #column', document.getElementById('row'));
highlightActiveButton('.justify', document.querySelector('.justify[data-value="flex-start"]'));
highlightActiveButton('.align', document.querySelector('.align[data-value="flex-start"]'));
