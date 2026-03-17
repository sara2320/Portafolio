import { useState } from "react";
import {
  ShoppingCart,
  Star,
  ArrowLeft,
  Plus,
  Minus,
  X,
  Check,
} from "lucide-react";
import { createPageUrl } from "../utils";

const products = [
  {
    id: 1,
    name: "Laptop Pro X1",
    price: 1299,
    rating: 4.8,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    tag: "Más vendido",
  },
  {
    id: 2,
    name: "Auriculares Studio",
    price: 249,
    rating: 4.6,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    tag: "Nuevo",
  },
  {
    id: 3,
    name: 'Monitor 4K 27"',
    price: 599,
    rating: 4.9,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop",
    tag: null,
  },
  {
    id: 4,
    name: "Teclado Mecánico",
    price: 149,
    rating: 4.7,
    reviews: 456,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop",
    tag: "Oferta",
  },
  {
    id: 5,
    name: "Ratón Inalámbrico",
    price: 79,
    rating: 4.5,
    reviews: 127,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
    tag: null,
  },
  {
    id: 6,
    name: "Webcam HD",
    price: 129,
    rating: 4.4,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=300&h=200&fit=crop",
    tag: null,
  },
];

export default function DemoEcommerce() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [bought, setBought] = useState(false);

  const addToCart = (p) =>
    setCart((c) => {
      const ex = c.find((i) => i.id === p.id);
      if (ex)
        return c.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { ...p, qty: 1 }];
    });
  const remove = (id) => setCart((c) => c.filter((i) => i.id !== id));
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  const checkout = () => {
    setBought(true);
    setTimeout(() => {
      setCart([]);
      setBought(false);
      setOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background font-inter text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-xl px-6 py-3 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <a
            href={createPageUrl("Portfolio")}
            className="flex items-center gap-1 text-muted-foreground hover:text-neon-cyan text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver
          </a>
          <span className="text-border">|</span>
          <span className="font-bold gradient-text text-sm">TechStore</span>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="relative p-2 rounded-xl hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-all"
        >
          <ShoppingCart className="w-5 h-5" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-neon-cyan text-dark-900 text-xs font-bold flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </header>

      {/* Products */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-bold mb-2">Productos destacados</h2>
        <p className="text-muted-foreground text-sm mb-8">
          La mejor tecnología al mejor precio
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <div
              key={p.id}
              className="glass-card border border-border rounded-2xl overflow-hidden group hover:border-neon-cyan/30 transition-all"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.tag && (
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-neon-cyan text-dark-900 text-xs font-bold">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">{p.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(p.rating) ? "text-yellow-400 fill-yellow-400" : "text-border"}`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({p.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-neon-cyan">
                    ${p.price}
                  </span>
                  <button
                    onClick={() => addToCart(p)}
                    className="px-3 py-1.5 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-medium hover:bg-neon-cyan/20 transition-all"
                  >
                    + Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart drawer */}
      {open && (
        <div className="fixed inset-0 z-30 flex">
          <div
            className="flex-1 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="w-full max-w-sm bg-card border-l border-border flex flex-col h-full">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <h3 className="font-bold">Carrito ({count})</h3>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-secondary/50 text-muted-foreground transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {cart.length === 0 ? (
                <p className="text-center text-muted-foreground text-sm py-8">
                  Tu carrito está vacío
                </p>
              ) : (
                cart.map((i) => (
                  <div
                    key={i.id}
                    className="flex gap-3 p-3 rounded-xl border border-border"
                  >
                    <img
                      src={i.image}
                      alt={i.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{i.name}</p>
                      <p className="text-neon-cyan text-sm font-bold">
                        ${i.price}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() =>
                            i.qty === 1
                              ? remove(i.id)
                              : setCart((c) =>
                                  c.map((x) =>
                                    x.id === i.id
                                      ? { ...x, qty: x.qty - 1 }
                                      : x,
                                  ),
                                )
                          }
                          className="w-5 h-5 rounded bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs w-4 text-center">{i.qty}</span>
                        <button
                          onClick={() =>
                            setCart((c) =>
                              c.map((x) =>
                                x.id === i.id ? { ...x, qty: x.qty + 1 } : x,
                              ),
                            )
                          }
                          className="w-5 h-5 rounded bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => remove(i.id)}
                      className="text-muted-foreground hover:text-red-400 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-5 border-t border-border space-y-3">
                <div className="flex items-center justify-between font-bold">
                  <span>Total</span>
                  <span className="text-neon-cyan">
                    ${total.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={checkout}
                  className="w-full py-2.5 rounded-xl bg-neon-cyan text-dark-900 font-semibold text-sm hover:bg-neon-cyan/90 transition-all flex items-center justify-center gap-2"
                >
                  {bought ? (
                    <>
                      <Check className="w-4 h-4" />
                      ¡Compra exitosa!
                    </>
                  ) : (
                    "Comprar ahora"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
