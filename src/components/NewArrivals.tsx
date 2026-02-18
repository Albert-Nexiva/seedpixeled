import { 
  Bolt, 
  ArrowRight, 
  Star, 
  ShoppingCart, 
  ChevronLeft, 
  ChevronRight,
  Gamepad2,
  Grid3X3,
  LayoutList
} from 'lucide-react';
import { motion } from 'motion/react';

const NEW_ARRIVALS = [
  { id: 1, name: '8-Bit Heart Earrings', price: 24.00, tag: 'NEW', rating: 4.5, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO-b0nSJUSa7UqR7zWUXkW2MSz5krWPY7YeruuXjnXl8LneO-uO9cA9szpTgka0nf36oxUYunDJM4dhkZxCPC1I9CJjxtXCNnDESpfPSaSTGzQdLccQ4Pm38SkUetF2zjF1mJJHlY8jyPEEKKPEGtjDrYjkxGGrNqzsROz17702SUQkS7vIVQiPlxRkzYl6GOd9iVpOk7so5scHSp6NivbrbBj2aEs2jueKMu2nVO4_F_IjqTkk4pzOiKgnZDNugiRe5Jqp_umqAE' },
  { id: 2, name: 'Pixel Cloud Choker', price: 32.00, tag: 'HOT', rating: 5.0, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa-lhDbfOMnRGGdawfJV9Fx3-pdK6q5D4tZmbMbrfz6kWvYILMe7wJofKP8oEotWcdf8vYlJJ6lFLzoNETZQmUlwTJd_rLVvq-WtO25Ee8fuQJrKTy8dP2as8kj9VCqwdQIbmDuycb0QSqwWPSSuw2jLeJQyYWg-BhTd-4qmey98_Eac53DYyKZPMCuBSqKt7eIsbYzJ0Xx-NohZ2Ao7kkN0daDM6aFDBGu3pFIeDS0bVyIrMHZSkaJiHq_g9N_qKU9A7WdGoecik' },
  { id: 3, name: 'Super Star Studs', price: 18.00, tag: 'RESTOCK', rating: 4.0, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl6YR1TwF4bwVp-z5-UcCtSGxXZGeeFcGi5x8NvXW115AcA-ssZtwUk_CvkM4QEst2X51eqI2Azzt4W0yksS5WP-ZYo7dP7NNuhZ17LPqD2q_KRmAHnFUHNfIwgtmfN5fH_VWVHdIMDeR50hkcUGImwzCao9RlZCCQnHxzppX9NM6MIHPDuyxbyzU5wIJIrH2yK6OKqBW0gdqm2yrvstVCp3uBF27rOoJoUL-nTtlIuFnxIdm2PbQuV4WcjpIr_CsNIR__qoBEDvg' },
  { id: 4, name: 'Invader Bracelet', price: 28.00, tag: 'NEW', rating: 5.0, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGxI7EIjAZpSA9T4iP3-dGnqSF5NBkzwXSjn6nBtNnch5ZoS2tT7sXRYeGfgOb7fMZIngZO9KCPIrOtJfhTrFiw5NYtkgebeeIOmGPh5V6UT9IVw14p3b_v63cNnHRbi3ubDLpXI2A9yi9xgp9098epH0kEFH37LZHLfUckodcA9Ea8WCMeIXvPvL7iwxQyOu9sFKCKwWI8eiiLLM8E7SqGL-yCWdoZYjv7sBWLZx6Wplb28k3t-EVcidNnjcPlD-mOQILk1In0EA' },
  { id: 5, name: 'Potion Bottle Pendant', price: 35.00, tag: 'LIMITED', rating: 5.0, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH-fNzeYa5PeDCwjYutKasG_GmcT1oRQ0owPPqURsvwY6fG0J6Fk1PcwsiN5Bq7NhmwL2rXuJqOO7hEYctLQq9vmpWchdF8jFBOFle9Z6kUW1jNxb9dLkRDPZ-Gmkbb9H8eh4LvU7_Vxszzs6RnV41YPpZUhkwuNo-Kj5hrc8grRWTKrflWTQQwoMtbZBs2s0wQJs6eIvqaGEjgMsHO5TMeAra53-XipIxqNo9wRzI_2JwKX5-XnV_b0iMqPUrVB_CQ_W1V-3TFYs' },
  { id: 6, name: 'Retro Ghost Ring', price: 15.00, tag: 'NEW', rating: 4.5, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVMqZqD2weJ2-F1P0nD4ycuhHtCNLYuk7ZP7LouExi405B2M44dinLtdVauCUeMVJoEpHlOrfKsjMkF1YT9548ymPhCx0K8Cl663N9tDVSrK20DsxOn8NjO0zVnDqJRN6ZCSdoo7jteIBq97eI1CwxexJlW7nRb3uE_sc4AfOk6Spj9clSmg6KMD1zflH_gI1BJzkJto5sttezUcBZZXY9PdNRvhbMROtpdnSGuHbQmPpsbUi9DQr4oggfzgoqqnG6C5rd_2bhEjI' },
];

export default function NewArrivals({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-bg-light min-h-screen font-sans text-ink pb-20 overflow-x-hidden">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <button onClick={onBack} className="hover:text-primary hover:underline decoration-2 underline-offset-2">Home</button>
          <ChevronRight size={14} />
          <span className="text-ink font-bold">New Arrivals</span>
        </div>
      </div>

      {/* Hero Section: Drop of the Month */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="relative flex flex-col lg:flex-row border-4 border-ink bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] shadow-retro-primary overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 text-primary animate-pulse hidden sm:block">
            <Star size={32} fill="currentColor" />
          </div>
          
          <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center gap-8 z-10">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-ink px-3 py-1 w-fit shadow-retro-sm transform -rotate-2">
              <Bolt size={14} className="text-primary fill-primary" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Limited Edition</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-pixel text-4xl sm:text-5xl lg:text-6xl leading-[0.9] uppercase tracking-tighter">
                Drop of the Month: <br />
                <span className="text-primary">Cherry Bomb 🍒</span>
              </h1>
              <p className="text-lg font-medium max-w-md bg-white/60 p-4 backdrop-blur-sm border-2 border-transparent hover:border-ink transition-all">
                Hand-woven 8-bit sweetness. Level up your inventory with our newest limited edition cherry necklace. +5 Charisma equipped.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="retro-button bg-primary text-white font-bold text-lg px-8 py-4 rounded-lg border-2 border-ink shadow-retro hover:bg-primary-dark flex items-center gap-2 group">
                Shop Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="retro-button bg-white text-ink font-bold text-lg px-8 py-4 rounded-lg border-2 border-ink shadow-retro hover:bg-gray-50">
                View Lookbook
              </button>
            </div>
          </div>

          <div className="flex-1 relative min-h-[300px] sm:min-h-[400px] lg:min-h-auto">
            <div className="absolute inset-0 bg-center bg-cover border-l-0 lg:border-l-4 border-ink" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaPdp6If1HLLEPO47rgS9pyQe-UebepqRHXstZK1dgip1SrKUQ6zWpVnwLB4LuiEFXrcznoUa8iKh38j7HwEbIMLdKqe_5J5rgMbmxvcfWS5rUzfzah5UTxO9h4RulehOpRu0G0Nm1HbJQpesJMzoTO6WQbjeCp3YNnPresdhsH3SBEzs-xfPkASHtioyoS4RW6shHu0L6SN6FewxUT3webPoT9Tbv3QxhJpqIRKODIFwqI1-7jJUgZRYsPFOw8E9wqtNHwo3-oWw")' }}>
              <div className="absolute bottom-6 right-6 bg-ink text-white font-pixel text-xl sm:text-2xl px-4 py-2">Lvl. 99</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Drops Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-end justify-between border-b-4 border-ink pb-8 mb-12">
          <div className="flex items-center gap-4">
            <Gamepad2 size={40} className="text-primary animate-pulse" />
            <h2 className="font-pixel text-3xl sm:text-4xl uppercase tracking-tighter">Latest Drops</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button className="p-2 border-2 border-ink hover:bg-accent-blue transition-colors shadow-retro-sm">
              <Grid3X3 size={24} />
            </button>
            <button className="p-2 border-2 border-ink bg-ink text-white shadow-retro-sm">
              <LayoutList size={24} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEW_ARRIVALS.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -8 }}
              className="group flex flex-col border-4 border-ink bg-white shadow-retro-primary transition-all hover:shadow-retro"
            >
              <div className="relative aspect-square overflow-hidden border-b-4 border-ink bg-gray-100">
                <div className={`absolute top-4 left-4 z-10 border-2 border-ink px-3 py-1 text-xs font-bold uppercase shadow-retro-sm ${
                  product.tag === 'HOT' ? 'bg-accent-yellow' : 
                  product.tag === 'RESTOCK' ? 'bg-accent-blue text-white' : 
                  'bg-primary text-white'
                }`}>
                  {product.tag}
                </div>
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-6 right-6 h-14 w-14 flex items-center justify-center bg-ink text-white border-2 border-transparent hover:bg-primary hover:border-ink transition-all translate-y-24 group-hover:translate-y-0 duration-300">
                  <ShoppingCart size={24} />
                </button>
              </div>
              
              <div className="p-6 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold uppercase tracking-tight">{product.name}</h3>
                  <div className="flex text-accent-yellow">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        className={i < Math.floor(product.rating) ? "" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-primary text-3xl font-black font-pixel">₹{product.price.toFixed(2)}</p>
                  <button className="text-sm font-bold border-b-2 border-ink hover:text-primary transition-colors uppercase tracking-wider">Details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-20">
          <div className="flex gap-3">
            <button className="retro-button flex h-14 w-14 items-center justify-center border-2 border-ink bg-white shadow-retro-sm hover:bg-gray-100">
              <ChevronLeft size={24} />
            </button>
            <button className="retro-button flex h-14 w-14 items-center justify-center border-2 border-ink bg-primary text-white font-bold text-xl shadow-retro-sm">1</button>
            <button className="retro-button flex h-14 w-14 items-center justify-center border-2 border-ink bg-white font-bold text-xl shadow-retro-sm">2</button>
            <button className="retro-button flex h-14 w-14 items-center justify-center border-2 border-ink bg-white font-bold text-xl shadow-retro-sm">3</button>
            <button className="retro-button flex h-14 w-14 items-center justify-center border-2 border-ink bg-white shadow-retro-sm hover:bg-gray-100">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
