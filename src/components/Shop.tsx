import { useState } from 'react';
import { 
  ChevronRight, 
  Filter, 
  ShoppingCart, 
  Plus,
  ChevronLeft,
  Search,
  Grid3X3,
  LayoutList
} from 'lucide-react';
import { motion } from 'motion/react';

const PRODUCTS = [
  { id: 1, name: '8-bit Cherry Earrings', price: 124.00, tag: 'NEW', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRthedtfBZzha9xaweCjshXiXIuTyQZMh7qubqZUyQvmq30fjiMor7VxAYqN0t5PQ9ox368O5DSMxHsVzYoMyfdjWU8yrjDMlb3okIkvNBWlJ_gX3o-httSFN_OMr7Ys9f78iFd03q9zBtFhKTzvySY2b6etny35a3NlWFTH875ilh6uaak7LYhQWDxNkt6wRMMnvLe6xctfY5mo6VJonIfCQK-MKaFg5oD93jhhAOv_8sATRPki371Jsh7vMh4m9EeFEPovShJXY' },
  { id: 2, name: 'Retro Cloud Choker', price: 132.00, tag: null, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa-lhDbfOMnRGGdawfJV9Fx3-pdK6q5D4tZmbMbrfz6kWvYILMe7wJofKP8oEotWcdf8vYlJJ6lFLzoNETZQmUlwTJd_rLVvq-WtO25Ee8fuQJrKTy8dP2as8kj9VCqwdQIbmDuycb0QSqwWPSSuw2jLeJQyYWg-BhTd-4qmey98_Eac53DYyKZPMCuBSqKt7eIsbYzJ0Xx-NohZ2Ao7kkN0daDM6aFDBGu3pFIeDS0bVyIrMHZSkaJiHq_g9N_qKU9A7WdGoecik' },
  { id: 3, name: 'Pixel Star Charm', price: 115.00, tag: 'LOW STOCK', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtPzcBg1jf5fbXlz3qyqhB3N76v48PYH8nFqUqckXZJMbn-f9_oFVMPh3qEbeqoPOGleV1x87RU_vaf-zx1z0A0CKu-qmHg2ji-AvUdEBuSU5qP1S5KjdjFuG15NV8o2ttX98-fBFhT9guTW6h-eaPuAcFPgYP2AGVRCk32Outp8IM0mHFttziY5lsJj3Gn-57BoHO-nPdc6MnBImlrjdNf2ANZIrY3MzHPmKnhaTO6HRv5avGldU5DckqDud1Pdd6GEVr12ObDrg' },
  { id: 4, name: 'Game Over Necklace', price: 128.00, tag: null, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQQB3FQIPCz7z5TxbBcbpmcPq46twSD7pklw23G-KzAwU5LkUzHXsVEWpsJPkGG1srHJROl7bstmj7p_-1lZJqfwPCQZ_j3d0_x5Oa0ELNv1URD3EQkg9w35JSRnuSxPZ_8U38m1VW13ax9H3x_oc5Fo_oh4NZGU9G9BFZiW30PIAjz9hD8rNODgb5jBqQ0We5mRtlvpcFLFMknJCxiyXzl8GSrwNGMCkM2MIyWF4jove0Yf72Ftkit_R1l6iPfW9IF_JQJqrKRTk' },
  { id: 5, name: 'Potion Bottle Earrings', price: 122.00, tag: null, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw5PVD23KVngF58yD1_ixVod4GRdse8ra4NCed1sMlMIVtbhjuznib6aH5jbWBerMdr_XYyj5xBzpYmCQnRbV20kjgJXQCzeY3OpwLu-8mDgfNokjGEaWIdc8rci1JxejTEpDmBtfyrpPR8skW1EIq1cECPAGpGVhPU1-rdPxPILYuf8rTzuYJNMbpMPhdafP87vx6nsgebzf4BPMvx_sMaOP7QRpAY3eaBpXEhnSyY1-mmsBwvuD35v2gn7mK20KMqZiL1vsK8Yo' },
  { id: 6, name: 'Mystery Loot Box', price: 145.00, tag: 'SOLD OUT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw5PVD23KVngF58yD1_ixVod4GRdse8ra4NCed1sMlMIVtbhjuznib6aH5jbWBerMdr_XYyj5xBzpYmCQnRbV20kjgJXQCzeY3OpwLu-8mDgfNokjGEaWIdc8rci1JxejTEpDmBtfyrpPR8skW1EIq1cECPAGpGVhPU1-rdPxPILYuf8rTzuYJNMbpMPhdafP87vx6nsgebzf4BPMvx_sMaOP7QRpAY3eaBpXEhnSyY1-mmsBwvuD35v2gn7mK20KMqZiL1vsK8Yo' },
];

export default function Shop({ onBack }: { onBack: () => void }) {
  const [priceRange, setPriceRange] = useState(40);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-bg-light min-h-screen font-sans text-ink">
      {/* Breadcrumbs & Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-4">
          <button onClick={onBack} className="hover:text-primary hover:underline decoration-2 underline-offset-2">Home</button>
          <ChevronRight size={14} />
          <span className="text-ink font-bold">Shop</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-5xl md:text-6xl font-pixel text-ink uppercase tracking-wide">Shop All</h1>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center justify-center gap-2 bg-white border-2 border-ink px-6 py-3 font-pixel text-xs uppercase shadow-retro hover:bg-gray-50 transition-colors"
          >
            <Filter size={18} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className={`w-full lg:w-64 flex-shrink-0 space-y-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          {/* Categories */}
          <div className="border-2 border-ink p-5 bg-white shadow-retro">
            <div className="flex items-center gap-2 mb-4 border-b-2 border-ink pb-2">
              <Filter size={20} className="text-primary" />
              <h3 className="font-pixel text-xs uppercase pt-1">Filters</h3>
            </div>
            <div className="space-y-3">
              {['Earrings', 'Necklaces', 'Bracelets', 'Custom Kits'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 border-2 border-ink rounded-none checked:bg-primary focus:ring-0 cursor-pointer" />
                  <span className="font-medium group-hover:text-primary transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="border-2 border-ink p-5 bg-white shadow-retro">
            <h3 className="font-pixel text-xs uppercase mb-4 border-b-2 border-ink pb-2 pt-1">Price</h3>
            <div className="px-1">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-1 bg-ink rounded-none appearance-none cursor-pointer accent-primary" 
              />
              <div className="flex justify-between text-xs font-bold font-pixel mt-4">
                <span>₹0</span>
                <span className="text-primary">₹{priceRange}+</span>
              </div>
            </div>
          </div>

          {/* Themes */}
          <div className="border-2 border-ink p-5 bg-white shadow-retro">
            <h3 className="font-pixel text-xs uppercase mb-4 border-b-2 border-ink pb-2 pt-1">Theme</h3>
            <div className="space-y-3">
              {['8-bit Food', 'Celestial', 'Retro Tech'].map((theme) => (
                <label key={theme} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 border-2 border-ink rounded-none checked:bg-primary focus:ring-0 cursor-pointer" />
                  <span className="font-medium group-hover:text-primary transition-colors">{theme}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="retro-button w-full py-3 bg-primary text-white font-pixel text-sm uppercase border-2 border-ink shadow-retro hover:bg-primary-dark">
            Apply Filters
          </button>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort & Count */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <p className="text-sm font-medium text-gray-500">Showing {PRODUCTS.length} of 42 products</p>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="flex border-2 border-ink shadow-retro-sm bg-white overflow-hidden">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-ink text-white' : 'hover:bg-gray-50'}`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 border-l-2 border-ink ${viewMode === 'list' ? 'bg-ink text-white' : 'hover:bg-gray-50'}`}
                >
                  <LayoutList size={18} />
                </button>
              </div>
              <select className="flex-1 sm:flex-none bg-white border-2 border-ink text-sm font-bold py-2 pl-3 pr-10 focus:ring-0 focus:border-primary cursor-pointer shadow-retro-sm appearance-none">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -5 }}
                className={`group relative bg-white border-2 border-ink shadow-retro hover:shadow-retro-primary transition-all duration-200 ${product.tag === 'SOLD OUT' ? 'opacity-75' : ''}`}
              >
                <div className={`relative aspect-square overflow-hidden bg-gray-100 border-b-2 border-ink ${viewMode === 'list' ? 'sm:aspect-[16/9]' : ''}`}>
                  {product.tag && (
                    <div className={`absolute top-3 left-3 z-20 ${product.tag === 'SOLD OUT' ? 'bg-gray-800' : 'bg-primary'} text-white text-[8px] font-bold px-2 py-1 border border-ink shadow-retro-sm`}>
                      {product.tag}
                    </div>
                  )}
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${product.tag === 'SOLD OUT' ? 'grayscale' : ''}`}
                    referrerPolicy="no-referrer"
                  />
                  {product.tag !== 'SOLD OUT' && (
                    <button className="absolute bottom-4 right-4 h-12 w-12 flex items-center justify-center bg-ink text-white hover:bg-primary transition-colors border-2 border-transparent hover:border-ink translate-y-20 group-hover:translate-y-0 duration-300">
                      <ShoppingCart size={20} />
                    </button>
                  )}
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className={`font-bold text-lg leading-tight group-hover:text-primary transition-colors ${product.tag === 'SOLD OUT' ? 'text-gray-500' : ''}`}>
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-end">
                    <span className={`font-pixel text-xl ${product.tag === 'SOLD OUT' ? 'text-gray-400 line-through' : 'text-ink'}`}>
                      ₹{product.price.toFixed(2)}
                    </span>
                    {product.tag === 'SOLD OUT' ? (
                      <span className="text-[10px] font-bold uppercase text-gray-400">Out of Stock</span>
                    ) : (
                      <button className="text-xs font-bold border-b-2 border-ink hover:text-primary transition-colors uppercase tracking-wider">Details</button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="retro-button size-12 flex items-center justify-center border-2 border-ink bg-white hover:bg-gray-50 shadow-retro-sm disabled:opacity-50">
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {[1, 2, 3].map(page => (
                  <button 
                    key={page}
                    className={`size-12 flex items-center justify-center border-2 border-ink font-pixel text-lg shadow-retro-sm ${page === 1 ? 'bg-primary text-white' : 'bg-white hover:bg-gray-50'}`}
                  >
                    {page}
                  </button>
                ))}
                <span className="flex items-end px-2 font-pixel text-lg">...</span>
                <button className="size-12 flex items-center justify-center border-2 border-ink bg-white hover:bg-gray-50 font-pixel text-lg shadow-retro-sm">8</button>
              </div>
              <button className="retro-button size-12 flex items-center justify-center border-2 border-ink bg-white hover:bg-primary hover:text-white transition-colors shadow-retro-sm">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
