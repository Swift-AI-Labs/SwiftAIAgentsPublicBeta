const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 opacity-30 animated-background" 
          style={{
            backgroundImage: `linear-gradient(to right, #1f2937 1px, transparent 1px),
              linear-gradient(to bottom, #1f2937 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;