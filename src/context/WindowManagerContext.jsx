import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { soundFX } from '../utils/soundEffects';

const WindowManagerContext = createContext(null);

const INITIAL_WINDOWS = {
  finder: {
    id: 'finder',
    title: 'Finder — Projects',
    icon: 'Folder',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 10,
    position: { x: 70, y: 45 },
    size: { width: 900, height: 560 }
  },
  notes: {
    id: 'notes',
    title: 'Notes — About Harsh',
    icon: 'FileText',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 9,
    position: { x: 120, y: 70 },
    size: { width: 860, height: 540 }
  },
  safari: {
    id: 'safari',
    title: 'Safari — Portfolio Web',
    icon: 'Globe',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 8,
    position: { x: 160, y: 60 },
    size: { width: 920, height: 580 }
  },
  terminal: {
    id: 'terminal',
    title: 'Terminal — harsh@ai-studio:~',
    icon: 'Terminal',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 7,
    position: { x: 200, y: 90 },
    size: { width: 780, height: 480 }
  },
  preview: {
    id: 'preview',
    title: 'Certifications — Verified Credentials & Honors',
    icon: 'Award',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 6,
    position: { x: 120, y: 55 },
    size: { width: 920, height: 600 }
  },
  resume: {
    id: 'resume',
    title: 'Preview — Harsh Lagwal (Resume.pdf)',
    icon: 'FileText',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 7,
    position: { x: 160, y: 50 },
    size: { width: 920, height: 620 }
  },
  mail: {
    id: 'mail',
    title: 'Mail — New Message',
    icon: 'Mail',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 5,
    position: { x: 230, y: 95 },
    size: { width: 720, height: 520 }
  },
  siri: {
    id: 'siri',
    title: 'Siri — AI Intelligence',
    icon: 'Sparkles',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 20,
    position: { x: 340, y: 60 },
    size: { width: 440, height: 620 }
  },
  github: {
    id: 'github',
    title: 'GitHub — @harshlagwal (Contribution Skyline)',
    icon: 'FolderGit2',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 11,
    position: { x: 90, y: 40 },
    size: { width: 960, height: 600 }
  },
  settings: {
    id: 'settings',
    title: 'System Settings',
    icon: 'Settings',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 4,
    position: { x: 250, y: 110 },
    size: { width: 740, height: 500 }
  }
};

export const WindowManagerProvider = ({ children }) => {
  const [windows, setWindows] = useState(INITIAL_WINDOWS);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [topZIndex, setTopZIndex] = useState(25);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const [isControlCenterOpen, setIsControlCenterOpen] = useState(false);
  const [isAboutMacOpen, setIsAboutMacOpen] = useState(false);
  const [isSiriOpen, setIsSiriOpen] = useState(false);
  const [wallpaper, setWallpaper] = useState('sonoma-dark');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [brightness, setBrightness] = useState(100);

  const toggleSiri = useCallback(() => {
    setIsSiriOpen((prev) => !prev);
    soundFX.playPop();
  }, []);

  // Bring window to focus & highest zIndex
  const focusWindow = useCallback((id) => {
    setActiveWindowId(id);
    setWindows((prev) => {
      const target = prev[id];
      if (!target) return prev;
      const nextZ = topZIndex + 1;
      setTopZIndex(nextZ);
      return {
        ...prev,
        [id]: {
          ...target,
          zIndex: nextZ,
          isMinimized: false
        }
      };
    });
  }, [topZIndex]);

  // Open window
  const openWindow = useCallback((id, initialParams = {}) => {
    soundFX.playPop();
    setWindows((prev) => {
      const target = prev[id];
      if (!target) return prev;
      const nextZ = topZIndex + 1;
      setTopZIndex(nextZ);
      return {
        ...prev,
        [id]: {
          ...target,
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ,
          ...initialParams
        }
      };
    });
    setActiveWindowId(id);
  }, [topZIndex]);

  // Close window
  const closeWindow = useCallback((id) => {
    soundFX.playTrash();
    setWindows((prev) => {
      const target = prev[id];
      if (!target) return prev;
      return {
        ...prev,
        [id]: {
          ...target,
          isOpen: false,
          isMinimized: false,
          isMaximized: false
        }
      };
    });
    // Set active window to topmost remaining open window
    setTimeout(() => {
      setWindows((current) => {
        const remaining = Object.values(current)
          .filter((w) => w.isOpen && !w.isMinimized && w.id !== id)
          .sort((a, b) => b.zIndex - a.zIndex);
        setActiveWindowId(remaining.length > 0 ? remaining[0].id : null);
        return current;
      });
    }, 50);
  }, []);

  // Minimize window to dock
  const minimizeWindow = useCallback((id) => {
    soundFX.playMinimize();
    setWindows((prev) => {
      const target = prev[id];
      if (!target) return prev;
      return {
        ...prev,
        [id]: {
          ...target,
          isMinimized: true
        }
      };
    });
  }, []);

  // Toggle maximize / fullscreen
  const maximizeWindow = useCallback((id) => {
    soundFX.playClick();
    setWindows((prev) => {
      const target = prev[id];
      if (!target) return prev;
      return {
        ...prev,
        [id]: {
          ...target,
          isMaximized: !target.isMaximized
        }
      };
    });
  }, []);

  // Toggle window from Dock
  const toggleWindowFromDock = useCallback((id) => {
    if (id === 'siri') {
      toggleSiri();
      return;
    }
    const win = windows[id];
    if (!win) return;
    if (!win.isOpen) {
      openWindow(id);
    } else if (win.isMinimized) {
      focusWindow(id);
    } else if (activeWindowId === id) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  }, [windows, activeWindowId, openWindow, focusWindow, minimizeWindow, toggleSiri]);

  // Keyboard shortcut listener: Cmd/Ctrl + K => Spotlight, Esc => Close Spotlight/ControlCenter/Siri
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSpotlightOpen((prev) => !prev);
        soundFX.playClick();
      } else if (e.key === 'Escape') {
        setIsSpotlightOpen(false);
        setIsControlCenterOpen(false);
        setIsAboutMacOpen(false);
        setIsSiriOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleSound = useCallback(() => {
    const state = soundFX.toggleSound();
    setSoundEnabled(state);
    return state;
  }, []);

  return (
    <WindowManagerContext.Provider
      value={{
        windows,
        activeWindowId,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        toggleWindowFromDock,
        isSpotlightOpen,
        setIsSpotlightOpen,
        isControlCenterOpen,
        setIsControlCenterOpen,
        isAboutMacOpen,
        setIsAboutMacOpen,
        isSiriOpen,
        setIsSiriOpen,
        toggleSiri,
        wallpaper,
        setWallpaper,
        soundEnabled,
        toggleSound,
        brightness,
        setBrightness
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used within a WindowManagerProvider');
  }
  return context;
};
