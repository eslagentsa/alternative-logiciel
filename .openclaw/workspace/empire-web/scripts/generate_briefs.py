# Script de génération de contenu pour Empire Web
# Usage: python generate_content.py --niche "productivity" --count 5

import json
import os
import sys
from datetime import datetime

def generate_article_brief(keyword, category):
    """Génère un brief SEO pour un article"""
    return {
        "keyword": keyword,
        "category": category,
        "title": f"Top 10 alternatives à {keyword.title()}",
        "slug": f"top-10-alternatives-{keyword.replace(' ', '-')}",
        "word_count": 2000,
        "structure": [
            {"h2": "Introduction", "words": 150},
            {"h2": "Pourquoi chercher une alternative ?", "words": 200},
            {"h2": "Critères de comparaison", "words": 150},
            {"h2": "Top 10 alternatives", "subsections": [
                {"h3": "#1 [Alternative 1]", "words": 200},
                {"h3": "#2 [Alternative 2]", "words": 200},
                {"h3": "#3 [Alternative 3]", "words": 200},
                {"h3": "#4-10 [Autres alternatives]", "words": 400}
            ]},
            {"h2": "Tableau comparatif", "words": 100},
            {"h2": "Notre recommandation", "words": 200},
            {"h2": "FAQ", "words": 200},
            {"h2": "Conclusion", "words": 150}
        ],
        "lsi_keywords": [
            "meilleur logiciel",
            "comparatif",
            "gratuit",
            "avis utilisateurs",
            "fonctionnalités"
        ]
    }

def save_brief(brief, output_dir="../content/briefs"):
    """Sauvegarde le brief en JSON"""
    os.makedirs(output_dir, exist_ok=True)
    filename = f"{brief['slug']}.json"
    filepath = os.path.join(output_dir, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(brief, f, ensure_ascii=False, indent=2)
    return filepath

if __name__ == "__main__":
    # Liste des logiciels populaires à couvrir
    targets = [
        ("notion", "productivity"),
        ("trello", "productivity"),
        ("slack", "communication"),
        ("zoom", "communication"),
        ("canva", "design"),
        ("figma", "design"),
        ("photoshop", "design"),
        ("excel", "productivity"),
        ("gmail", "communication"),
        ("dropbox", "stockage")
    ]
    
    print("🎯 Génération des briefs SEO...")
    for keyword, category in targets:
        brief = generate_article_brief(keyword, category)
        filepath = save_brief(brief)
        print(f"✅ Brief créé: {brief['title']}")
    
    print(f"\n📝 {len(targets)} briefs générés avec succès!")
