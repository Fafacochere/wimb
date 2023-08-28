"use client";
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
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

  return <div className="w-full h-full absolute z-0">
    <GoogleMap
      zoom={14}
      center={mapCenter}
      options={{
        disableDefaultUI: true,
        heading: 0,
      }}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      onLoad={() => console.log('Map Component Loaded...')}
    >
      <Marker position={{ lat: 44.8468584, lng: -0.5753724 }} />
      <Marker position={{ lat: 44.8405784, lng: -0.5814724 }} />
      <Marker position={{ lat: 44.8523784, lng: -0.5723724 }} />
      <Marker position={{ lat: 44.8434784, lng: -0.5704724 }} />
      <Marker position={{ lat: 44.8309784, lng: -0.5722724 }} />
      <Marker position={{ lat: 44.8497784, lng: -0.5605724 }} />
      <Marker position={{ lat: 44.8397784, lng: -0.5730724 }} />
    </GoogleMap>
  </div>;
}