"""
AsArtsDev — Exemple de code IA
Auteur : Asmir Milianni
Description : Exemples de techniques d'intelligence artificielle
              utilisées dans le cadre du projet AsArtsDev
              (génération de récits, analyse de texte, aide à l'illustration)
"""

import random

# ── Génération de texte narratif ──────────────────────────────────────────────

def generer_introduction(personnage: str, lieu: str, epoque: str) -> str:
    """
    Génère une introduction narrative pour le livre illustré.

    Args:
        personnage: Nom du personnage principal
        lieu: Lieu de l'histoire
        epoque: Époque ou saison de l'histoire

    Returns:
        str: Texte d'introduction généré
    """
    modeles = [
        f"Il était une fois, {epoque}, {personnage} qui vivait à {lieu}.",
        f"Dans {lieu}, {epoque}, l'histoire de {personnage} commença.",
        f"{epoque}, à {lieu}, {personnage} découvrit quelque chose d'extraordinaire.",
    ]
    return random.choice(modeles)


# ── Analyse de sentiment ──────────────────────────────────────────────────────

def analyser_sentiment(texte: str) -> dict:
    """
    Analyse le ton émotionnel d'un extrait du récit.

    Args:
        texte: Extrait de texte à analyser

    Returns:
        dict: Résultat avec 'ton' (positif/neutre/négatif) et 'score'
    """
    mots_positifs = ["joie", "lumière", "espoir", "amour", "bonheur", "paix", "rêve"]
    mots_negatifs = ["peur", "douleur", "ombre", "tristesse", "colère", "désespoir"]

    texte_lower = texte.lower()
    score_pos = sum(1 for mot in mots_positifs if mot in texte_lower)
    score_neg = sum(1 for mot in mots_negatifs if mot in texte_lower)

    if score_pos > score_neg:
        ton = "positif"
    elif score_neg > score_pos:
        ton = "négatif"
    else:
        ton = "neutre"

    return {"ton": ton, "score_positif": score_pos, "score_negatif": score_neg}


# ── Suggestion d'illustrations ────────────────────────────────────────────────

PALETTE_ILLUSTRATIONS = {
    "enfance": ["🌅", "🌳", "🏠", "🎈", "⭐"],
    "aventure": ["🗺️", "🌊", "🏔️", "🔦", "🚀"],
    "introspection": ["💭", "📚", "🕯️", "🌙", "🪞"],
    "sheitan": ["🌑", "🔥", "⚡", "🌪️", "🐍"],
    "bienveillance": ["🌸", "💫", "🕊️", "🌈", "✨"],
}


def suggerer_illustration(theme: str) -> list:
    """
    Suggère des illustrations emoji selon le thème d'une page du livre.

    Args:
        theme: Thème de la page (ex: 'enfance', 'sheitan', 'bienveillance')

    Returns:
        list: Liste d'illustrations suggérées pour ce thème
    """
    return PALETTE_ILLUSTRATIONS.get(theme, ["📖"])


# ── Exemple d'utilisation ─────────────────────────────────────────────────────

if __name__ == "__main__":
    # Génération d'introduction
    intro = generer_introduction(
        personnage="Asmir",
        lieu="un petit village de Bosnie",
        epoque="en été 1990"
    )
    print("Introduction générée :")
    print(intro)
    print()

    # Analyse de sentiment
    extrait = "La joie et l'espoir guidaient chaque pas d'Asmir dans ce lieu plein de lumière."
    resultat = analyser_sentiment(extrait)
    print("Analyse de sentiment :")
    print(f"  Ton : {resultat['ton']}")
    print(f"  Score positif : {resultat['score_positif']}")
    print(f"  Score négatif : {resultat['score_negatif']}")
    print()

    # Suggestions d'illustrations
    for theme in ["enfance", "sheitan", "bienveillance"]:
        illustrations = suggerer_illustration(theme)
        print(f"Illustrations pour le thème '{theme}' : {' '.join(illustrations)}")
