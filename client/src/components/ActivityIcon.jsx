import { Package, ShoppingCart, Laptop, Apple, SprayCan, Droplets, Smartphone, Sparkles, Wrench, Armchair } from "lucide-react";

const map = { Package, ShoppingCart, Laptop, Apple, SprayCan, Droplets, Smartphone, Sparkles, Wrench, Armchair };

export default function ActivityIcon({ name, size = 26 }) {
  const Icon = map[name] || Package;
  return <Icon size={size} />;
}