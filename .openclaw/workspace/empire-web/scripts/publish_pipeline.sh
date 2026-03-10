#!/bin/bash
# Pipeline de publication automatique
# Usage: ./publish_pipeline.sh

echo "🚀 Démarrage du pipeline de publication..."

# 1. Générer les briefs
echo "📋 Génération des briefs SEO..."
python3 generate_briefs.py

# 2. Générer les articles (via API)
echo "✍️ Génération des articles..."
python3 generate_articles.py --input ../content/briefs --output ../content/articles

# 3. Convertir en Markdown Astro
echo "📝 Conversion en Markdown..."
python3 convert_to_markdown.py --input ../content/articles --output ../sites/alternative-logiciel/src/content/blog

# 4. Build et déploiement
echo "🏗️ Build du site..."
cd ../sites/alternative-logiciel
npm run build

# 5. Commit et push (si changements)
echo "📤 Publication..."
git add .
git commit -m "🤖 Auto-publish: $(date +%Y-%m-%d)"
git push origin main

echo "✅ Pipeline terminé!"
