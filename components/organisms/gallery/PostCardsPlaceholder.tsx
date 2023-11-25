import PostCardPlaceholder from "../../molecules/gallery/PostCardPlaceholder";

interface PostCardsPlaceholderProps {
  pageSize?: number;
  className?: string;
}

export default function PostCardsPlaceholder(props: PostCardsPlaceholderProps) {
  const { pageSize = 1, className } = props;

  return (
    <div
      className={`w-full flex flex-wrap w-[calc(100%+20px) -mx-2.5 ${className}`}
    >
      {[...Array(pageSize)].map((_, index) => (
        <PostCardPlaceholder key={index} />
      ))}
    </div>
  );
}
