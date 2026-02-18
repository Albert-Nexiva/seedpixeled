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
  { id: 1, name: '8-Bit Heart Earrings', price: 124.00, tag: 'NEW', rating: 4.5, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRthedtfBZzha9xaweCjshXiXIuTyQZMh7qubqZUyQvmq30fjiMor7VxAYqN0t5PQ9ox368O5DSMxHsVzYoMyfdjWU8yrjDMlb3okIkvNBWlJ_gX3o-httSFN_OMr7Ys9f78iFd03q9zBtFhKTzvySY2b6etny35a3NlWFTH875ilh6uaak7LYhQWDxNkt6wRMMnvLe6xctfY5mo6VJonIfCQK-MKaFg5oD93jhhAOv_8sATRPki371Jsh7vMh4m9EeFEPovShJXY' },
  { id: 2, name: 'Pixel Cloud Choker', price: 132.00, tag: 'HOT', rating: 5.0, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa-lhDbfOMnRGGdawfJV9Fx3-pdK6q5D4tZmbMbrfz6kWvYILMe7wJofKP8oEotWcdf8vYlJJ6lFLzoNETZQmUlwTJd_rLVvq-WtO25Ee8fuQJrKTy8dP2as8kj9VCqwdQIbmDuycb0QSqwWPSSuw2jLeJQyYWg-BhTd-4qmey98_Eac53DYyKZPMCuBSqKt7eIsbYzJ0Xx-NohZ2Ao7kkN0daDM6aFDBGu3pFIeDS0bVyIrMHZSkaJiHq_g9N_qKU9A7WdGoecik' },
  { id: 3, name: 'Super Star Studs', price: 118.00, tag: 'RESTOCK', rating: 4.0, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl6YR1TwF4bwVp-z5-UcCtSGxXZGeeFcGi5x8NvXW115AcA-ssZtwUk_CvkM4QEst2X51eqI2Azzt4W0yksS5WP-ZYo7dP7NNuhZ17LPqD2q_KRmAHnFUHNfIwgtmfN5fH_VWVHdIMDeR50hkcUGImwzCao9RlZCCQnHxzppX9NM6MIHPDuyxbyzU5wIJIrH2yK6OKqBW0gdqm2yrvstVCp3uBF27rOoJoUL-nTtlIuFnxIdm2PbQuV4WcjpIr_CsNIR__qoBEDvg' },
  { id: 4, name: 'Invader Bracelet', price: 128.00, tag: 'NEW', rating: 5.0, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtPzcBg1jf5fbXlz3qyqhB3N76v48PYH8nFqUqckXZJMbn-f9_oFVMPh3qEbeqoPOGleV1x87RU_vaf-zx1z0A0CKu-qmHg2ji-AvUdEBuSU5qP1S5KjdjFuG15NV8o2ttX98-fBFhT9guTW6h-eaPuAcFPgYP2AGVRCk32Outp8IM0mHFttziY5lsJj3Gn-57BoHO-nPdc6MnBImlrjdNf2ANZIrY3MzHPmKnhaTO6HRv5avGldU5DckqDud1Pdd6GEVr12ObDrg' },
  { id: 5, name: 'Potion Bottle Pendant', price: 135.00, tag: 'LIMITED', rating: 5.0, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQQB3FQIPCz7z5TxbBcbpmcPq46twSD7pklw23G-KzAwU5LkUzHXsVEWpsJPkGG1srHJROl7bstmj7p_-1lZJqfwPCQZ_j3d0_x5Oa0ELNv1URD3EQkg9w35JSRnuSxPZ_8U38m1VW13ax9H3x_oc5Fo_oh4NZGU9G9BFZiW30PIAjz9hD8rNODgb5jBqQ0We5mRtlvpcFLFMknJCxiyXzl8GSrwNGMCkM2MIyWF4jove0Yf72Ftkit_R1l6iPfW9IF_JQJqrKRTk' },
  { id: 6, name: 'Retro Ghost Ring', price: 115.00, tag: 'NEW', rating: 4.5, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw5PVD23KVngF58yD1_ixVod4GRdse8ra4NCed1sMlMIVtbhjuznib6aH5jbWBerMdr_XYyj5xBzpYmCQnRbV20kjgJXQCzeY3OpwLu-8mDgfNokjGEaWIdc8rci1JxejTEpDmBtfyrpPR8skW1EIq1cECPAGpGVhPU1-rdPxPILYuf8rTzuYJNMbpMPhdafP87vx6nsgebzf4BPMvx_sMaOP7QRpAY3eaBpXEhnSyY1-mmsBwvuD35v2gn7mK20KMqZiL1vsK8Yo' },
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
