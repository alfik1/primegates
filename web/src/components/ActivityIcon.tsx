import { Package, ShoppingCart, Laptop, Apple, SprayCan, Droplets, Smartphone, Sparkles, Wrench, Armchair } from "lucide-react";

const map: Record<string, React.ComponentType<{ size?: number }>> = {
  Package, ShoppingCart, Laptop, Apple, SprayCan, Droplets, Smartphone, Sparkles, Wrench, Armchair,
};

export default function ActivityIcon({ name, size = 26 }: { name: string; size?: number }) {
  const Icon = map[name] || Package;
  return <Icon size={size} />;
}