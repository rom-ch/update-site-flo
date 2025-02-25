const address = "Florent Chauvin - Psychologue, 8 Rue du Ponceau, 95000 Cergy";

export function MapLink({ children, className }) {
  const encodedAddredd = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddredd}`;
  const mobileMapsUrl = `geo:0,0?q=${encodedAddredd}`;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleClick = (e) => {
    if (isMobile) {
      window.location.href = mobileMapsUrl;
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
