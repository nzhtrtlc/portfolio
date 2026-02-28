export default function HeroBento() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Main Large Typography Box */}
      <div className="md:col-span-2 lg:col-span-3 bento-card flex flex-col justify-center p-8 md:p-12 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight leading-[0.9] relative z-10 select-none">
          <span className="text-white block group-hover:-translate-y-2 transition-transform duration-500 ease-out">
            SOFTWARE
          </span>
          <span className="text-white/20 block transform-gpu group-hover:translate-x-4 transition-transform duration-500 ease-out">
            ENGINEER
          </span>
        </h1>
      </div>

      {/* Stats/Highlight Box 1 */}
      <div className="bento-card p-8 rounded-4xl bg-linear-to-br from-primary/10 to-primary/5 border border-white/10 flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300">
        <span className="text-muted-foreground font-medium mb-4">
          Experience
        </span>
        <div>
          <span className="text-5xl lg:text-6xl font-heading font-bold text-white">
            8+
          </span>
          <span className="text-xl text-primary font-medium ml-2">Years</span>
        </div>
      </div>

      {/* Stats/Highlight Box 2 */}
      <div className="bento-card p-8 rounded-4xl bg-linear-to-br from-secondary/10 to-secondary/5 border border-white/10 flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300">
        <span className="text-muted-foreground font-medium mb-4">Focus</span>
        <div>
          <span className="text-3xl lg:text-4xl font-heading font-bold text-white block mb-1">
            Fullstack
          </span>
          <span className="text-xl text-secondary font-medium block">
            SaaS & AI
          </span>
        </div>
      </div>

      {/* Stats/Highlight Box 3 */}
      <div className="md:col-span-2 lg:col-span-1 bento-card p-8 rounded-4xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300">
        <span className="text-muted-foreground font-medium mb-4">Location</span>
        <div className="h-full flex flex-col justify-end">
          <span className="text-2xl font-bold text-white">Remote Ready</span>
          <span className="text-muted-foreground">Turkiye / USA</span>
        </div>
      </div>
    </section>
  );
}
