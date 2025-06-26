import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/Card.tsx';
import { Button } from '@/shared/components/Button.tsx';
import { LoginProvider } from '@/feature/login/api/LoginProvider.enum.ts';
import { login, LoginFormData, LoginSchema } from '@/feature/login/api/Login.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/shared/components/Form.tsx';
import { Input } from '@/shared/components/Input';

export const Login = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const handleForm = async (provider: LoginProvider) => {
    form.setValue('provider', provider);
    const submit = form.handleSubmit(login);
    await submit();
  };

  return (
    <div className={'flex size-full justify-center items-center bg-amber-900'}>
      <Card className="bg-stone-50 text-green-800 bg-center size-3/12 flex flex-col">
        <CardHeader className={'items-center justify-center'}>
          <CardTitle className={'text-green-800'}>접속할 SNS 계정을 선택해주세요.</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form>
              <Input type="hidden" {...form.register('provider')} />
            </form>
          </Form>
        </CardContent>
        <CardFooter className={'flex flex-row flex-1 items-center justify-center w-full gap-10'}>
          <Button
            type={'button'}
            onClick={async () => await handleForm(LoginProvider.NAVER)}
            className="p-0 border-none bg-transparent hover:bg-emerald-500"
          >
            <img src={'src/assets/naver.svg'} alt={'naver'} className={'h-11/12 w-11/12'} />
          </Button>
          <Button
            type={'button'}
            onClick={async () => await handleForm(LoginProvider.KAKAO)}
            className="p-0 border-none bg-transparent hover:bg-amber-300"
          >
            <img src={'src/assets/kakao.svg'} alt={'kakao'} className={'h-11/12 w-11/12'} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
