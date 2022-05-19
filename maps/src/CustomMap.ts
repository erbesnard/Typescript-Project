/// <reference types="@types/google.maps" />

export interface Markable {
  markerContent(): string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(item: Markable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: item.location.lat,
        lng: item.location.lng
      }
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: item.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
