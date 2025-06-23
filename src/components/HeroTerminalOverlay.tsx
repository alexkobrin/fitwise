import React from 'react'

const HeroTerminalOverlay = () => {
  return (
    <div className=" pt-4        max-w-lg">
      <div className="relative bg-cyber-terminal-bg backdrop-blur-sm border border-border rounded-lg p-3 overflow-hidden font-mono">
      {/* Status bar */}
      <div className="flex items-center justify-between mb-2 border-b border-border pb-1">
        <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <p className="text-xs text-primary">SYSTEM ONLINE</p>
        </div>
        <p className="text-xs text-muted-foreground">SESSION: {new Date().toISOString().slice(0, 10)}</p>
      </div>

      <p className="text-sm text-foreground mb-2 tracking-tight">
        <span className="text-primary">/</span> FITNESS SUMMARY GENERATED
      </p>

      <div className="space-y-1.5 text-xs text-muted-foreground">
        <div className="flex items-center">
        <div className="text-primary mr-2">01</div>
        <span>Completed: 25 min HIIT (full body)</span>
        </div>
        <div className="flex items-center">
        <div className="text-primary mr-2">02</div>
        <span>Logged: 15 min cycling (endurance)</span>
        </div>
        <div className="flex items-center">
        <div className="text-primary mr-2">03</div>
        <span>Cooldown: 5 min stretching</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HeroTerminalOverlay