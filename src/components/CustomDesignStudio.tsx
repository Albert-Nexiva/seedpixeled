import { useState } from 'react';
import { 
  Grid3X3, 
  Pencil, 
  Eraser, 
  PaintBucket, 
  RotateCcw, 
  RotateCw, 
  RefreshCw,
  ShoppingCart,
  Check,
  ChevronLeft,
  ChevronRight,
  Box
} from 'lucide-react';
import { motion } from 'motion/react';

const GRID_SIZE = 12;
const COLORS = [
  '#00FFFF', // Cyan
  '#FF00FF', // Magenta
  '#32CD32', // Lime Green
  '#FFFF00', // Yellow
  '#FF4500', // Orange Red
  '#ee5f2b', // Primary Retro
  '#1c110d', // Black
  'transparent' // Eraser/White
];

export default function CustomDesignStudio({ onBack }: { onBack: () => void }) {
  const [grid, setGrid] = useState<string[]>(Array(GRID_SIZE * GRID_SIZE).fill('transparent'));
  const [selectedColor, setSelectedColor] = useState(COLORS[5]);
  const [tool, setTool] = useState<'pencil' | 'eraser' | 'bucket'>('pencil');

  const handleCellClick = (index: number) => {
    const newGrid = [...grid];
    if (tool === 'pencil') {
      newGrid[index] = selectedColor;
    } else if (tool === 'eraser') {
      newGrid[index] = 'transparent';
    } else if (tool === 'bucket') {
      const targetColor = grid[index];
      const fill = (idx: number) => {
        if (idx < 0 || idx >= grid.length || newGrid[idx] !== targetColor || newGrid[idx] === selectedColor) return;
        newGrid[idx] = selectedColor;
        const row = Math.floor(idx / GRID_SIZE);
        const col = idx % GRID_SIZE;
        if (col > 0) fill(idx - 1);
        if (col < GRID_SIZE - 1) fill(idx + 1);
        fill(idx - GRID_SIZE);
        fill(idx + GRID_SIZE);
      };
      fill(index);
    }
    setGrid(newGrid);
  };

  const beadCount = grid.filter(c => c !== 'transparent').length;
  const totalPrice = (beadCount * 0.5 + 15).toFixed(2);

  return (
    <div className="bg-bg-light min-h-screen font-sans text-ink pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-bold uppercase text-sm mb-8 hover:text-primary transition-colors"
        >
          <ChevronLeft size={20} /> Back to Home
        </button>
        
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-ink mb-2 leading-relaxed">
            CREATE YOUR OWN <span className="text-primary">PIXEL</span>
          </h2>
          <p className="text-gray-600 font-medium">Design your unique retro earring pattern. We build it by hand.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Editor Column */}
          <div className="flex-1 w-full space-y-4">
            <div className="flex items-center justify-between bg-white p-3 border-2 border-ink shadow-retro-sm">
              <div className="flex gap-2">
                <button 
                  onClick={() => setTool('pencil')}
                  className={`p-2 rounded border ${tool === 'pencil' ? 'bg-primary text-white border-ink' : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  <Pencil size={18} />
                </button>
                <button 
                  onClick={() => setTool('eraser')}
                  className={`p-2 rounded border ${tool === 'eraser' ? 'bg-primary text-white border-ink' : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  <Eraser size={18} />
                </button>
                <button 
                  onClick={() => setTool('bucket')}
                  className={`p-2 rounded border ${tool === 'bucket' ? 'bg-primary text-white border-ink' : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  <PaintBucket size={18} />
                </button>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-gray-500">
                <Grid3X3 size={16} />
                {GRID_SIZE}x{GRID_SIZE} Grid
              </div>
            </div>

            <div className="aspect-square w-full max-w-[500px] mx-auto bg-white border-2 border-ink shadow-retro p-4 sm:p-8 grid grid-cols-12 gap-px relative">
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              {grid.map((color, i) => (
                <div 
                  key={i}
                  onClick={() => handleCellClick(i)}
                  className="aspect-square border border-gray-100 cursor-crosshair transition-colors"
                  style={{ backgroundColor: color === 'transparent' ? 'white' : color }}
                />
              ))}
            </div>
            <p className="text-[10px] text-center text-gray-500 font-medium font-pixel uppercase tracking-wider">
              Click to draw • Use tools to edit
            </p>
          </div>

          {/* Preview Column */}
          <div className="flex-1 w-full space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">3D Preview</h3>
              <div className="flex gap-2">
                <button className="bg-white border border-gray-200 rounded px-3 py-1 text-xs font-bold uppercase">Front</button>
                <button className="bg-white border border-gray-200 rounded px-3 py-1 text-xs font-bold uppercase text-gray-400">Side</button>
              </div>
            </div>
            
            <div className="aspect-square w-full max-w-[500px] mx-auto bg-gray-100 rounded-2xl border-2 border-ink shadow-retro relative overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQX3EPKdH55FwnRRuFfXQryRZXZy2wXjTXhjAa5JltoTGMEp_ql1Y1JefomBY2Fj6NhoFNMHQYQb9-UnSURbi5tjb6LgyTbGSLaYdDk69JbUWXERlFoTjs8N1mlnluNvWC80MJooPKNaNx-G3oOatdggB_dXbETPDJ7GQQNwgWrtrOunSbsIF5YLIwh_VupnyPFsrgd7arWLXyZQOVaFKwu98mOr3j8Oqo3k6xPxYRxE4dmtY-wYlKNEKvwj6lGqQ3HWUt2wOlI1I" 
                alt="3D Preview Texture"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 aspect-[1/2] bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg shadow-2xl flex flex-wrap p-2">
                  {grid.map((color, i) => (
                    <div 
                      key={i}
                      className="w-[8.33%] aspect-square rounded-full shadow-sm"
                      style={{ backgroundColor: color === 'transparent' ? 'rgba(255,255,255,0.1)' : color }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-red-500 text-white text-[8px] font-bold px-2 py-1 rounded shadow animate-pulse">
                LIVE RENDER
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-ink">
                <RotateCcw size={18} className="cursor-pointer hover:text-primary" />
                <Box size={18} className="cursor-pointer hover:text-primary" />
                <RotateCw size={18} className="cursor-pointer hover:text-primary" />
              </div>
            </div>
          </div>

          {/* Controls Column */}
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-white p-6 border-2 border-ink shadow-retro">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
                <h3 className="font-pixel text-xs uppercase">Palette</h3>
                <span className="text-[10px] text-gray-400 uppercase font-bold">Select Color</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColor(color);
                      if (color === 'transparent') setTool('eraser');
                      else setTool('pencil');
                    }}
                    className={`aspect-square rounded border-2 transition-all relative ${selectedColor === color ? 'border-ink scale-110' : 'border-gray-200 hover:scale-105'}`}
                    style={{ 
                      backgroundColor: color === 'transparent' ? 'white' : color,
                      backgroundImage: color === 'transparent' ? 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)' : 'none',
                      backgroundSize: '8px 8px',
                      backgroundPosition: '0 0, 0 4px, 4px 4px, 4px 0'
                    }}
                  >
                    {selectedColor === color && (
                      <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow border border-ink">
                        <Check size={8} className="text-ink font-bold" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-ink text-white p-6 rounded shadow-lg border border-gray-700">
              <div className="flex justify-between items-end mb-2">
                <span className="text-gray-400 text-sm font-medium">Bead Count</span>
                <span className="font-bold text-xl">{beadCount}</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mb-6 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((beadCount / (GRID_SIZE * GRID_SIZE)) * 100, 100)}%` }}
                  className="bg-primary h-full"
                />
              </div>
              <div className="flex justify-between items-center border-t border-gray-600 pt-4">
                <span className="text-gray-300 font-medium uppercase text-xs">Total Price</span>
                <span className="text-2xl font-bold text-primary font-pixel">₹{totalPrice}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="retro-button w-full py-4 bg-primary text-white font-bold text-lg uppercase tracking-wider border-2 border-ink shadow-retro flex items-center justify-center gap-2 group">
                <ShoppingCart size={20} className="group-hover:animate-bounce" />
                Add to Cart
              </button>
              <button 
                onClick={() => setGrid(Array(GRID_SIZE * GRID_SIZE).fill('transparent'))}
                className="w-full py-3 bg-white text-ink font-bold text-sm uppercase tracking-wide border-2 border-gray-200 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} />
                Reset Canvas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
