export interface ISection {
  title: String;
  body: SectionPieces[];
}

interface SectionPieces { 
  type: 'text' | 'header' | 'li' | 'img'
  content: String
}