import { SignInForm } from 'modules';
import { useParams } from 'react-router';

export const SignInPage = () => {
  const { token } = useParams<{ token: string }>();
  console.log(token);

  return (
    <main>
      <SignInForm />
    </main>
  );
};
