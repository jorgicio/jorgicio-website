interface Photo {
  photoPath: string,
  thumbnail: string,
  title: string,
  description: string
}

const PHOTOS_PATH = './assets/img/portfolio'
const THUMBNAILS_PATH = `${PHOTOS_PATH}/thumbnails`

export function photoGallery (): Photo[] {
  return [
    {
      photoPath: `${PHOTOS_PATH}/01.jpg`,
      thumbnail: `${THUMBNAILS_PATH}/01-thumb.jpg`,
      title: 'Title 01',
      description: 'Description 01'
    },
    {
      photoPath: `${PHOTOS_PATH}/02.jpg`,
      thumbnail: `${THUMBNAILS_PATH}/02-thumb.jpg`,
      title: 'Title 02',
      description: 'Description 02'
    },
    {
      photoPath: `${PHOTOS_PATH}/03.jpg`,
      thumbnail: `${THUMBNAILS_PATH}/03-thumb.jpg`,
      title: 'Title 03',
      description: 'Description 03'
    },
    {
      photoPath: `${PHOTOS_PATH}/04.jpg`,
      thumbnail: `${THUMBNAILS_PATH}/04-thumb.jpg`,
      title: 'Title 04',
      description: 'Description 04'
    },
    {
      photoPath: `${PHOTOS_PATH}/05.jpg`,
      thumbnail: `${THUMBNAILS_PATH}/05-thumb.jpg`,
      title: 'Title 05',
      description: 'Description 05'
    },
    {
      photoPath: `${PHOTOS_PATH}/06.jpg`,
      thumbnail: `${THUMBNAILS_PATH}/06-thumb.jpg`,
      title: 'Title 06',
      description: 'Description 06'
    },
    {
      photoPath: `${PHOTOS_PATH}/07.jpg`,
      thumbnail: `${THUMBNAILS_PATH}/07-thumb.jpg`,
      title: 'Title 07',
      description: 'Description 07'
    },
    {
      photoPath: `${PHOTOS_PATH}/08.jpg`,
      thumbnail: `${THUMBNAILS_PATH}/08-thumb.jpg`,
      title: 'Title 08',
      description: 'Description 08'
    }
  ]
}