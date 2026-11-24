"use client";

import { useEffect, useRef } from "react";

const lastPhotoStorageKey = "home-background-last-photo";

export default function HomePhotoBackground({
  photos,
}: {
  photos: string[];
}) {
  const firstLayerRef = useRef<HTMLDivElement>(null);
  const secondLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstLayer = firstLayerRef.current;
    if (photos.length === 0 || !firstLayer) {
      return;
    }

    const previousPhoto = sessionStorage.getItem(lastPhotoStorageKey);
    const candidates =
      photos.length > 1
        ? photos.filter((candidate) => candidate !== previousPhoto)
        : photos;
    const nextPhoto =
      candidates[Math.floor(Math.random() * candidates.length)];

    sessionStorage.setItem(lastPhotoStorageKey, nextPhoto);
    firstLayer.style.backgroundImage = `url("${nextPhoto}")`;
    firstLayer.style.opacity = "1";

    if (photos.length < 2) {
      return;
    }

    const secondLayer = secondLayerRef.current;
    if (!secondLayer) {
      return;
    }

    let activeLayer = firstLayer;
    let currentPhoto = nextPhoto;
    let timeout: ReturnType<typeof setTimeout>;
    let isActive = true;

    secondLayer.style.opacity = "0";

    const scheduleNextPhoto = () => {
      timeout = setTimeout(() => {
        const nextCandidates = photos.filter(
          (candidate) => candidate !== currentPhoto,
        );
        const photo =
          nextCandidates[Math.floor(Math.random() * nextCandidates.length)];
        const image = new Image();

        image.onload = () => {
          if (!isActive) {
            return;
          }

          const nextLayer =
            activeLayer === firstLayer ? secondLayer : firstLayer;
          nextLayer.style.backgroundImage = `url("${photo}")`;
          requestAnimationFrame(() => {
            if (!isActive) {
              return;
            }

            nextLayer.style.opacity = "1";
            activeLayer.style.opacity = "0";
            activeLayer = nextLayer;
            currentPhoto = photo;
            sessionStorage.setItem(lastPhotoStorageKey, photo);
          });
        };
        image.onerror = () => {
          console.error(`Failed to load home background photo: ${photo}`);
        };
        image.src = photo;

        scheduleNextPhoto();
      }, 5000 + Math.random() * 2000);
    };

    scheduleNextPhoto();

    return () => {
      isActive = false;
      clearTimeout(timeout);
    };
  }, [photos]);

  return (
    <div aria-hidden="true" className="absolute inset-0 z-0">
      <div
        ref={firstLayerRef}
        className="home-photo-layer absolute inset-0 bg-cover bg-center"
        style={{ opacity: 0 }}
      />
      <div
        ref={secondLayerRef}
        className="home-photo-layer absolute inset-0 bg-cover bg-center"
        style={{ opacity: 0 }}
      />
      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/15" />
    </div>
  );
}
