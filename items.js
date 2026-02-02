/**
 * ITEMS CONFIGURATION
 *
 * Edit this file to add, remove, or modify items.
 *
 * Each item has:
 * - name: Display name
 * - type: "body", "legs", "arms", "weapon", or "chip"
 * - stats: Object with stat bonuses { hp, defence, speed, attack, combo }
 * - dropRate: Relative chance to drop (higher = more common)
 * - droppedBy: Array of enemy names that can drop this item (empty = all enemies)
 */

const ITEMS = [
    // ==================== BODY (HP & Defence) ====================
    {
        name: "Basic Plating",
        type: "body",
        stats: { hp: 10, defence: 1 },
        dropRate: 50,
        droppedBy: []
    },
    {
        name: "Reinforced Chassis",
        type: "body",
        stats: { hp: 20, defence: 2 },
        dropRate: 35,
        droppedBy: []
    },
    {
        name: "Titanium Frame",
        type: "body",
        stats: { hp: 30, defence: 3 },
        dropRate: 25,
        droppedBy: ["Droid Enforcer", "Droid Sentinel", "Droid Destroyer"]
    },
    {
        name: "Composite Armor",
        type: "body",
        stats: { hp: 40, defence: 4 },
        dropRate: 15,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"]
    },
    {
        name: "Nano-Weave Shell",
        type: "body",
        stats: { hp: 50, defence: 5 },
        dropRate: 10,
        droppedBy: ["Droid Destroyer"]
    },
    {
        name: "Fortress Core",
        type: "body",
        stats: { hp: 75, defence: 7 },
        dropRate: 5,
        droppedBy: ["Droid Destroyer"]
    },

    // ==================== LEGS (Speed) ====================
    {
        name: "Standard Servos",
        type: "legs",
        stats: { speed: 3 },
        dropRate: 50,
        droppedBy: []
    },
    {
        name: "Quick Striders",
        type: "legs",
        stats: { speed: 5 },
        dropRate: 35,
        droppedBy: []
    },
    {
        name: "Hydraulic Boosters",
        type: "legs",
        stats: { speed: 8 },
        dropRate: 25,
        droppedBy: ["Droid Scout", "Droid Enforcer", "Droid Sentinel"]
    },
    {
        name: "Reflex Actuators",
        type: "legs",
        stats: { speed: 12 },
        dropRate: 15,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"]
    },
    {
        name: "Phase Shift Legs",
        type: "legs",
        stats: { speed: 16 },
        dropRate: 8,
        droppedBy: ["Droid Destroyer"]
    },
    {
        name: "Quantum Thrusters",
        type: "legs",
        stats: { speed: 20 },
        dropRate: 4,
        droppedBy: ["Droid Destroyer"]
    },

    // ==================== ARMS (Attack or Defence) ====================
    {
        name: "Standard Manipulators",
        type: "arms",
        stats: { attack: 2 },
        dropRate: 50,
        droppedBy: []
    },
    {
        name: "Shield Bracers",
        type: "arms",
        stats: { defence: 2 },
        dropRate: 45,
        droppedBy: []
    },
    {
        name: "Power Gauntlets",
        type: "arms",
        stats: { attack: 4 },
        dropRate: 30,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"]
    },
    {
        name: "Barrier Arms",
        type: "arms",
        stats: { defence: 4 },
        dropRate: 28,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"]
    },
    {
        name: "Crusher Claws",
        type: "arms",
        stats: { attack: 7 },
        dropRate: 12,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"]
    },
    {
        name: "Fortress Gauntlets",
        type: "arms",
        stats: { defence: 6 },
        dropRate: 10,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"]
    },
    {
        name: "Decimator Arms",
        type: "arms",
        stats: { attack: 10 },
        dropRate: 5,
        droppedBy: ["Droid Destroyer"]
    },

    // ==================== WEAPON (Attack, Combo, or Defence) ====================
    {
        name: "Pulse Pistol",
        type: "weapon",
        stats: { attack: 2 },
        dropRate: 50,
        droppedBy: []
    },
    {
        name: "Energy Shield",
        type: "weapon",
        stats: { defence: 2 },
        dropRate: 45,
        droppedBy: []
    },
    {
        name: "Chain Blade",
        type: "weapon",
        stats: { attack: 3, combo: 3 },
        dropRate: 30,
        droppedBy: []
    },
    {
        name: "Plasma Rifle",
        type: "weapon",
        stats: { attack: 5 },
        dropRate: 25,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"]
    },
    {
        name: "Combo Striker",
        type: "weapon",
        stats: { combo: 8 },
        dropRate: 20,
        droppedBy: ["Droid Scout", "Droid Enforcer"]
    },
    {
        name: "Fortress Module",
        type: "weapon",
        stats: { defence: 5 },
        dropRate: 18,
        droppedBy: ["Droid Sentinel"]
    },
    {
        name: "Railgun",
        type: "weapon",
        stats: { attack: 8 },
        dropRate: 12,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"]
    },
    {
        name: "Breaker Blade",
        type: "weapon",
        stats: { attack: 5, combo: 10 },
        dropRate: 8,
        droppedBy: ["Droid Destroyer"]
    },
    {
        name: "Annihilator Cannon",
        type: "weapon",
        stats: { attack: 12 },
        dropRate: 4,
        droppedBy: ["Droid Destroyer"]
    },

    // ==================== SYSTEMS CHIP (Any stat) ====================
    {
        name: "Health Booster Chip",
        type: "chip",
        stats: { hp: 15 },
        dropRate: 40,
        droppedBy: []
    },
    {
        name: "Speed Processor",
        type: "chip",
        stats: { speed: 4 },
        dropRate: 38,
        droppedBy: []
    },
    {
        name: "Attack Subroutine",
        type: "chip",
        stats: { attack: 2 },
        dropRate: 36,
        droppedBy: []
    },
    {
        name: "Combo Algorithm",
        type: "chip",
        stats: { combo: 5 },
        dropRate: 34,
        droppedBy: []
    },
    {
        name: "Defence Matrix",
        type: "chip",
        stats: { defence: 2 },
        dropRate: 32,
        droppedBy: []
    },
    {
        name: "Balanced Core",
        type: "chip",
        stats: { hp: 10, attack: 2, defence: 1 },
        dropRate: 20,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"]
    },
    {
        name: "Assault Protocol",
        type: "chip",
        stats: { attack: 4, combo: 6 },
        dropRate: 15,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"]
    },
    {
        name: "Survival Module",
        type: "chip",
        stats: { hp: 30, defence: 3 },
        dropRate: 12,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"]
    },
    {
        name: "Overclock Chip",
        type: "chip",
        stats: { speed: 8, combo: 8 },
        dropRate: 8,
        droppedBy: ["Droid Destroyer"]
    },
    {
        name: "Omega Core",
        type: "chip",
        stats: { hp: 20, speed: 5, attack: 3, combo: 5, defence: 2 },
        dropRate: 3,
        droppedBy: ["Droid Destroyer"]
    }
];

// Item type labels for UI
const ITEM_TYPES = {
    body: "Body",
    legs: "Legs",
    arms: "Arms",
    weapon: "Weapon",
    chip: "Systems Chip"
};
