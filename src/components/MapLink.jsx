// const address = "Florent Chauvin - Psychologue, 8 Rue du Ponceau, 95000 Cergy";
const placeId = "ChIJpx-VQnP15kcRwRToKpSXUv4";
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=place_id:${placeId}`;
const androidMapsUrl = `intent://maps.google.com/maps?query=place_id:${placeId}#Intent;scheme=https;package=com.google.android.apps.maps;end;`;

const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

export function MapLink({ children, className }) {
  const handleClick = (e) => {
    if (isAndroid) {
      window.location.href = androidMapsUrl;
    } else if (isIOS) {
      window.location.href = googleMapsUrl;
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
      {navigator.userAgent}
      {children}
    </a>
  );
}
