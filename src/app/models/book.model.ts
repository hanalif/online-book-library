export interface Book {
  id: string,
  title: string,
  imagePath: string,
  description: string,
  authors: string[],
  pageCount: number,
  infoLink: string,
  publishedDate: string
}
