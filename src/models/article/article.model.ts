import { CategoryModel } from '../category/category.model';
import { TeacherModel } from '../teacher/teacher.model';

export interface ArticleModel {
  id: string;
  category: CategoryModel;
  teacher: TeacherModel;
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
