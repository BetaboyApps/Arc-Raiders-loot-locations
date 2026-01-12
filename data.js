// Arc Raiders Loot Data
const arcRaidersData = {
    maps: {
        dam: {
            name: "Dam Battlegrounds",
            description: "Level 15-25 • Large Industrial Facility",
            image: "https://cdn.metaforge.app/og/arc-raiders-map.png",
            lootSpots: [
                {
                    id: "dam_1",
                    name: "Power Rod Room",
                    type: "high-tier",
                    x: 25,
                    y: 35,
                    description: "High-tier loot room with consistent purple gear spawns. Best accessed during night raids for lower PvP risk.",
                    loot: ["Purple Weapons", "Rare Materials", "Blueprints"],
                    risk: "Medium",
                    tips: "Check the upper level first, then sweep the lower areas. Watch for ARC patrols."
                },
                {
                    id: "dam_2",
                    name: "Hydroelectric Control",
                    type: "weapons",
                    x: 45,
                    y: 20,
                    description: "Weapon cache location with reliable assault rifle and SMG spawns.",
                    loot: ["Assault Rifles", "SMGs", "Ammo"],
                    risk: "High",
                    tips: "Popular PvP spot. Approach with caution and have an exit strategy."
                },
                {
                    id: "dam_3",
                    name: "Maintenance Tunnels",
                    type: "secrets",
                    x: 70,
                    y: 60,
                    description: "Hidden cache accessible through underwater entrance. Requires diving gear.",
                    loot: ["Rare Blueprints", "Crafting Materials", "Credits"],
                    risk: "Low",
                    tips: "Bring oxygen supplies. Secret entrance behind the waterfall."
                },
                {
                    id: "dam_4",
                    name: "North Extract",
                    type: "extracts",
                    x: 15,
                    y: 10,
                    description: "Primary extraction point with helicopter pickup.",
                    loot: ["Safe Exit"],
                    risk: "High",
                    tips: "Most contested extract. Consider alternative routes during peak hours."
                },
                {
                    id: "dam_5",
                    name: "Blueprint Vault",
                    type: "blueprints",
                    x: 60,
                    y: 45,
                    description: "Secured vault containing rare weapon and equipment blueprints.",
                    loot: ["Weapon Blueprints", "Equipment Schematics", "Research Data"],
                    risk: "Medium",
                    tips: "Requires keycard from security office. Check for traps."
                }
            ]
        },
        spaceport: {
            name: "Acceria Spaceport",
            description: "Level 25-35 • Large Orbital Facility",
            image: "https://wotpack.ru/wp-content/uploads/2025/10/d-stati-interfejs-virtualnoj-karty-arc-raiders--730x411.jpeg",
            lootSpots: [
                {
                    id: "space_1",
                    name: "Vehicle Maintenance Bay",
                    type: "high-tier",
                    x: 30,
                    y: 40,
                    description: "S-tier solo loot location with consistent high-value drops and low PvP risk.",
                    loot: ["Purple Gear", "Rare Components", "Tech Blueprints"],
                    risk: "Low",
                    tips: "Enter through the side maintenance door. Check all tool lockers."
                },
                {
                    id: "space_2",
                    name: "Launch Bay Alpha",
                    type: "weapons",
                    x: 50,
                    y: 25,
                    description: "Major weapon cache with heavy weapons and explosives.",
                    loot: ["Heavy Weapons", "Explosives", "Military Gear"],
                    risk: "High",
                    tips: "High-traffic area. Best approached from the upper catwalks."
                },
                {
                    id: "space_3",
                    name: "Command Center",
                    type: "blueprints",
                    x: 65,
                    y: 35,
                    description: "Central command facility with advanced technology blueprints.",
                    loot: ["Advanced Blueprints", "Data Cores", "Access Cards"],
                    risk: "Medium",
                    tips: "Requires security clearance. Check terminals for intel."
                },
                {
                    id: "space_4",
                    name: "Cargo Hold 7",
                    type: "secrets",
                    x: 20,
                    y: 70,
                    description: "Hidden cargo container with rare materials and credits.",
                    loot: ["Rare Materials", "Credits", "Trade Goods"],
                    risk: "Low",
                    tips: "Look for the container marked with yellow stripes."
                },
                {
                    id: "space_5",
                    name: "South Pad Extract",
                    type: "extracts",
                    x: 80,
                    y: 80,
                    description: "Secondary extraction point with shuttle service.",
                    loot: ["Safe Exit"],
                    risk: "Medium",
                    tips: "Less contested than main extract. Longer walk but safer."
                }
            ]
        },
        buried: {
            name: "Buried City",
            description: "Level 10-20 • Large Underground Ruins",
            image: "https://overgear.com/guides/wp-content/uploads/2025/05/arc-raiders-locations-1536x864.png",
            lootSpots: [
                {
                    id: "buried_1",
                    name: "Secret Apartment",
                    type: "high-tier",
                    x: 40,
                    y: 30,
                    description: "Hidden apartment with S-tier loot spawns. Underrated location with consistent drops.",
                    loot: ["Purple Weapons", "Rare Armor", "Valuable Items"],
                    risk: "Low",
                    tips: "Access through the collapsed subway entrance. Check all rooms thoroughly."
                },
                {
                    id: "buried_2",
                    name: "Underground Arsenal",
                    type: "weapons",
                    x: 25,
                    y: 50,
                    description: "Military bunker with extensive weapon stockpiles.",
                    loot: ["Military Weapons", "Tactical Gear", "Ammunition"],
                    risk: "Medium",
                    tips: "Watch for booby traps. Bring a flashlight for dark areas."
                },
                {
                    id: "buried_3",
                    name: "Ancient Library",
                    type: "blueprints",
                    x: 60,
                    y: 40,
                    description: "Preserved library containing pre-war technology blueprints.",
                    loot: ["Ancient Blueprints", "Research Notes", "Historical Data"],
                    risk: "Low",
                    tips: "Use the back entrance to avoid main corridors."
                },
                {
                    id: "buried_4",
                    name: "Subway Cache",
                    type: "secrets",
                    x: 70,
                    y: 65,
                    description: "Hidden cache in abandoned subway car.",
                    loot: ["Survival Gear", "Medical Supplies", "Food Rations"],
                    risk: "Low",
                    tips: "Third car from the front. Check under the seats."
                },
                {
                    id: "buried_5",
                    name: "Surface Breach",
                    type: "extracts",
                    x: 15,
                    y: 20,
                    description: "Emergency exit through surface breach.",
                    loot: ["Safe Exit"],
                    risk: "Medium",
                    tips: "Climb carefully. Watch for unstable debris."
                }
            ]
        },
        bluegate: {
            name: "Blue Gate",
            description: "Level 30+ • Large Experimental Facility",
            image: "https://gameloid.com/wp-content/uploads/2025/11/interaktivnaja-karta-arc-raiders-c334f14.webp",
            lootSpots: [
                {
                    id: "blue_1",
                    name: "Maintenance Wing Breach",
                    type: "high-tier",
                    x: 35,
                    y: 45,
                    description: "S-tier solo loot room with lower PvP risk and consistent high-value drops.",
                    loot: ["Experimental Gear", "Prototype Weapons", "Advanced Tech"],
                    risk: "Low",
                    tips: "Breach the wall using explosives. Check all equipment racks."
                },
                {
                    id: "blue_2",
                    name: "Portal Chamber",
                    type: "weapons",
                    x: 50,
                    y: 30,
                    description: "Central portal facility with experimental weapons.",
                    loot: ["Energy Weapons", "Experimental Ammo", "Power Cells"],
                    risk: "Extreme",
                    tips: "Heavily guarded by ARC forces. Coordinate with team."
                },
                {
                    id: "blue_3",
                    name: "Research Labs",
                    type: "blueprints",
                    x: 65,
                    y: 55,
                    description: "Advanced research facility with cutting-edge blueprints.",
                    loot: ["Experimental Blueprints", "Research Data", "Prototype Schematics"],
                    risk: "High",
                    tips: "Multiple lab rooms. Check all computer terminals."
                },
                {
                    id: "blue_4",
                    name: "Hidden Vault",
                    type: "secrets",
                    x: 20,
                    y: 60,
                    description: "Secret vault containing rare experimental materials.",
                    loot: ["Rare Elements", "Experimental Materials", "Energy Cores"],
                    risk: "Medium",
                    tips: "Requires special keycard from director's office."
                },
                {
                    id: "blue_5",
                    name: "Emergency Exit",
                    type: "extracts",
                    x: 80,
                    y: 15,
                    description: "Secure extraction point with minimal ARC presence.",
                    loot: ["Safe Exit"],
                    risk: "Low",
                    tips: "Longest route but safest option. Stock up on supplies."
                }
            ]
        },
        stella: {
            name: "Stella Montis",
            description: "Level 25-35 • Large Underground Research Complex",
            image: "https://allthings.how/content/images/2025/10/arc-raider-map.webp",
            lootSpots: [
                {
                    id: "stella_1",
                    name: "Assembly Rocket Thrusters",
                    type: "high-tier",
                    x: 45,
                    y: 35,
                    description: "S-tier loot location in the assembly area with rocket thruster components.",
                    loot: ["Rocket Components", "Advanced Materials", "Engineering Blueprints"],
                    risk: "Medium",
                    tips: "Two-level facility. Check both upper and lower assembly areas."
                },
                {
                    id: "stella_2",
                    name: "Medical Research Wing",
                    type: "weapons",
                    x: 30,
                    y: 50,
                    description: "Medical facility with specialized equipment and defensive weapons.",
                    loot: ["Medical Equipment", "Defensive Weapons", "Pharmaceuticals"],
                    risk: "Low",
                    tips: "Matriarch ARCs patrol this area. Move quietly."
                },
                {
                    id: "stella_3",
                    name: "Cultural Archives",
                    type: "blueprints",
                    x: 60,
                    y: 25,
                    description: "Preserved archives containing historical and technological blueprints.",
                    loot: ["Historical Blueprints", "Cultural Artifacts", "Data Archives"],
                    risk: "Low",
                    tips: "Climate-controlled environment. Check all storage units."
                },
                {
                    id: "stella_4",
                    name: "Seed Vault",
                    type: "secrets",
                    x: 70,
                    y: 60,
                    description: "Hidden seed vault with rare biological samples and materials.",
                    loot: ["Biological Samples", "Rare Seeds", "Research Materials"],
                    risk: "Low",
                    tips: "Requires biometric access. Check scientist quarters for access cards."
                },
                {
                    id: "stella_5",
                    name: "Mountain Exit",
                    type: "extracts",
                    x: 20,
                    y: 20,
                    description: "Mountain tunnel extraction point.",
                    loot: ["Safe Exit"],
                    risk: "Medium",
                    tips: "Cold environment. Bring thermal gear for the journey."
                }
            ]
        }
    },
    
    lootTypes: {
        "high-tier": {
            name: "High-Tier Loot",
            color: "#ff6b35",
            description: "Premium gear and valuable items"
        },
        "weapons": {
            name: "Weapon Cache",
            color: "#e74c3c",
            description: "Weapons and ammunition"
        },
        "blueprints": {
            name: "Blueprints",
            color: "#3498db",
            description: "Crafting blueprints and schematics"
        },
        "extracts": {
            name: "Extraction Point",
            color: "#2ecc71",
            description: "Safe extraction locations"
        },
        "secrets": {
            name: "Secret Cache",
            color: "#9b59b6",
            description: "Hidden loot and rare materials"
        }
    },
    
    // Search functionality
    searchLoot: function(query) {
        const results = [];
        const searchTerm = query.toLowerCase();
        
        Object.keys(this.maps).forEach(mapKey => {
            const map = this.maps[mapKey];
            map.lootSpots.forEach(spot => {
                if (spot.name.toLowerCase().includes(searchTerm) ||
                    spot.description.toLowerCase().includes(searchTerm) ||
                    spot.loot.some(item => item.toLowerCase().includes(searchTerm))) {
                    results.push({
                        ...spot,
                        mapName: map.name,
                        mapKey: mapKey
                    });
                }
            });
        });
        
        return results;
    },
    
    // Filter functionality
    filterByType: function(mapKey, types) {
        const map = this.maps[mapKey];
        if (!map) return [];
        
        return map.lootSpots.filter(spot => types.includes(spot.type));
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = arcRaidersData;
}