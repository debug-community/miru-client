import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/Card.tsx';
import { Button } from '@/shared/components/Button.tsx';
import { LoginProvider } from '@/feature/login/api/LoginProvider.enum.ts';
import { LoginFormData, LoginSchema } from '@/feature/login/api/Login.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const Login = () => {
  const naverForm = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      provider: LoginProvider.NAVER,
    },
  });

  const kakaoForm = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      provider: LoginProvider.KAKAO,
    },
  });

  return (
    <div className={'flex size-full justify-center items-center bg-amber-900'}>
      <Card className="bg-stone-50 text-green-800 bg-center size-3/12 flex flex-col">
        <CardHeader className={'items-center justify-center'}>
          <CardTitle className={'text-green-800'}>접속할 SNS 계정을 선택해주세요.</CardTitle>
        </CardHeader>
        <CardContent className={'flex flex-row flex-1 items-center justify-center w-full gap-10'}>
          <Button type={'submit'} className="p-0 border-none bg-transparent hover:bg-emerald-500">
            <img src={'src/assets/naver.svg'} alt={'naver'} className={'h-11/12 w-11/12'}></img>
          </Button>
          <Button type={'submit'} className="p-0 border-none bg-transparent hover:bg-amber-300">
            <img src={'src/assets/kakao.svg'} alt={'kakao'} className={'h-11/12 w-11/12'}></img>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
