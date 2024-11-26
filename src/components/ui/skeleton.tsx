import { cn } from '@/shared/libs';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-neutral-100', className)}
      {...props}
    />
  );
}

export { Skeleton as SkeletonComponent };
