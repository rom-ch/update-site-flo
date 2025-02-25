const address = encodeURIComponent(
  "Florent Chauvin - Psychologue, 8 Rue du Ponceau, 95000 Cergy, France",
);

// Universal Google Maps URL (Fallback for desktops)
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;

// Apple Maps URL for iOS
const appleMapsUrl = `https://maps.apple.com/?q=${address}`;

// Google Maps `geo:` URI for Android
const androidMapsUrl = `geo:0,0?q=${address}`;

// Detect device type
const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

export function MapLink({ children, className }) {
  const handleClick = (e) => {
    if (isAndroid) {
      window.location.href = androidMapsUrl;
      e.preventDefault();
    } else if (isIOS) {
      window.location.href = appleMapsUrl;
      e.preventDefault();
    }
  };

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
