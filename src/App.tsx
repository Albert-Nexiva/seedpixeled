/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ShoppingBag, 
  User, 
  Search, 
  Grid3X3, 
  ArrowRight, 
  Diamond, 
  Gamepad2, 
  Recycle, 
  Bolt,
  Heart,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import CustomDesignStudio from './components/CustomDesignStudio';
import Shop from './components/Shop';
import NewArrivals from './components/NewArrivals';

const PixelHeartLogo = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <div className={`relative ${className}`} style={{ width: size, height: size }}>
    <svg 
      viewBox="0 0 7 7" 
      width={size} 
      height={size} 
      fill="#A855F7" 
      shapeRendering="crispEdges"
    >
      {/* Row 1 */}
      <rect x="1" y="0" width="2" height="1" />
      <rect x="4" y="0" width="2" height="1" />
      {/* Row 2-4 */}
      <rect x="0" y="1" width="7" height="3" />
      {/* Row 5 */}
      <rect x="1" y="4" width="5" height="1" />
      {/* Row 6 */}
      <rect x="2" y="5" width="3" height="1" />
      {/* Row 7 */}
      <rect x="3" y="6" width="1" height="1" />
    </svg>
    <Sparkles 
      size={size / 2} 
      className="absolute -top-1 -right-1 text-accent-yellow animate-sparkle" 
    />
    <Sparkles 
      size={size / 3} 
      className="absolute -bottom-1 -left-1 text-white animate-sparkle" 
      style={{ animationDelay: '0.5s' }}
    />
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'custom' | 'shop' | 'arrivals'>('home');

  const navLinks = ['Shop', 'New Arrivals', 'Our Story', 'Custom'];

  if (currentPage === 'custom') {
    return <CustomDesignStudio onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'shop') {
    return <Shop onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'arrivals') {
    return <NewArrivals onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="bg-bg-light text-ink font-sans min-h-screen selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b-2 border-ink bg-bg-light/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 sm:gap-3 group text-left"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 border-2 border-ink shadow-retro-sm flex items-center justify-center">
              <PixelHeartLogo size={20} className="sm:hidden" />
              <PixelHeartLogo size={24} className="hidden sm:block" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-pixel text-[8px] sm:text-[10px] tracking-tighter text-ink uppercase leading-none mb-0.5 sm:mb-1">Seed</h1>
              <h1 className="font-bold text-lg sm:text-xl tracking-tight leading-none">Pixeled</h1>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <button 
                key={item} 
                onClick={() => {
                  if (item === 'Custom') setCurrentPage('custom');
                  if (item === 'Shop') setCurrentPage('shop');
                  if (item === 'New Arrivals') setCurrentPage('arrivals');
                }}
                className="text-sm font-bold uppercase hover:text-primary transition-colors hover:underline decoration-wavy decoration-2 underline-offset-4"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 hover:bg-black/5 rounded-lg transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-black/5 rounded-lg transition-colors hidden sm:block">
              <User size={20} />
            </button>
            <button className="relative p-2 hover:bg-black/5 rounded-lg transition-colors group">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-ink group-hover:-translate-y-1 transition-transform">
                2
              </span>
            </button>
            <button 
              className="p-2 hover:bg-black/5 rounded-lg transition-colors md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b-2 border-ink overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((item) => (
                  <button 
                    key={item} 
                    className="text-2xl font-black uppercase hover:text-primary transition-colors text-left"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (item === 'Custom') setCurrentPage('custom');
                      if (item === 'Shop') setCurrentPage('shop');
                      if (item === 'New Arrivals') setCurrentPage('arrivals');
                    }}
                  >
                    {item}
                  </button>
                ))}
                <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                  <button className="flex items-center gap-2 font-bold uppercase text-sm">
                    <Search size={18} /> Search
                  </button>
                  <button className="flex items-center gap-2 font-bold uppercase text-sm">
                    <User size={18} /> Account
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Marquee Banner */}
      <div className="bg-accent-yellow border-b-2 border-ink py-2 scroll-container">
        <div className="scroll-text font-pixel text-[10px] text-ink uppercase tracking-widest">
          Level Up Your Style • Free Shipping on Orders Over $50 • New Drop: 8-Bit Garden • Handmade with Love • 100% Glass Seed Beads • Level Up Your Style • Free Shipping on Orders Over $50 • New Drop: 8-Bit Garden • Handmade with Love • 100% Glass Seed Beads •
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden border-b-2 border-ink">
        <div className="absolute inset-0 pixel-bg pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Hero Content */}
          <div className="flex flex-col justify-center px-6 py-12 lg:py-20 lg:pl-10 lg:pr-20 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white border border-ink rounded-full px-3 py-1 w-fit mb-6 shadow-retro-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-wider">New Collection Live</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tighter mb-6 text-ink"
            >
              Handmade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">Pixel</span> <br />
              Perfection
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 font-medium mb-10 max-w-md leading-relaxed"
            >
              Level up your jewelry box with nostalgic, hand-woven seed bead designs inspired by 8-bit classics.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => setCurrentPage('shop')}
                className="retro-button bg-primary text-white font-bold text-lg px-8 py-4 rounded-lg border-2 border-ink shadow-retro hover:bg-primary-dark flex items-center justify-center gap-2 group"
              >
                Shop Collection
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="retro-button bg-white text-ink font-bold text-lg px-8 py-4 rounded-lg border-2 border-ink shadow-retro hover:bg-gray-50 flex items-center justify-center">
                View Lookbook
              </button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="relative bg-accent-pink/10 border-t-2 lg:border-t-0 lg:border-l-2 border-ink flex items-center justify-center p-6 lg:p-0 overflow-hidden">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full min-h-[400px] lg:min-h-auto group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-pink/30 to-transparent z-10 mix-blend-multiply"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwY0onKDhEdmU1e9YGbqNGyTgZ4ROodBaMXE_9ezPX8OilF_e66TwBAAwZx0q1uJiFWkTrrZ1ZPHO7UhkMAP-5oiH4t1UpzTRwXLtR3MkQakhBAUvbOQeJjz-JSE7RKVYZleTe-KomT8QFDuSwVm4IJz2fVqMPiJJmYUMfh-O6yJ8PIg2E00m82PLEGq7To0QUTkIO0TVdMc-6bEaiCmA26M9fvJvBxjK-bXRvT1OBK2WxeYzfTdk5iXCSLSod13OdxVVB7e0O_1E" 
                alt="Close up of a woman wearing colorful dangling beaded earrings"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Product Tag */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 left-10 bg-white border-2 border-ink p-3 shadow-retro z-20 rounded-lg max-w-[200px]"
              >
                <p className="font-bold text-[10px] uppercase mb-1 text-gray-500">Featured</p>
                <p className="font-bold text-sm">Cherry Bomb Dangles</p>
                <p className="font-pixel text-[10px] text-primary mt-1">₹28.00</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b-2 border-ink bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Diamond, title: 'Handwoven Quality', desc: 'Each piece is woven bead by bead for durability using Japanese glass beads.', color: 'bg-accent-yellow/30' },
            { icon: Gamepad2, title: 'Retro Aesthetic', desc: 'Designs inspired by your favorite 8-bit classics and Y2K nostalgia.', color: 'bg-accent-blue/30' },
            { icon: Recycle, title: 'Plastic Free Shipping', desc: 'We use eco-friendly packaging so you can feel good about your order.', color: 'bg-accent-pink/30' }
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className={`w-12 h-12 ${feature.color} rounded-lg border-2 border-ink flex items-center justify-center shrink-0`}>
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Drops */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-pixel text-xl md:text-2xl text-ink mb-3 flex items-center gap-3">
              <Bolt className="text-primary fill-primary" />
              New Drops
            </h2>
            <p className="text-gray-600 font-medium">Fresh from the bead loom. Limited quantities available.</p>
          </div>
          <button 
            onClick={() => setCurrentPage('shop')}
            className="font-bold text-sm uppercase tracking-wider border-b-2 border-primary pb-1 hover:text-primary transition-colors"
          >
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { name: '8-Bit Cherry Fringe', price: '₹28.00', tag: 'Best Seller', color: 'bg-accent-yellow', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRthedtfBZzha9xaweCjshXiXIuTyQZMh7qubqZUyQvmq30fjiMor7VxAYqN0t5PQ9ox368O5DSMxHsVzYoMyfdjWU8yrjDMlb3okIkvNBWlJ_gX3o-httSFN_OMr7Ys9f78iFd03q9zBtFhKTzvySY2b6etny35a3NlWFTH875ilh6uaak7LYhQWDxNkt6wRMMnvLe6xctfY5mo6VJonIfCQK-MKaFg5oD93jhhAOv_8sATRPki371Jsh7vMh4m9EeFEPovShJXY' },
            { name: 'Pixel Cloud Studs', price: '₹18.00', tag: null, color: '', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAna3EH6OU-MKOHV667NxBz7BRMiQRbp6VxwxPonJ3Wj4nIseeDuK4Gcn5Fyd9durfqesaYe7Q1jKSdK4CXKM2Xm816NEOO1OmEIFA_Pw9_kUu3sNVyqAFerTUu0JVyiIGiH5aktE6gxGCiijUz0VpZk77XrgiOTxFwFCmq4lbLfGrnYl3ifG4L68x3Tgk76BPKfmW255K-MCSJlgrYSgshQ4tdFZj0SK08DcI_mzDZaiod2gq5EB6aGAOSYaiQOWQ7vdKRPTUUtdw' },
            { name: 'Star Power Drop', price: '₹24.00', tag: 'New', color: 'bg-accent-blue', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtPzcBg1jf5fbXlz3qyqhB3N76v48PYH8nFqUqckXZJMbn-f9_oFVMPh3qEbeqoPOGleV1x87RU_vaf-zx1z0A0CKu-qmHg2ji-AvUdEBuSU5qP1S5KjdjFuG15NV8o2ttX98-fBFhT9guTW6h-eaPuAcFPgYP2AGVRCk32Outp8IM0mHFttziY5lsJj3Gn-57BoHO-nPdc6MnBImlrjdNf2ANZIrY3MzHPmKnhaTO6HRv5avGldU5DckqDud1Pdd6GEVr12ObDrg' },
            { name: 'Retro Heart Dangles', price: '₹22.00', tag: null, color: '', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQQB3FQIPCz7z5TxbBcbpmcPq46twSD7pklw23G-KzAwU5LkUzHXsVEWpsJPkGG1srHJROl7bstmj7p_-1lZJqfwPCQZ_j3d0_x5Oa0ELNv1URD3EQkg9w35JSRnuSxPZ_8U38m1VW13ax9H3x_oc5Fo_oh4NZGU9G9BFZiW30PIAjz9hD8rNODgb5jBqQ0We5mRtlvpcFLFMknJCxiyXzl8GSrwNGMCkM2MIyWF4jove0Yf72Ftkit_R1l6iPfW9IF_JQJqrKRTk' }
          ].map((product, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group flex flex-col gap-3"
            >
              <div className="relative aspect-square w-full bg-white border-2 border-ink rounded-xl shadow-retro overflow-hidden transition-all group-hover:shadow-retro-primary">
                {product.tag && (
                  <div className={`absolute top-3 left-3 ${product.tag === 'New' ? 'bg-accent-blue text-white' : 'bg-accent-yellow'} border border-ink px-2 py-1 z-10 rounded text-[8px] font-bold uppercase tracking-wider`}>
                    {product.tag}
                  </div>
                )}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full border border-ink opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100 z-10">
                  <Heart size={16} />
                </button>
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-ink text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="font-pixel text-[10px] text-primary mt-1">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Collection Banner */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto rounded-2xl bg-ink overflow-hidden shadow-retro relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4aaeff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
            <div className="p-8 sm:p-10 md:p-16 text-white">
              <div className="inline-block bg-accent-blue text-ink font-pixel text-[8px] px-2 py-1 mb-4 rounded border border-white">Summer Collection</div>
              <h2 className="font-black text-3xl sm:text-4xl md:text-5xl mb-6">The 8-Bit Garden</h2>
              <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-md">Flowers that never wilt. Our new botanical collection features pixel-perfect roses, sunflowers, and daisies.</p>
              <button 
                onClick={() => setCurrentPage('shop')}
                className="retro-button bg-white text-ink font-bold px-6 py-3 rounded-lg border-2 border-transparent hover:border-accent-blue shadow-[4px_4px_0px_0px_#4aaeff] flex items-center gap-2"
              >
                Explore Collection
              </button>
            </div>
            <div className="h-48 sm:h-64 md:h-full bg-gray-800 relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw5PVD23KVngF58yD1_ixVod4GRdse8ra4NCed1sMlMIVtbhjuznib6aH5jbWBerMdr_XYyj5xBzpYmCQnRbV20kjgJXQCzeY3OpwLu-8mDgfNokjGEaWIdc8rci1JxejTEpDmBtfyrpPR8skW1EIq1cECPAGpGVhPU1-rdPxPILYuf8rTzuYJNMbpMPhdafP87vx6nsgebzf4BPMvx_sMaOP7QRpAY3eaBpXEhnSyY1-mmsBwvuD35v2gn7mK20KMqZiL1vsK8Yo" 
                alt="Colorful beaded jewelry"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 max-w-2xl mx-auto text-center">
        <div className="bg-accent-pink/20 rounded-2xl border-2 border-ink p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-6 -right-6 text-accent-pink opacity-50 rotate-12">
            <Mail size={120} />
          </div>
          <h2 className="font-black text-3xl mb-4 relative z-10">Join the Guild</h2>
          <p className="text-gray-700 mb-8 relative z-10">Subscribe to get 10% off your first order, plus early access to new drops and secret sales.</p>
          <form className="flex flex-col sm:flex-row gap-3 relative z-10">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-2 border-ink px-4 py-3 focus:ring-0 focus:border-primary shadow-retro-sm"
            />
            <button className="retro-button bg-primary text-white font-bold px-6 py-3 rounded-lg border-2 border-ink shadow-retro-sm hover:bg-primary-dark">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 relative z-10">No spam, just sparkles. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-purple-100 border border-white flex items-center justify-center">
                <PixelHeartLogo size={18} />
              </div>
              <span className="font-bold text-lg">Seed Pixeled</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Handmade jewelry that blends retro gaming nostalgia with artisanal craft. Level up your style game.
            </p>
          </div>
          
          <div>
            <h4 className="font-pixel text-[10px] text-primary mb-6 uppercase tracking-widest">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white transition-colors text-left">All Products</button></li>
              <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white transition-colors text-left">Earrings</button></li>
              <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white transition-colors text-left">Bracelets</button></li>
              <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white transition-colors text-left">Necklaces</button></li>
              <li><button onClick={() => setCurrentPage('custom')} className="hover:text-white transition-colors text-left">Custom Design</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-pixel text-[10px] text-primary mb-6 uppercase tracking-widest">Help</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Shipping & Returns', 'Care Instructions', 'FAQ', 'Contact Us'].map(link => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-pixel text-[10px] text-primary mb-6 uppercase tracking-widest">Social</h4>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2023 Seed Pixeled. All rights reserved.</p>
          <div className="flex gap-4">
            <div className="w-8 h-5 bg-gray-700 rounded-sm"></div>
            <div className="w-8 h-5 bg-gray-700 rounded-sm"></div>
            <div className="w-8 h-5 bg-gray-700 rounded-sm"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
