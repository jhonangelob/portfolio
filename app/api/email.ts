import emailjs from '@emailjs/browser';

export const sendEmail = async (form: any) => {
  try {
    const response = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
      form,
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string,
    );
    return response.text;
  } catch (error) {
    console.log(error);
  }
};
