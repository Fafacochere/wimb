"use client";
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import { useMemo } from "react";

export default function MainMap() {
  
  const mapCenter = useMemo(
    () => ({ lat: 44.8397584, lng: -0.5730724 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),[]
  );
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: ['places'],
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return <div className="w-full h-full">
    <GoogleMap
      zoom={14}
      center={mapCenter}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      onLoad={() => console.log('Map Component Loaded...')}
    />
  </div>;
}