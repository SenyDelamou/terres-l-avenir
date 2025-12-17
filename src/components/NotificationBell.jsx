import { useEffect, useMemo, useRef, useState } from 'react';
import { useApp } from '../context/AppContext.jsx';

function NotificationBell() {
  const { notifications, markNotificationRead, t, trackEvent } = useApp();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const unreadCount = useMemo(() => notifications.filter(({ read }) => !read).length, [notifications]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const toggleOpen = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
    if (nextOpen) {
      trackEvent('notifications_opened');
    }
  };

  const handleMarkRead = (id) => {
    markNotificationRead(id);
    trackEvent('notification_mark_read', { id });
  };

  return (
    <div className="notification-bell" ref={panelRef}>
      <button type="button" className="bell-button" onClick={toggleOpen} aria-label={t('notifications.title')}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 3C9.23858 3 7 5.23858 7 8V10.382C7 11.148 6.70711 11.8787 6.17157 12.4142L5.29289 13.2929C4.52939 14.0563 5.06815 15.3333 6.12132 15.3333H17.8787C18.9319 15.3333 19.4706 14.0563 18.7071 13.2929L17.8284 12.4142C17.2929 11.8787 17 11.148 17 10.382V8C17 5.23858 14.7614 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        {unreadCount > 0 && <span className="badge-count">{unreadCount}</span>}
      </button>
      {open && (
        <div className="notification-panel">
          <div className="panel-header">
            <h4>{t('notifications.title')}</h4>
            {unreadCount > 0 && <span className="badge small">{unreadCount}</span>}
          </div>
          <div className="panel-body">
            {notifications.length === 0 && <p className="empty-state">{t('notifications.empty')}</p>}
            {notifications.map(({ id, title, description, timestamp, read }) => (
              <article key={id} className={`notification-item ${read ? 'read' : ''}`}>
                <header>
                  <h5>{title}</h5>
                  <time>{timestamp}</time>
                </header>
                <p>{description}</p>
                {!read && (
                  <button type="button" className="btn-link" onClick={() => handleMarkRead(id)}>
                    {t('notifications.markRead')}
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationBell;
