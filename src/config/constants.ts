// Google Maps Configuration
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

export const GOOGLE_MAPS_LIBRARIES: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ["places"];

export const DEFAULT_MAP_CENTER = {
  lat: 52.237049,
  lng: 21.017532
};

export const DEFAULT_MAP_ZOOM = 13;

export const MAP_STYLES = {
  default: [
    {
      featureType: "all",
      elementType: "geometry.fill",
      stylers: [{ weight: "2.00" }]
    },
    {
      featureType: "all",
      elementType: "geometry.stroke",
      stylers: [{ color: "#9c9c9c" }]
    },
    {
      featureType: "all",
      elementType: "labels.text",
      stylers: [{ visibility: "on" }]
    }
  ]
};