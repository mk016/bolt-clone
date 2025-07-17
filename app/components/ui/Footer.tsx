import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-between space-x-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <span>Created by</span>
            <span className="font-medium text-foreground">mk016</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>© 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 