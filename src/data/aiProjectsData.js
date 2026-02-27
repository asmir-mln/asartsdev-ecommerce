// Données des projets IA AsArt'sDev
// Fichiers sources, explications et objectifs pour chaque projet

export const aiProjects = [
  {
    id: 1,
    title: "Générateur de Descriptions de Livres",
    icon: "📖",
    objective:
      "Automatiser la génération de descriptions marketing pour des livres illustrés à partir d'un titre et d'une liste de mots-clés, en utilisant un modèle de langage.",
    description:
      "Ce projet utilise l'API OpenAI pour générer automatiquement des descriptions de livres attrayantes. Il prend en entrée le titre du livre et quelques mots-clés, puis produit une description optimisée pour la vente.",
    codeExcerpt: `import openai

def generate_book_description(title: str, keywords: list[str]) -> str:
    """Génère une description de livre à partir d'un titre et de mots-clés."""
    prompt = f"""Titre du livre : {title}
Mots-clés : {', '.join(keywords)}

Écris une description attrayante de 3 phrases pour ce livre illustré pour enfants."""

    response = openai.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=150,
    )
    return response.choices[0].message.content

if __name__ == "__main__":
    desc = generate_book_description(
        "Souvenirs d'Enfance",
        ["souvenir", "enfance", "illustrations", "émotions"]
    )
    print(desc)`,
    language: "Python",
    githubUrl: "https://github.com/asmir-mln/asartsdev-ecommerce",
    tags: ["OpenAI", "Python", "NLP"],
  },
  {
    id: 2,
    title: "Classification d'Illustrations par IA",
    icon: "🎨",
    objective:
      "Classer automatiquement les illustrations d'un livre selon leur thème (nature, émotions, aventure…) afin de faciliter la navigation et la recherche dans une bibliothèque d'images.",
    description:
      "Utilisation de l'API Vision d'OpenAI pour analyser et catégoriser les illustrations. Chaque image est envoyée au modèle qui retourne une liste de thèmes détectés avec un score de confiance.",
    codeExcerpt: `import base64
import openai

def classify_illustration(image_path: str) -> dict:
    """Classifie une illustration selon son thème principal."""
    with open(image_path, "rb") as img_file:
        image_data = base64.b64encode(img_file.read()).decode("utf-8")

    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{image_data}"
                        },
                    },
                    {
                        "type": "text",
                        "text": "Identifie les thèmes principaux de cette illustration (nature, émotions, aventure, famille…). Réponds en JSON avec les clés 'themes' et 'description'.",
                    },
                ],
            }
        ],
    )
    return response.choices[0].message.content

if __name__ == "__main__":
    result = classify_illustration("cover.jpg")
    print(result)`,
    language: "Python",
    githubUrl: "https://github.com/asmir-mln/asartsdev-ecommerce",
    tags: ["OpenAI Vision", "Python", "Classification"],
  },
  {
    id: 3,
    title: "Chatbot de Recommandation de Livres",
    icon: "🤖",
    objective:
      "Proposer aux visiteurs du site un assistant conversationnel capable de recommander des livres adaptés à l'âge et aux centres d'intérêt de l'enfant.",
    description:
      "Intégration d'un chatbot React qui communique avec une API Node.js. Le chatbot pose des questions sur l'âge de l'enfant et ses préférences, puis génère une recommandation personnalisée via un modèle de langage.",
    codeExcerpt: `// api/chatbot.js - Route Express pour le chatbot de recommandation
const express = require("express");
const OpenAI = require("openai");

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = \`Tu es un assistant libraire spécialisé dans les livres illustrés
pour enfants. Tu poses des questions sur l'âge de l'enfant et ses centres d'intérêt,
puis recommandes un livre de la collection AsArt'sDev en expliquant pourquoi il lui
conviendrait.\`;

router.post("/recommend", async (req, res) => {
  const { messages } = req.body;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    max_tokens: 200,
  });

  res.json({ reply: completion.choices[0].message.content });
});

module.exports = router;`,
    language: "JavaScript",
    githubUrl: "https://github.com/asmir-mln/asartsdev-ecommerce",
    tags: ["OpenAI", "Node.js", "React", "Chatbot"],
  },
];
