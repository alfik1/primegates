// Photo file-name prefix for each activity in public/activities.
// Files are <prefix>1.jpg, <prefix>2.jpg, <prefix>3.jpg (exact capitals, Vercel is case-sensitive).
const PREFIX = {
  "general-trading": "general",
  "e-commerce": "Ecommerce",
  "computers-peripherals": "computer",
  "food-beverages": "Beverage",
  "detergents-disinfectants": "Detergents",
  "soap-hair-care": "Soap",
  "mobile-phones": "Mobile Phones",
  "perfumes-cosmetics": "Perfumes",
  "auto-spare-parts": "AutoSpare",
  "office-furniture": "Office",
};

export const photoUrl = (slug, n) =>
  `/activities/${encodeURIComponent(PREFIX[slug] ?? slug)}${n}.jpg`;