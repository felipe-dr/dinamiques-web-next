'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  ButtonComponent,
  DialogComponent,
  DialogContentComponent,
  DialogFooterComponent,
  DialogHeaderComponent,
  DialogTitleComponent,
  DialogTriggerComponent,
  FormComponent,
  FormControlComponent,
  FormFieldComponent,
  FormItemComponent,
  FormLabelComponent,
  FormMessageComponent,
  InputComponent,
  TitleComponent,
} from '@/components';

import { signinDialogSchema } from './signin-dialog.schema';

export function SigninDialogComponent(): JSX.Element {
  const signinDialogForm = useForm<z.infer<typeof signinDialogSchema>>({
    resolver: zodResolver(signinDialogSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // TODO: change to send to api
  function handleSubmit(values: z.infer<typeof signinDialogSchema>): void {
    console.log(values);
  }

  function handleClose(): void {
    signinDialogForm.reset({
      email: '',
      password: '',
    });
  }

  return (
    <DialogComponent onOpenChange={handleClose}>
      <DialogTriggerComponent asChild>
        <ButtonComponent className="w-full">Entrar</ButtonComponent>
      </DialogTriggerComponent>
      <DialogContentComponent className="sm:max-w-screen-sm">
        <DialogHeaderComponent>
          <DialogTitleComponent asChild>
            <TitleComponent tag="h3" hasDotDecorator={false}>
              Autenticação
            </TitleComponent>
          </DialogTitleComponent>
        </DialogHeaderComponent>
        <FormComponent {...signinDialogForm}>
          <form
            onSubmit={signinDialogForm.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormFieldComponent
              control={signinDialogForm.control}
              name="email"
              render={({ field }) => (
                <FormItemComponent>
                  <FormLabelComponent>E-mail</FormLabelComponent>
                  <FormControlComponent>
                    <InputComponent
                      placeholder="Digite o seu e-mail"
                      {...field}
                    />
                  </FormControlComponent>
                  <FormMessageComponent />
                </FormItemComponent>
              )}
            />
            <FormFieldComponent
              control={signinDialogForm.control}
              name="password"
              render={({ field }) => (
                <FormItemComponent>
                  <FormLabelComponent>Senha</FormLabelComponent>
                  <FormControlComponent>
                    <InputComponent
                      type="password"
                      placeholder="Digite a sua senha"
                      {...field}
                    />
                  </FormControlComponent>
                  <FormMessageComponent />
                </FormItemComponent>
              )}
            />
            <DialogFooterComponent>
              <ButtonComponent type="submit">Entrar</ButtonComponent>
            </DialogFooterComponent>
          </form>
        </FormComponent>
      </DialogContentComponent>
    </DialogComponent>
  );
}
