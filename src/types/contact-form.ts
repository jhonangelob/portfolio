import { SetStateAction } from 'react';

export type ContactForm = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  contactForm: React.Ref<HTMLFormElement>;
  setName: React.Dispatch<SetStateAction<string>>;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  setMessage: React.Dispatch<SetStateAction<string>>;
  isSendButtonDisabled: boolean;
  isEmailValid: boolean;
  emailAddress: string;
  sending: boolean;
};
