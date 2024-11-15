export interface ArticleModel {
  id: string;
  category: {
    id: string;
    name: string;
    color: string;
  };
  teacher: { id: string; name: string; avatarImageUrl: string };
  article: {
    title: string;
    slug: string;
    summary: string;
    readingTime: number;
    content: string;
    highlighImageUrl: string;
    publishedLastDate: Date;
    isPublished: true;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  };
}
