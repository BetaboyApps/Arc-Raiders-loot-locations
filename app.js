// Arc Raiders Loot Map App
class ArcRaidersApp {
    constructor() {
        this.currentMap = 'dam';
        this.activeFilters = ['high-tier', 'weapons', 'blueprints', 'extracts', 'secrets'];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadMap(this.currentMap);
        this.setupServiceWorker();
    }

    setupEventListeners() {
        // Menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navClose = document.querySelector('.nav-close');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.add('open');
        });

        navClose.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('open');
            }
        });

        // Map selection (tabs)
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const mapKey = e.target.dataset.map;
                this.switchMap(mapKey);
            });
        });

        // Map selection (nav menu)
        document.querySelectorAll('.map-selector').forEach(button => {
            button.addEventListener('click', (e) => {
                const mapKey = e.target.dataset.map;
                this.switchMap(mapKey);
                navMenu.classList.remove('open');
            });
        });

        // Filter checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.updateFilters();
            });
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');

        searchButton.addEventListener('click', () => {
            this.performSearch();
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // Modal close
        const modal = document.getElementById('loot-modal');
        const modalClose = document.querySelector('.modal-close');

        modalClose.addEventListener('click', () => {
            modal.classList.remove('open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    }

    switchMap(mapKey) {
        this.currentMap = mapKey;
        
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-map="${mapKey}"]`).classList.add('active');

        // Update nav menu
        document.querySelectorAll('.map-selector').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.map-selector[data-map="${mapKey}"]`).classList.add('active');

        this.loadMap(mapKey);
    }

    loadMap(mapKey) {
        const mapData = arcRaidersData.maps[mapKey];
        if (!mapData) return;

        // Update map info
        document.getElementById('current-map-title').textContent = mapData.name;
        document.getElementById('current-map-description').textContent = mapData.description;
        document.getElementById('map-image').src = mapData.image;
        document.getElementById('map-image').alt = `${mapData.name} Map`;

        // Load loot markers
        this.loadLootMarkers(mapData.lootSpots);
    }

    loadLootMarkers(lootSpots) {
        const markersContainer = document.getElementById('loot-markers');
        markersContainer.innerHTML = '';

        lootSpots.forEach(spot => {
            if (this.activeFilters.includes(spot.type)) {
                const marker = this.createLootMarker(spot);
                markersContainer.appendChild(marker);
            }
        });
    }

    createLootMarker(spot) {
        const marker = document.createElement('div');
        marker.className = `loot-marker ${spot.type}`;
        marker.style.left = `${spot.x}%`;
        marker.style.top = `${spot.y}%`;
        marker.title = spot.name;
        marker.dataset.spotId = spot.id;

        marker.addEventListener('click', () => {
            this.showLootDetails(spot);
        });

        return marker;
    }

    showLootDetails(spot) {
        const modal = document.getElementById('loot-modal');
        const modalBody = document.getElementById('modal-body');

        const riskColors = {
            'Low': '#2ecc71',
            'Medium': '#f39c12',
            'High': '#e74c3c',
            'Extreme': '#8e44ad'
        };

        modalBody.innerHTML = `
            <div class="loot-detail">
                <h2 style="color: #ff6b35; margin-bottom: 1rem;">${spot.name}</h2>
                <div class="loot-type" style="display: inline-block; padding: 0.5rem 1rem; background: ${arcRaidersData.lootTypes[spot.type].color}; border-radius: 20px; margin-bottom: 1rem; font-weight: bold;">
                    ${arcRaidersData.lootTypes[spot.type].name}
                </div>
                <div class="risk-level" style="display: inline-block; padding: 0.5rem 1rem; background: ${riskColors[spot.risk]}; border-radius: 20px; margin-bottom: 1rem; margin-left: 0.5rem; font-weight: bold;">
                    Risk: ${spot.risk}
                </div>
                <p style="margin-bottom: 1.5rem; line-height: 1.6; color: #cccccc;">${spot.description}</p>
                
                <h3 style="color: #ff6b35; margin-bottom: 0.5rem;">Available Loot:</h3>
                <ul style="margin-bottom: 1.5rem; padding-left: 1rem;">
                    ${spot.loot.map(item => `<li style="margin-bottom: 0.25rem; color: #ffffff;">${item}</li>`).join('')}
                </ul>
                
                <h3 style="color: #ff6b35; margin-bottom: 0.5rem;">Tips:</h3>
                <p style="background: rgba(255, 107, 53, 0.1); padding: 1rem; border-radius: 8px; border-left: 4px solid #ff6b35; line-height: 1.6; color: #ffffff;">${spot.tips}</p>
            </div>
        `;

        modal.classList.add('open');
    }

    updateFilters() {
        this.activeFilters = [];
        
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            if (checkbox.checked) {
                const filterType = checkbox.id.replace('filter-', '').replace('-', '');
                // Map filter names to data types
                const filterMap = {
                    'hightier': 'high-tier',
                    'weapons': 'weapons',
                    'blueprints': 'blueprints',
                    'extracts': 'extracts',
                    'secrets': 'secrets'
                };
                
                if (filterMap[filterType]) {
                    this.activeFilters.push(filterMap[filterType]);
                }
            }
        });

        // Reload current map with new filters
        this.loadMap(this.currentMap);
    }

    performSearch() {
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value.trim();
        
        if (!query) {
            this.loadMap(this.currentMap);
            return;
        }

        const results = arcRaidersData.searchLoot(query);
        
        if (results.length === 0) {
            this.showSearchResults([]);
            return;
        }

        // If results are from current map, highlight them
        const currentMapResults = results.filter(result => result.mapKey === this.currentMap);
        
        if (currentMapResults.length > 0) {
            this.highlightSearchResults(currentMapResults);
        } else {
            // Switch to first result's map
            const firstResult = results[0];
            this.switchMap(firstResult.mapKey);
            setTimeout(() => {
                this.highlightSearchResults([firstResult]);
            }, 500);
        }
    }

    highlightSearchResults(results) {
        // Clear existing markers
        const markersContainer = document.getElementById('loot-markers');
        markersContainer.innerHTML = '';

        // Add only search result markers
        results.forEach(spot => {
            const marker = this.createLootMarker(spot);
            marker.classList.add('search-result');
            marker.style.animation = 'pulse 1s infinite, searchHighlight 2s ease-in-out infinite';
            markersContainer.appendChild(marker);
        });

        // Show first result details if only one result
        if (results.length === 1) {
            setTimeout(() => {
                this.showLootDetails(results[0]);
            }, 1000);
        }
    }

    showSearchResults(results) {
        const modal = document.getElementById('loot-modal');
        const modalBody = document.getElementById('modal-body');

        if (results.length === 0) {
            modalBody.innerHTML = `
                <div class="search-results">
                    <h2 style="color: #ff6b35; margin-bottom: 1rem;">No Results Found</h2>
                    <p style="color: #cccccc;">No loot locations match your search query. Try different keywords like "weapon", "blueprint", or location names.</p>
                </div>
            `;
        } else {
            modalBody.innerHTML = `
                <div class="search-results">
                    <h2 style="color: #ff6b35; margin-bottom: 1rem;">Search Results (${results.length})</h2>
                    ${results.map(result => `
                        <div class="search-result-item" style="background: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; cursor: pointer;" onclick="app.goToResult('${result.mapKey}', '${result.id}')">
                            <h3 style="color: #ffffff; margin-bottom: 0.5rem;">${result.name}</h3>
                            <p style="color: #ff6b35; margin-bottom: 0.5rem;">${result.mapName}</p>
                            <p style="color: #cccccc; font-size: 0.9rem;">${result.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        modal.classList.add('open');
    }

    goToResult(mapKey, spotId) {
        // Close modal
        document.getElementById('loot-modal').classList.remove('open');
        
        // Switch to map if different
        if (mapKey !== this.currentMap) {
            this.switchMap(mapKey);
        }
        
        // Find and highlight the specific spot
        setTimeout(() => {
            const mapData = arcRaidersData.maps[mapKey];
            const spot = mapData.lootSpots.find(s => s.id === spotId);
            if (spot) {
                this.highlightSearchResults([spot]);
            }
        }, 500);
    }

    setupServiceWorker() {
        // Register service worker for PWA functionality
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        }
    }
}

// Add search highlight animation
const style = document.createElement('style');
style.textContent = `
    @keyframes searchHighlight {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    
    .search-result {
        z-index: 20 !important;
        box-shadow: 0 0 20px rgba(255, 107, 53, 0.8) !important;
    }
`;
document.head.appendChild(style);

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ArcRaidersApp();
});

// Handle orientation changes for mobile
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        window.app.loadMap(window.app.currentMap);
    }, 500);
});

// Handle online/offline status
window.addEventListener('online', () => {
    console.log('App is online');
});

window.addEventListener('offline', () => {
    console.log('App is offline - cached data available');
});