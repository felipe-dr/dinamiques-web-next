import { ComponentProps } from 'react';

import {
  AlertDialogActionComponent,
  AlertDialogCancelComponent,
  AlertDialogContentComponent,
  AlertDialogDescriptionComponent,
  AlertDialogFooterComponent,
  AlertDialogHeaderComponent,
  AlertDialogTitleComponent,
} from '@/components';

interface AlertDialogBoxComponentProps extends ComponentProps<'div'> {
  title: string;
  description: string;
  handleToContinue: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function AlertDialogBoxComponent({
  title,
  description,
  handleToContinue,
}: AlertDialogBoxComponentProps): JSX.Element {
  return (
    <AlertDialogContentComponent>
      <AlertDialogHeaderComponent>
        <AlertDialogTitleComponent>{title}</AlertDialogTitleComponent>
        <AlertDialogDescriptionComponent>
          {description}
        </AlertDialogDescriptionComponent>
      </AlertDialogHeaderComponent>
      <AlertDialogFooterComponent>
        <AlertDialogCancelComponent>Cancelar</AlertDialogCancelComponent>
        <AlertDialogActionComponent onClick={handleToContinue}>
          Continuar
        </AlertDialogActionComponent>
      </AlertDialogFooterComponent>
    </AlertDialogContentComponent>
  );
}
