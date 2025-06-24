import { AmberCircle } from '@/shared/components/AmberCircle.tsx';

export const LeftSide = () => {
  return (
    <div
      className={'flex flex-col flex-[60%] p-5 bg-stone-50'}
      children={
        <>
          <h2
            className={
              'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-green-800'
            }
          >
            <AmberCircle /> Miru
          </h2>
          <div className={'mt-[30%] ml-8 flex flex-col gap-2'}>
            <p className={'text-green-800 text-lg'}>
              안녕하세요, 저는 <strong className={'text-emerald-500'}>Miru</strong> 에요. 🌳
            </p>
            <p className={'text-green-800 text-lg'}>바람 부는 날엔 잠시 기대도 괜찮아요.</p>
            <p className={'text-green-800 text-lg'}>어떤 이야기든, 조용히 들어드릴게요.</p>
            <p className={'text-green-800 text-lg'}>바람 부는 날엔, 누군가에게 기대고 싶죠.</p>
            <p className={'text-green-800 text-lg'}>
              ‘미루’는 당신의 이야기를 조용히 들어주는 심리상담 AI 챗봇입니다.
            </p>
            <p className={'text-green-800 text-lg'}>말하지 못한 감정, 미루와 함께 흘려보내요.</p>
          </div>
        </>
      }
    />
  );
};
