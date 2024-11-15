'use client';

import { categoriesMock } from '@/mocks';
import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import rehypeSanitize from 'rehype-sanitize';
import { z } from 'zod';

import { ArticleModel } from '@/models';

import {
  ButtonComponent,
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
} from '@/components';

import { articleSchema } from './article.schema';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

interface ArticleFormComponentProps {
  articleModel?: ArticleModel;
}

export function ArticleFormComponent({
  articleModel,
}: ArticleFormComponentProps): JSX.Element {
  const [content, setContent] = useState<string>('');

  const articlesForm = useForm<z.infer<typeof articleSchema>>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      teacherId: articleModel?.teacher?.id || '',
      categoryId: articleModel?.category?.id || '',
      title: articleModel?.article?.title || '',
      summary: articleModel?.article?.summary || '',
      readingTime: articleModel?.article?.readingTime || 0,
      content: articleModel?.article?.content || '',
      highlightImageUrl: articleModel?.article?.highlighImageUrl || '',
      isPublished: articleModel?.article.isPublished ?? true,
    },
  });

  // TODO: change to send to api
  function handleSubmit(values: z.infer<typeof articleSchema>): void {
    if (articleModel) {
      console.log('Editar', values);
    } else {
      console.log('Adicionar', values);
    }
  }

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
      >
        <FormFieldComponent
          control={articlesForm.control}
          name="teacherId"
          render={({ field }) => (
            <FormItemComponent>
              <FormLabelComponent>Id do docente</FormLabelComponent>
              <FormControlComponent>
                <InputComponent
                  placeholder="Digite o id do docente"
                  maxLength={50}
                  {...field}
                />
              </FormControlComponent>
              <FormMessageComponent />
            </FormItemComponent>
          )}
        />
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
                  <SelectTriggerComponent>
                    <SelectValueComponent placeholder="Selecione a categoria" />
                  </SelectTriggerComponent>
                </FormControlComponent>
                <SelectContentComponent>
                  {categoriesMock
                    .sort((a, b) => a.name.localeCompare(b.name))
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
            <FormItemComponent>
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
