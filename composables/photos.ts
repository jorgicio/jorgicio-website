import metadata from './metadata_photos.json';
interface Photo {
  photoPath: string,
  thumbnail: string,
  title: string,
  description: string
}

export function photoGallery (): Photo[] {
  return metadata;
}