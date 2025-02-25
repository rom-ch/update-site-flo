const address = encodeURIComponent(
  "Florent Chauvin - Psychologue, 8 Rue du Ponceau, 95000 Cergy, France",
);
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
const androidMapsUrl = `intent://maps.google.com/maps?query=${address}#Intent;scheme=https;package=com.google.android.apps.maps;end;`;
// const placeId = "ChIJpx-VQnP15kcRwRToKpSXUv4";
// const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=place_id:${address}`;
// const androidMapsUrl = `intent://maps.google.com/maps?query=place_id:${address}#Intent;scheme=https;package=com.google.android.apps.maps;end;`;

const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
console.log(googleMapsUrl);

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
      {children}
    </a>
  );
}
