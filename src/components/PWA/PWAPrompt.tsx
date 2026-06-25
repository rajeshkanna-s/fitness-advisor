import { useState, useEffect } from 'react';
import { BsDownload, BsXLg, BsArrowRepeat, BsWifiOff } from 'react-icons/bs';
import { useRegisterSW } from 'virtual:pwa-register/react';
import './PWAPrompt.css';

export default function PWAPrompt() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
      setShowInstall(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  useEffect(() => {
    const online = () => setIsOffline(false);
    const offline = () => setIsOffline(true);
    window.addEventListener('online', online);
    window.addEventListener('offline', offline);
    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    };
  }, []);

  async function handleInstall() {
    if (!installPrompt) return;
    await installPrompt.prompt();
    setInstallPrompt(null);
    setShowInstall(false);
  }

  return (
    <>
      {isOffline && (
        <div className="pwa-offline-bar">
          <BsWifiOff size={14} />
          <span>You're offline — cached content is available</span>
        </div>
      )}

      {showInstall && (
        <div className="pwa-banner pwa-install">
          <div className="pwa-banner-content">
            <BsDownload size={18} />
            <span>Install Fitness Advisor for quick access</span>
          </div>
          <div className="pwa-banner-actions">
            <button className="pwa-btn-primary" onClick={handleInstall}>Install</button>
            <button className="pwa-btn-dismiss" onClick={() => setShowInstall(false)}><BsXLg size={14} /></button>
          </div>
        </div>
      )}

      {needRefresh && (
        <div className="pwa-banner pwa-update">
          <div className="pwa-banner-content">
            <BsArrowRepeat size={18} />
            <span>New version available</span>
          </div>
          <div className="pwa-banner-actions">
            <button className="pwa-btn-primary" onClick={() => updateServiceWorker(true)}>Update</button>
            <button className="pwa-btn-dismiss" onClick={() => setNeedRefresh(false)}><BsXLg size={14} /></button>
          </div>
        </div>
      )}
    </>
  );
}
