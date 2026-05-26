const localImageFiles = [
  '0ctyQ.jpg', '1VlnC.jpg', 'limes and lemons.jpg', 'F7pso.jpg', 'Hr3AC.jpg', 'IVPKJ.jpg', 'K2SbD.jpg', 'LEyyZ.jpg',
  'LOeQ2.jpg', 'M85kl.jpg', 'Myroj.jpg', 'NPkEs.jpg', 'PlpW5.jpg', 'TEOq0.jpg', 'UjZdH.jpg', 'WLtj1.jpg',
  'XNmlH.jpg', 'eNAV2.jpg', 'gdyii.jpg', 'hkHiH.jpg', 'l1CXw.jpg', 'lnr4d.jpg', 'sZhWd.jpg', 'xSIxH.jpg', 'xhfD1.jpg'
];

const designData = [
  { name: 'Neon Sunset', color: 'Pink', shape: 'Mixed', length: 'Long', tags: ['pink', 'orange', 'neon'] },
  { name: 'Watermelon', color: 'Multicolor', shape: 'Stiletto', length: 'Long', tags: ['blue', 'Star', 'tropical'] },
  { name: 'Pink Star', color: 'Pink', shape: 'Mixed', length: 'Long', tags: ['pink', 'Orange', 'flower'] },
  { name: 'Watermelon Tips', color: 'Red', shape: 'Square', length: 'Long', tags: ['red', 'green', 'summer'] },
  { name: 'Silver Chrome', color: 'Silver', shape: 'Mixed', length: 'Medium', tags: ['silver', 'chrome', 'metallic'] },
  { name: 'Fire Tips', color: 'Orange', shape: 'Stiletto', length: 'Long', tags: ['orange', 'red', 'fire'] },
  { name: 'Lime Nails', color: 'Green', shape: 'Stiletto', length: 'Long', tags: ['green', 'yellow', 'lime'] },
  { name: 'Ocean Shells', color: 'Blue', shape: 'Almond', length: 'Long', tags: ['blue', 'shells', 'ocean'] },
  { name: 'Flame Set', color: 'Orange', shape: 'Mixed', length: 'Long', tags: ['orange', 'red', 'flame'] },
  { name: 'Gold Sparkle', color: 'Gold', shape: 'Mixed', length: 'Medium', tags: ['gold', 'sparkle', 'shine'] },
  { name: 'Cosmic Gray', color: 'Multicolor, Black, Grey, Metallic', shape: 'Mixed', length: 'Medium', tags: ['green', 'floral', 'fresh'] },
  { name: '3D Aquatic', color: 'Blue', shape: 'Mixed', length: 'Long', tags: ['blue', '3d', 'aquatic'] },
  { name: 'Pastel French', color: 'Nude', shape: 'Square', length: 'Short', tags: ['pastel', 'french', 'clean'] },
  { name: 'Emerald Green', color: 'Green', shape: 'Stiletto', length: 'Long', tags: ['green', 'gloss', 'bold'] },
  { name: 'Black Galaxy', color: 'Black', shape: 'Mixed', length: 'Medium', tags: ['black', 'galaxy', 'multicolor'] },
  { name: 'White Lace', color: 'White', shape: 'Mixed', length: 'Medium', tags: ['white', 'lace', 'glossy'] },
  { name: 'Blue Starfish', color: 'Blue', shape: 'Mixed', length: 'Short', tags: ['blue', 'starfish', 'beach'] },
  { name: 'Green Sparkle', color: 'Green', shape: 'Square', length: 'Medium', tags: ['green', 'sparkle', 'accent'] },
  { name: 'Purple Flower', color: 'Purple', shape: 'Mixed', length: 'Medium', tags: ['purple', 'chrome', 'metallic'] },
  { name: 'Night Fire', color: 'Red, Orange, Black', shape: 'Almond', length: 'Long', tags: ['Red', 'Fire', 'Orange, Black,long'] },
  { name: 'Gold Accent', color: 'Gold', shape: 'Round', length: 'Short', tags: ['gold', 'accent', 'glow'] },
  { name: 'Blue Waves', color: 'Blue', shape: 'Mixed', length: 'Medium', tags: ['blue', 'waves', 'fresh'] },
  { name: 'Red Dots', color: 'Red', shape: 'Square', length: 'Medium', tags: ['red', 'dots', 'playful'] },
  { name: 'Blush Flower', color: 'Pink', shape: 'Oval', length: 'Long', tags: ['pink', 'floral', 'soft'] },
  { name: 'Lemon Lime', color: 'Green', shape: 'Mixed', length: 'Medium', tags: ['green', 'yellow', 'fresh'] }
];

function imagePath(file) {
  return `images/${encodeURI(file)}`;
}

const nailDesigns = localImageFiles.map((file, index) => ({
  id: `design-${String(index + 1).padStart(2, '0')}`,
  image: imagePath(file),
  ...designData[index]
}));

const defaultBoards = ['Next Appointment', 'Birthday', 'Vacation', 'Everyday', 'Holiday'];
const fallbackImage = imagePath('0ctyQ.jpg');

const elements = {
  tabs: document.querySelectorAll('.tab'),
  views: document.querySelectorAll('.view'),
  filterOptions: document.getElementById('filter-options'),
  galleryGrid: document.getElementById('gallery-grid'),
  gallerySummary: document.getElementById('gallery-summary'),
  boardList: document.getElementById('board-list'),
  boardPreview: document.getElementById('board-preview'),
  customBoardSelect: document.getElementById('custom-board-select'),
  customItems: document.getElementById('custom-items'),
  generateButton: document.getElementById('generate-button'),
  customResults: document.getElementById('custom-results'),
  techBoardSelect: document.getElementById('tech-board-select'),
  techCollage: document.getElementById('tech-collage'),
  previewModal: document.getElementById('preview-modal'),
  previewImage: document.getElementById('preview-image'),
  previewName: document.getElementById('preview-name'),
  previewTags: document.getElementById('preview-tags'),
  previewSave: document.getElementById('preview-save'),
  previewCustom: document.getElementById('preview-custom'),
  previewClose: document.getElementById('preview-close'),
  boardModal: document.getElementById('board-modal'),
  boardClose: document.getElementById('board-close'),
  boardSave: document.getElementById('board-save'),
  boardCancel: document.getElementById('board-cancel'),
  boardSelect: document.getElementById('board-select'),
  newBoardName: document.getElementById('new-board-name'),
  newBoardButton: document.getElementById('new-board-button'),
  toast: document.getElementById('toast')
};

const filterCategories = {
  color: ['All', 'Pink', 'Red', 'Orange', 'Green', 'Blue', 'Purple', 'Nude', 'White', 'Black', 'Silver', 'Gold', 'Multicolor'],
  shape: ['All', 'Square', 'Round', 'Almond', 'Coffin', 'Oval', 'Stiletto', 'Mixed'],
  length: ['All', 'Short', 'Medium', 'Long', 'Extra Long']
};

let filters = { color: 'All', shape: 'All', length: 'All' };
let selectedBoardId = null;
let boards = loadBoards();
let previewDesign = null;

function loadBoards() {
  const saved = localStorage.getItem('setBoards');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (err) {
      console.error(err);
    }
  }
  const initial = {};
  defaultBoards.forEach((name) => {
    initial[name] = [];
  });
  localStorage.setItem('setBoards', JSON.stringify(initial));
  return initial;
}

function saveBoards() {
  localStorage.setItem('setBoards', JSON.stringify(boards));
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('visible');
  setTimeout(() => elements.toast.classList.remove('visible'), 2000);
}

function setActiveView(viewId) {
  elements.views.forEach((view) => {
    view.classList.toggle('active', view.id === `${viewId}-view`);
  });
  elements.tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.view === viewId);
  });
  if (viewId === 'gallery') renderGallery();
  if (viewId === 'sets') renderBoards();
  if (viewId === 'custom') renderCustomSet();
  if (viewId === 'tech') renderTechView();
}

function renderFilters() {
  elements.filterOptions.innerHTML = '';
  Object.entries(filterCategories).forEach(([category, values]) => {
    const group = document.createElement('div');
    group.className = 'filter-group';
    const title = document.createElement('div');
    title.className = 'filter-title';
    title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    group.appendChild(title);

    values.forEach((value) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'filter-chip';
      chip.textContent = value;
      if (filters[category] === value) chip.classList.add('active');
      chip.addEventListener('click', () => {
        filters[category] = value;
        renderFilters();
        renderGallery();
      });
      group.appendChild(chip);
    });
    elements.filterOptions.appendChild(group);
  });
}

function attributeMatches(value, filterValue) {
  if (filterValue === 'All') return true;
  const parts = value.toLowerCase().split(',').map((part) => part.trim());
  const filter = filterValue.toLowerCase();
  return parts.includes(filter);
}

function getFilteredDesigns() {
  return nailDesigns.filter((design) => {
    const matchesColor = attributeMatches(design.color, filters.color);
    const matchesShape = attributeMatches(design.shape, filters.shape);
    const matchesLength = attributeMatches(design.length, filters.length);
    return matchesColor && matchesShape && matchesLength;
  });
}

function renderGallery() {
  renderFilters();
  const filtered = getFilteredDesigns();
  elements.galleryGrid.innerHTML = '';
  elements.gallerySummary.textContent = `${filtered.length} designs`;

  filtered.forEach((design) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-action" data-id="${design.id}"><span>♥</span></div>
      <img src="${design.image}" alt="${design.name}" onerror="this.src='${fallbackImage}'" />
      <div class="card-meta">
        <h3 class="card-title">${design.name}</h3>
        <div class="card-labels">
          <span class="tag">${design.color}</span>
          <span class="tag">${design.shape}</span>
          <span class="tag">${design.length}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', (event) => {
      if (event.target.closest('.card-action')) return;
      openPreview(design.id);
    });
    card.querySelector('.card-action').addEventListener('click', (event) => {
      event.stopPropagation();
      openBoardModal(design.id);
    });
    elements.galleryGrid.appendChild(card);
  });
}

function openPreview(id) {
  const design = nailDesigns.find((item) => item.id === id);
  if (!design) return;
  previewDesign = design;
  elements.previewImage.src = design.image;
  elements.previewImage.alt = design.name;
  elements.previewName.textContent = design.name;
  elements.previewTags.textContent = design.tags.join(' · ');
  elements.previewModal.classList.remove('hidden');
  elements.previewModal.setAttribute('aria-hidden', 'false');
}

function closePreview() {
  previewDesign = null;
  elements.previewModal.classList.add('hidden');
  elements.previewModal.setAttribute('aria-hidden', 'true');
}

function openBoardModal(designId) {
  const savedBoards = Object.keys(boards);
  elements.boardSelect.innerHTML = savedBoards.map((name) => `<option value="${name}">${name}</option>`).join('');
  elements.newBoardName.value = '';
  elements.boardModal.dataset.design = designId;
  elements.boardModal.classList.remove('hidden');
  elements.boardModal.setAttribute('aria-hidden', 'false');
}

function closeBoardModal() {
  elements.boardModal.classList.add('hidden');
  elements.boardModal.setAttribute('aria-hidden', 'true');
  elements.boardModal.dataset.design = '';
}

function handleBoardSave() {
  const designId = elements.boardModal.dataset.design;
  const targetBoard = elements.newBoardName.value.trim() || elements.boardSelect.value;
  if (!targetBoard || !designId) return;
  if (!boards[targetBoard]) boards[targetBoard] = [];
  if (!boards[targetBoard].includes(designId)) {
    boards[targetBoard].push(designId);
    saveBoards();
    showToast(`Saved to ${targetBoard}`);
  } else {
    showToast(`Already in ${targetBoard}`);
  }
  closeBoardModal();
  renderBoards();
  renderCustomSet();
  renderTechView();
}

function renderBoards() {
  elements.boardList.innerHTML = '';
  const boardNames = Object.keys(boards);
  boardNames.forEach((name, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'board-item';
    button.textContent = `${name} (${boards[name].length})`;
    button.addEventListener('click', () => {
      selectedBoardId = name;
      renderBoards();
    });
    if (selectedBoardId === null && index === 0) selectedBoardId = name;
    if (name === selectedBoardId) button.classList.add('active');
    elements.boardList.appendChild(button);
  });
  if (!selectedBoardId && boardNames.length) selectedBoardId = boardNames[0];
  renderBoardPreview();
}

function renderBoardPreview() {
  if (!selectedBoardId) {
    elements.boardPreview.innerHTML = '<p>No board selected.</p>';
    return;
  }
  const savedIds = boards[selectedBoardId] || [];
  const savedItems = nailDesigns.filter((design) => savedIds.includes(design.id));
  elements.boardPreview.innerHTML = `
    <h2>${selectedBoardId}</h2>
    <p class="tag-line">${savedItems.length} looks saved</p>
    <div class="gallery-grid"></div>
  `;
  const previewGrid = elements.boardPreview.querySelector('.gallery-grid');
  if (savedItems.length === 0) {
    previewGrid.innerHTML = '<p>Save photos to this board from the Gallery.</p>';
    return;
  }
  savedItems.forEach((design) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${design.image}" alt="${design.name}" onerror="this.src='${fallbackImage}'" />
      <div class="card-meta">
        <h3 class="card-title">${design.name}</h3>
      </div>
    `;
    previewGrid.appendChild(card);
  });
}

function renderCustomSet() {
  const boardNames = Object.keys(boards);
  elements.customBoardSelect.innerHTML = boardNames.map((name) => `<option value="${name}">${name}</option>`).join('');
  const selected = elements.customBoardSelect.value || boardNames[0] || '';
  const savedIds = boards[selected] || [];
  elements.customItems.innerHTML = '';

  if (savedIds.length === 0) {
    elements.customItems.innerHTML = '<p>Open My Sets and save a few designs to generate a custom set.</p>';
    elements.customResults.innerHTML = '';
    return;
  }

  savedIds.forEach((designId) => {
    const design = nailDesigns.find((item) => item.id === designId);
    if (!design) return;
    const card = document.createElement('label');
    card.className = 'custom-card';
    card.innerHTML = `
      <input type="checkbox" value="${design.id}" />
      <img src="${design.image}" alt="${design.name}" onerror="this.src='${fallbackImage}'" />
      <div class="custom-card-body">
        <strong>${design.name}</strong>
        <p>${design.color} · ${design.shape} · ${design.length}</p>
      </div>
    `;
    elements.customItems.appendChild(card);
  });
  elements.customResults.innerHTML = '';
}

function renderTechView() {
  const boardNames = Object.keys(boards);
  elements.techBoardSelect.innerHTML = boardNames.map((name) => `<option value="${name}">${name}</option>`).join('');
  const selected = elements.techBoardSelect.value || boardNames[0] || '';
  const savedIds = boards[selected] || [];
  elements.techCollage.innerHTML = '';

  if (savedIds.length === 0) {
    elements.techCollage.innerHTML = '<p>Select a board with saved designs to generate your collage.</p>';
    return;
  }

  savedIds.forEach((designId) => {
    const design = nailDesigns.find((item) => item.id === designId);
    if (!design) return;
    const card = document.createElement('div');
    card.className = 'tech-card';
    card.innerHTML = `<img src="${design.image}" alt="${design.name}" onerror="this.src='${fallbackImage}'" />`;
    elements.techCollage.appendChild(card);
  });
}

function handleGenerate() {
  const selectedBoard = elements.customBoardSelect.value;
  const checkedIds = Array.from(elements.customItems.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value);
  if (!selectedBoard) {
    showToast('Please choose a board first.');
    return;
  }
  if (checkedIds.length === 0) {
    showToast('Select at least one saved design.');
    return;
  }
  elements.customResults.innerHTML = '';
  const options = [
    {
      title: 'Clean',
      description: 'Soft minimal details with bright neutrals for a polished finish.',
      image: imagePath('LEyyZ.jpg')
    },
    {
      title: 'Glam',
      description: 'Rich metallic accents with shiny layers for your show-stopping look.',
      image: imagePath('LOeQ2.jpg')
    },
    {
      title: 'Experimental',
      description: 'Unexpected textures, color blocks, and mixed finishes for bold nails.',
      image: imagePath('NPkEs.jpg')
    }
  ];
  options.forEach((option) => {
    const card = document.createElement('section');
    card.className = 'option-card';
    card.innerHTML = `
      <img src="${option.image}" alt="${option.title} option" onerror="this.src='${fallbackImage}'" />
      <div class="option-copy">
        <h3>${option.title}</h3>
        <p>${option.description}</p>
        <button class="primary-button" type="button">Save Favorite</button>
      </div>
    `;
    card.querySelector('button').addEventListener('click', () => {
      const boardName = prompt('Save favorite to board:', selectedBoard) || selectedBoard;
      if (!boardName) return;
      if (!boards[boardName]) boards[boardName] = [];
      if (!boards[boardName].includes(checkedIds[0])) {
        boards[boardName].push(checkedIds[0]);
      }
      saveBoards();
      showToast(`Favorite saved to ${boardName}`);
      renderBoards();
      renderTechView();
    });
    elements.customResults.appendChild(card);
  });
}

function createBoard() {
  const boardName = prompt('New board name');
  if (!boardName) return;
  const trimmed = boardName.trim();
  if (!trimmed) return;
  if (!boards[trimmed]) {
    boards[trimmed] = [];
    saveBoards();
    selectedBoardId = trimmed;
    showToast(`Created board ${trimmed}`);
    renderBoards();
    renderCustomSet();
    renderTechView();
  } else {
    showToast('Board already exists.');
  }
}

function setupEvents() {
  elements.tabs.forEach((tab) => {
    tab.addEventListener('click', () => setActiveView(tab.dataset.view));
  });
  elements.previewClose.addEventListener('click', closePreview);
  elements.previewSave.addEventListener('click', () => {
    if (previewDesign) openBoardModal(previewDesign.id);
  });
  elements.previewCustom.addEventListener('click', () => {
    const selected = elements.customBoardSelect.value;
    if (!selected) return;
    if (!previewDesign) return;
    if (!boards[selected]) boards[selected] = [];
    if (!boards[selected].includes(previewDesign.id)) {
      boards[selected].push(previewDesign.id);
      saveBoards();
      showToast(`Added to ${selected}`);
      renderCustomSet();
      renderBoards();
      renderTechView();
    }
  });
  elements.boardClose.addEventListener('click', closeBoardModal);
  elements.boardCancel.addEventListener('click', closeBoardModal);
  elements.boardSave.addEventListener('click', handleBoardSave);
  elements.newBoardButton.addEventListener('click', createBoard);
  elements.customBoardSelect.addEventListener('change', renderCustomSet);
  elements.techBoardSelect.addEventListener('change', renderTechView);
  elements.generateButton.addEventListener('click', handleGenerate);
  elements.previewModal.addEventListener('click', (event) => {
    if (event.target === elements.previewModal) closePreview();
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setupEvents();
  setActiveView('gallery');
});
