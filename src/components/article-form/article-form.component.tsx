'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import rehypeSanitize from 'rehype-sanitize';
import { z } from 'zod';

import { toast } from '@/hooks';

import { ArticleModel, CategoryModel } from '@/models';

import {
  ButtonComponent,
  createArticleAction,
  FormComponent,
  FormControlComponent,
  FormFieldComponent,
  FormItemComponent,
  FormLabelComponent,
  FormMessageComponent,
  InputComponent,
  SelectComponent,
  SelectContentComponent,
  SelectItemComponent,
  SelectTriggerComponent,
  SelectValueComponent,
  SwitchComponent,
  TextareaComponent,
  updateArticleAction,
} from '@/components';

import { articleSchema } from './article.schema';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

interface ArticleFormComponentProps {
  categories?: CategoryModel[];
  articleModel?: ArticleModel;
}

export function ArticleFormComponent({
  categories,
  articleModel,
}: ArticleFormComponentProps): JSX.Element {
  const router = useRouter();
  const [content, setContent] = useState<string>('');

  const articlesForm = useForm<z.infer<typeof articleSchema>>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      id: articleModel?.id || '',
      categoryId: articleModel?.category?.id || '',
      title: articleModel?.article?.title || '',
      summary: articleModel?.article?.summary || '',
      readingTime: articleModel?.article?.readingTime || 0,
      content: articleModel?.article?.content || '',
      highlightImageUrl: articleModel?.article?.highlightImageUrl || '',
      isPublished: articleModel?.article?.isPublished ?? true,
    },
  });

  const handleSubmit = async (
    values: z.infer<typeof articleSchema>,
  ): Promise<void> => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    try {
      const response = articleModel
        ? await updateArticleAction(formData)
        : await createArticleAction(formData);

      if (response.success) {
        toast({
          title: 'Artigos',
          description: response.message,
          variant: 'success',
        });

        router.push('/admin/articles');
      } else {
        throw new Error(response.message || 'Erro inesperado.');
      }
    } catch (error: unknown) {
      toast({
        title: 'Artigos',
        description: String(error) ?? 'Não foi possível criar o artigo.',
        variant: 'destructive',
      });
    }
  };

  const { setValue } = articlesForm;

  useEffect(() => {
    const articleModelContent = articleModel?.article?.content;

    if (articleModelContent) {
      setContent(articleModelContent);
      setValue('content', articleModelContent);
    }
  }, [articleModel, setValue]);

  useEffect(() => {
    setValue('content', content);
  }, [content, setValue]);

  return (
    <FormComponent {...articlesForm}>
      <form
        className="grid space-y-8"
        onSubmit={articlesForm.handleSubmit(handleSubmit)}
        action={handleSubmit}
      >
        {articlesForm.getValues('id') && (
          <FormFieldComponent
            control={articlesForm.control}
            name="id"
            render={({ field }) => (
              <FormItemComponent hidden>
                <FormLabelComponent>Id</FormLabelComponent>
                <FormControlComponent>
                  <InputComponent placeholder="Id" {...field} />
                </FormControlComponent>
                <FormMessageComponent />
              </FormItemComponent>
            )}
          />
        )}
        <FormFieldComponent
          control={articlesForm.control}
          name="categoryId"
          render={({ field }) => (
            <FormItemComponent>
              <FormLabelComponent>Categoria</FormLabelComponent>
              <SelectComponent
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControlComponent>
                  <SelectTriggerComponent
                    className={field.value === '' ? 'text-base-9' : ''}
                  >
                    <SelectValueComponent placeholder="Selecione a categoria" />
                  </SelectTriggerComponent>
                </FormControlComponent>
                <SelectContentComponent>
                  {categories
                    ?.sort((a, b) => a.name.localeCompare(b.name))
                    .map((category) => (
                      <SelectItemComponent
                        key={category.id}
                        value={category.id}
                      >
                        {category.name}
                      </SelectItemComponent>
                    ))}
                </SelectContentComponent>
              </SelectComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <FormFieldComponent
          control={articlesForm.control}
          name="title"
          render={({ field }) => (
            <FormItemComponent>
              <FormLabelComponent>Título</FormLabelComponent>
              <FormControlComponent>
                <InputComponent
                  placeholder="Digite o título"
                  maxLength={150}
                  {...field}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <FormFieldComponent
          control={articlesForm.control}
          name="summary"
          render={({ field }) => (
            <FormItemComponent>
              <FormLabelComponent>Resumo</FormLabelComponent>
              <FormControlComponent>
                <TextareaComponent
                  placeholder="Digite o resumo"
                  maxLength={200}
                  {...field}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <FormFieldComponent
          control={articlesForm.control}
          name="readingTime"
          render={({ field }) => (
            <FormItemComponent>
              <FormLabelComponent>Tempo de leitura</FormLabelComponent>
              <FormControlComponent>
                <InputComponent
                  type="number"
                  placeholder="Digite o tempo de leitura"
                  {...field}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <FormFieldComponent
          control={articlesForm.control}
          name="content"
          render={() => (
            <FormItemComponent className="min-h-[14.688rem]">
              <FormLabelComponent>Conteúdo</FormLabelComponent>
              <FormControlComponent>
                <MDEditor
                  value={content}
                  onChange={(newContent) => {
                    setContent(newContent || '');
                  }}
                  previewOptions={{
                    rehypePlugins: [[rehypeSanitize]],
                  }}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <FormFieldComponent
          control={articlesForm.control}
          name="highlightImageUrl"
          render={({ field }) => (
            <FormItemComponent>
              <FormLabelComponent>Url da imagem de destaque</FormLabelComponent>
              <FormControlComponent>
                <InputComponent
                  placeholder="Digite a url da imagem de destaque"
                  {...field}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <FormFieldComponent
          control={articlesForm.control}
          name="isPublished"
          render={({ field }) => (
            <FormItemComponent className="flex items-center gap-2">
              <FormLabelComponent>Publicado</FormLabelComponent>
              <FormControlComponent>
                <SwitchComponent
                  className="!my-0"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={!articleModel}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
        <ButtonComponent
          className="w-full sm:w-max sm:justify-self-end"
          color="primary"
          type="submit"
        >
          {articleModel ? 'Salvar' : 'Adicionar'}
        </ButtonComponent>
      </form>
    </FormComponent>
  );
}
