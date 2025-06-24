import { RightClickButtons } from '@/feature/intro/components/RightClickButtons.tsx';

export const RightSide = () => {
  return (
    <div
      className={'flex flex-col flex-[40%] bg-amber-900 justify-center items-center'}
      children={
        <>
          <p className={'text-stone-50 text-3xl font-bold'}>그늘이 되어줄게요. 언제든 쉬어가요.</p>
          <div className={'flex mt-4'} children={<RightClickButtons />} />
        </>
      }
    />
  );
};
