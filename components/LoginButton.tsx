import { useSession } from 'next-auth/react';

const LoginButton: FC<Props> = () => {
  const { data: session } = useSession();

  if (session) {
    return <button>Logout</button>;
  }

  return <button>Login</button>;
};

export default LoginButton;
