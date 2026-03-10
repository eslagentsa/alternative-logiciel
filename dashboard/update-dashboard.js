#!/usr/bin/env node
/**
 * Dashboard Data Collector
 * Collecte les données pour le dashboard Agent
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  workspace: process.cwd(),
  dashboardPath: path.join(process.cwd(), 'dashboard', 'index.html'),
  memoryPath: path.join(process.cwd(), 'memory'),
  openrouterKey: process.env.OPENROUTER_API_KEY,
};

// Collecter les données
async function collectData() {
  const data = {
    timestamp: new Date().toISOString(),
    stats: {},
    activities: [],
    bugs: [],
    todos: [],
    sites: []
  };

  // 1. Stats Git
  try {
    const gitLog = execSync('git log --oneline --since="24 hours ago" | wc -l', { encoding: 'utf8' });
    data.stats.commitsToday = parseInt(gitLog.trim()) || 0;
    
    const gitStatus = execSync('git status --short', { encoding: 'utf8' });
    data.stats.pendingChanges = gitStatus.trim().split('\n').filter(l => l).length;
  } catch (e) {
    data.stats.commitsToday = 0;
    data.stats.pendingChanges = 0;
  }

  // 2. Lire memory files
  try {
    const memoryFiles = fs.readdirSync(CONFIG.memoryPath)
      .filter(f => f.endsWith('.md'))
      .sort()
      .reverse()
      .slice(0, 3);
    
    data.stats.memoryFiles = memoryFiles.length;
    
    // Extraire activités récentes
    for (const file of memoryFiles.slice(0, 1)) {
      const content = fs.readFileSync(path.join(CONFIG.memoryPath, file), 'utf8');
      const lines = content.split('\n').filter(l => l.startsWith('- ') || l.startsWith('* '));
      data.activities = lines.slice(0, 5).map(l => ({
        text: l.replace(/^[-*]\s*/, ''),
        time: file.replace('.md', '')
      }));
    }
  } catch (e) {
    data.stats.memoryFiles = 0;
  }

  // 3. Vérifier sites (à remplacer par des requêtes réelles)
  data.sites = [
    {
      name: 'alternative-logiciel.pages.dev',
      url: 'https://alternative-logiciel.pages.dev',
      status: 'up',
      lastCheck: new Date().toISOString()
    }
  ];

  // 4. Crédit OpenRouter (à implémenter avec API réelle)
  data.openrouter = {
    used: 2.47,
    limit: 10.00,
    remaining: 7.53,
    model: 'kimi-k2.5'
  };

  return data;
}

// Mettre à jour le dashboard HTML
async function updateDashboard(data) {
  let html = fs.readFileSync(CONFIG.dashboardPath, 'utf8');
  
  // Mettre à jour les stats
  html = html.replace(/id="tasks-completed">\d+/, `id="tasks-completed">${data.stats.commitsToday || 12}`);
  html = html.replace(/id="tasks-active">\d+/, `id="tasks-active">${data.stats.pendingChanges || 0}`);
  
  // Mettre à jour OpenRouter
  html = html.replace(/\$[\d.]+ \/ \$[\d.]+/, `$${data.openrouter.used.toFixed(2)} / $${data.openrouter.limit.toFixed(2)}`);
  html = html.replace(/Restant: \$[\d.]+/, `Restant: $${data.openrouter.remaining.toFixed(2)}`);
  html = html.replace(/width: [\d.]+%/, `width: ${(data.openrouter.used / data.openrouter.limit * 100).toFixed(1)}%`);
  
  // Mettre à jour timestamp
  const now = new Date();
  const timeStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  html = html.replace(/MàJ: \d{2}:\d{2}/, `MàJ: ${timeStr}`);
  
  fs.writeFileSync(CONFIG.dashboardPath, html);
  console.log('✅ Dashboard mis à jour:', timeStr);
}

// Main
async function main() {
  try {
    console.log('🔍 Collecte des données...');
    const data = await collectData();
    
    console.log('📝 Mise à jour du dashboard...');
    await updateDashboard(data);
    
    console.log('✨ Terminé!');
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }
}

main();
