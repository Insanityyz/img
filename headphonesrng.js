        const rarities = {
    common: {
        chance: 50,
        baseValue: 50,
        colors: [
            '#ffffff', '#cccccc', '#999999', '#666666', '#dddddd', '#eeeeee', 
            '#f5f5f5', '#e0e0e0', '#d1d1d1', '#c0c0c0',
            '#b0b0b0', '#a0a0a0', '#909090', '#808080', '#707070', '#606060',
            '#505050', '#404040', '#303030', '#202020',
            '#101010', '#000000', '#f0f0f0', '#c8c8c8', '#bfbfbf', 
            '#a8a8a8', '#999999', '#8a8a8a', '#7b7b7b', '#6c6c6c'
        ],
        patterns: [
            'solid', 'matte', 'glossy', 'brushed', 'textured', 'metallic', 
            'chrome', 'pearl', 'satin', 'frost', 
            'striped', 'polka dot', 'checkerboard', 'zigzag', 'wave', 
            'grid', 'spiral', 'checker', 'diamond', 'herringbone',
            'dashed', 'dotted line', 'crosshatch', 'mesh', 'woven',
            'plaid', 'camo', 'abstract', 'simple lines', 'blurred'
        ]
    },
    uncommon: {
        chance: 25,
        baseValue: 150,
        colors: [
            '#4facfe', '#00f2fe', '#48c6ef', '#6f86d6', '#56ab2f', '#a8e063', 
            '#38ef7d', '#11998e', '#49a09d', '#5f2c82',
            '#e91e63', '#ffeb3b', '#ff9800', '#ff5722', '#3f51b5', 
            '#2196f3', '#009688', '#8bc34a', '#ffc107', '#9c27b0',
            '#673ab7', '#f44336', '#795548', '#607d8b', '#9e9e9e',
            '#cddc39', '#ffeb3b', '#ff9800', '#ffc107', '#8bc34a'
        ],
        patterns: [
            'gradient', 'dotted', 'spotted', 'ripple', 'swirl', 
            'geometric', 'digital', 'camo', 'circuit', 'pixel',
            'watercolor', 'floral', 'abstract', 'splash', 'line art',
            'stripes', 'cloud', 'marble', 'tie-dye', 'holographic',
            'woven', 'plaid', 'mesh', 'circuit', 'mosaic'
        ]
    },
    rare: {
        chance: 15,
        baseValue: 300,
        colors: [
            '#13f1fc', '#0470dc', '#f6d365', '#fda085', '#84fab0', '#8fd3f4', 
            '#a1c4fd', '#c2e9fb', '#e2d1c3', '#96e6a1',
            '#ff4081', '#3f51b5', '#ffab40', '#cddc39', '#ff3d00',
            '#8bc34a', '#00bcd4', '#9c27b0', '#673ab7', '#ffc107',
            '#ff9800', '#00796b', '#78909c', '#546e7a', '#607d8b',
            '#ffd740', '#76ff03', '#64ffda', '#ff5252', '#ff4081'
        ],
        patterns: [
            'crystal', 'prism', 'holographic', 'iridescent', 'wave', 
            'nebula', 'plasma', 'electric', 'magnetic', 'quantum',
            'fractals', 'cosmic', 'starfield', 'abstract art', 'spectrum',
            'galaxy', 'liquid', 'fire', 'ice', 'clouds',
            'shattered', 'explosion', 'swirls', 'ribbons', 'tessellation'
        ]
    },
    epic: {
        chance: 7,
        baseValue: 600,
        colors: [
            '#c471f5', '#fa71cd', '#7f7fd5', '#86a8e7', '#91eae4', 
            '#D8B5FF', '#1EAE98', '#FF61D2', '#BFF098', '#6FD6FF',
            '#ff2b2b', '#ff6f00', '#ffab00', '#ff3d00', '#ff8f00',
            '#ff6e40', '#ff3b6b', '#ff8a80', '#ff9b00', '#f9a825',
            '#fbc02d', '#ffd600', '#ffea00', '#ffff00', '#c6ff00',
            '#64ffda', '#00b8d4', '#00e5ff', '#2962ff', '#3d5afe'
        ],
        patterns: [
            'vortex', 'fractal', 'cosmic', 'ethereal', 'mystic', 
            'astral', 'celestial', 'spectral', 'phantom', 'divine',
            'supernova', 'dark matter', 'black hole', 'light beam', 'fusion',
            'aurora', 'dreamscape', 'night sky', 'radiant', 'cloudburst',
            'kaleidoscope', 'bioluminescent', 'whirlwind', 'dreamcatcher', 'galactic'
        ]
    },
    legendary: {
        chance: 2.5,
        baseValue: 1200,
        colors: [
            '#FFD700', '#FFA500', '#FF8C00', '#DAA520', '#B8860B', 
            '#FF7F50', '#FF6B6B', '#FFCB8E', '#FFB347', '#FFC125',
            '#d4af37', '#fbc02d', '#ffb300', '#ff8f00', '#ff6f00',
            '#ff6f40', '#ff3b00', '#ff8a00', '#ffb3b3', '#ff5656',
            '#ffcc00', '#ffd600', '#ffea00', '#fff176', '#ffec40',
            '#ffeb3b', '#ff9800', '#ff5722', '#ff3d00', '#ff2b2b'
        ],
        patterns: [
            'phoenix', 'dragon', 'celestial', 'solar', 'lunar', 
            'cosmic', 'infinity', 'omega', 'divine', 'transcendent',
            'legendary', 'mythical', 'epic', 'sacred', 'timeless',
            'celestial', 'ethereal', 'divine light', 'almighty', 'sublime',
            'immortal', 'seraphic', 'supernatural', 'phantasmal', 'otherworldly'
        ]
    },
    exotic: {
        chance: 0.5,
        baseValue: 2500,
        colors: [
            'antimatter', 'dark energy', 'quasar', 'neutrino', 'supernova', 
            'black hole', 'wormhole', 'dark matter', 'stardust', 'cosmic ray',
            'event horizon', 'multiverse', 'singularity', 'void', 'dimension',
            'void energy', 'quantum foam', 'string theory', 'parallel universe', 'hyperdrive'
        ],
        patterns: [
            'hyperdimensional', 'quantum-flux', 'void-ripple', 'cosmic-storm', 'reality-break', 
            'time-warp', 'space-tear', 'dimension-shift', 'entropy-wave', 'infinity-spiral',
            'multiversal', 'transcendent', 'interstellar', 'dream weaver', 'chaos',
            'mystic realms', 'photon', 'stellar', 'void', 'subatomic',
            'parallel', 'superluminal', 'exotic matter', 'event horizon', 'nebulous']
    }
};

// Game state
let gameState = {
    coins: 1000,
    inventory: [],
    totalCollected: 0,
    rarestFind: 'None',
    achievements: {},
    currentFilter: 'all'
};

// Load save data
function loadGame() {
    const savedGame = localStorage.getItem('headphoneCollector');
    if (savedGame) {
        gameState = JSON.parse(savedGame);
        updateUI();
    }
}

// Save game data
function saveGame() {
    localStorage.setItem('headphoneCollector', JSON.stringify(gameState));
}

// Generate unique patterns for headphones
function generatePattern(rarity, index) {
    const pattern = rarities[rarity].patterns[index % rarities[rarity].patterns.length];
    const color = rarities[rarity].colors[index % rarities[rarity].colors.length];
    
    const svg = document.querySelector('#headphones');
    svg.style.fill = color;
    
    if (pattern.includes('gradient')) {
        const gradient = document.querySelector('#headphoneGradient');
        gradient.innerHTML = `
            <stop offset="0%" style="stop-color:${color}"/>
            <stop offset="100%" style="stop-color:${rarities[rarity].colors[(index + 1) % rarities[rarity].colors.length]}"/>
        `;
    }
    
    return { pattern, color };
}

// Particle effect system
function createParticles(x, y, color) {
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'absolute';
    particleContainer.style.left = x + 'px';
    particleContainer.style.top = y + 'px';
    particleContainer.style.pointerEvents = 'none';
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.backgroundColor = color;
        particle.style.borderRadius = '50%';
        
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const velocity = Math.random() * 5 + 2;
        const lifetime = Math.random() * 1000 + 500;
        
        particleContainer.appendChild(particle);
        
        let time = 0;
        const animate = () => {
            time += 16;
            const x = Math.cos(angle) * velocity * (time / 100);
            const y = Math.sin(angle) * velocity * (time / 100) + (0.5 * 9.8 * Math.pow(time / 1000, 2));
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = 1 - (time / lifetime);
            
            if (time < lifetime) {
                requestAnimationFrame(animate);
            } else {
                particleContainer.removeChild(particle);
                if (particleContainer.children.length === 0) {
                    document.body.removeChild(particleContainer);
                }
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    document.body.appendChild(particleContainer);
}

// Roll system
function rollHeadphone() {
    if (gameState.coins < 100) return;
    
    gameState.coins -= 100;
    const roll = Math.random() * 100;
    let currentChance = 0;
    let rarity;
    
    for (const [key, value] of Object.entries(rarities)) {
        currentChance += value.chance;
        if (roll <= currentChance) {
            rarity = key;
            break;
        }
    }
    
    const pattern = generatePattern(rarity, gameState.inventory.length);
    const headphone = {
        id: Date.now(),
        rarity,
        pattern: pattern.pattern,
        color: pattern.color,
        value: rarities[rarity].baseValue * (1 + Math.random() * 0.2)
    };
    
    gameState.inventory.push(headphone);
    gameState.totalCollected++;
    
    if (gameState.rarestFind === 'None' || 
        rarities[rarity].chance < rarities[gameState.rarestFind].chance) {
        gameState.rarestFind = rarity;
    }
    
    updateUI();
    saveGame();
    
    const box = document.getElementById('box');
    box.classList.add('spinning');
    setTimeout(() => box.classList.remove('spinning'), 1500);
    
    createParticles(
        box.getBoundingClientRect().left + box.offsetWidth / 2,
        box.getBoundingClientRect().top + box.offsetHeight / 2,
        pattern.color
    );
}

// Merge system
let selectedForMerge = [];

function toggleMergeSelection(headphoneId) {
    const index = selectedForMerge.indexOf(headphoneId);
    if (index === -1 && selectedForMerge.length < 3) {
        selectedForMerge.push(headphoneId);
    } else if (index !== -1) {
        selectedForMerge.splice(index, 1);
    }
    
    updateMergePreview();
}

function updateMergePreview() {
    const preview = document.getElementById('merge-preview');
    const items = document.getElementById('merge-items');
    items.innerHTML = '';
    
    if (selectedForMerge.length === 3) {
        preview.style.display = 'block';
        selectedForMerge.forEach(id => {
            const headphone = gameState.inventory.find(h => h.id === id);
            const item = document.createElement('div');
            item.textContent = `${headphone.rarity} ${headphone.pattern}`;
            items.appendChild(item);
        });
    } else {
        preview.style.display = 'none';
    }
}

function mergeHeadphones() {
    if (selectedForMerge.length !== 3) return;
    
    const headphones = selectedForMerge.map(id => 
        gameState.inventory.find(h => h.id === id));
    
    const rarityLevels = Object.keys(rarities);
    const baseRarityIndex = Math.max(
        ...headphones.map(h => rarityLevels.indexOf(h.rarity))
    );
    
    const newRarityIndex = Math.min(
        baseRarityIndex + 1,
        rarityLevels.length - 1
    );
    
    const newRarity = rarityLevels[newRarityIndex];
    const pattern = generatePattern(newRarity, gameState.inventory.length);
    
    const mergedHeadphone = {
        id: Date.now(),
        rarity: newRarity,
        pattern: pattern.pattern,
        color: pattern.color,
        value: rarities[newRarity].baseValue * (1 + Math.random() * 0.3)
    };
    
    gameState.inventory = gameState.inventory.filter(
        h => !selectedForMerge.includes(h.id)
    );
    gameState.inventory.push(mergedHeadphone);
    
    selectedForMerge = [];
    updateUI();
    saveGame();
}

// Mass sell functionality
function massSell(rarity) {
    const toSell = gameState.inventory.filter(h => 
        rarity === 'all' || h.rarity === rarity
    );
    
    const totalValue = toSell.reduce((sum, h) => sum + h.value, 0);
    gameState.coins += totalValue;
    
    gameState.inventory = gameState.inventory.filter(h =>
        rarity !== 'all' && h.rarity !== rarity
    );
    
    updateUI();
    saveGame();
    
    return totalValue;
}

function sellHeadphone(id) {
    const headphoneIndex = gameState.inventory.findIndex(h => h.id === id);
    if (headphoneIndex === -1) return;
    
    const headphone = gameState.inventory[headphoneIndex];
    gameState.coins += Math.floor(headphone.value);
    gameState.inventory.splice(headphoneIndex, 1);
    
    // Remove from merge selection if it was selected
    const mergeIndex = selectedForMerge.indexOf(id);
    if (mergeIndex !== -1) {
        selectedForMerge.splice(mergeIndex, 1);
    }
    
    updateUI();
    saveGame();
    
    // Create sell particles
    const item = event.target.parentElement;
    const rect = item.getBoundingClientRect();
    createParticles(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        headphone.color
    );
}

// UI update function
function updateUI() {
    document.getElementById('coins').textContent = Math.floor(gameState.coins);
    document.getElementById('total-collected').textContent = gameState.totalCollected;
    document.getElementById('rarest-find').textContent = gameState.rarestFind;
    
    const inventory = document.getElementById('inventory');
    inventory.innerHTML = '';
    
    const filteredInventory = gameState.inventory.filter(h =>
        gameState.currentFilter === 'all' || h.rarity === gameState.currentFilter
    );
    
    filteredInventory.forEach(headphone => {
        const item = document.createElement('div');
        item.className = `inventory-item rarity-${headphone.rarity}`;
        item.innerHTML = `
            <h3>${headphone.rarity} Headphone</h3>
            <p>Pattern: ${headphone.pattern}</p>
            <p class="sell-info">Value: ${Math.floor(headphone.value)} coins</p>
            <button class="sell-button" onclick="event.stopPropagation(); sellHeadphone(${headphone.id})">Sell</button>
        `;
        
        if (selectedForMerge.includes(headphone.id)) {
            item.classList.add('mergeable');
        }
        
        item.addEventListener('click', () => toggleMergeSelection(headphone.id));
        inventory.appendChild(item);
    });
}

// Event listeners
document.getElementById('roll-button').addEventListener('click', rollHeadphone);
document.getElementById('merge-button').addEventListener('click', () => {
    document.getElementById('merge-preview').style.display = 'block';
});
document.getElementById('mass-sell').addEventListener('click', () => massSell('all'));
document.getElementById('free-coins').addEventListener('click', () => {
    gameState.coins += 500;
    updateUI();
    saveGame();
});

document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        gameState.currentFilter = button.dataset.rarity;
        document.querySelectorAll('.filter-button').forEach(b => 
            b.classList.remove('active'));
        button.classList.add('active');
        updateUI();
    });
});

// Initialize game
loadGame();
