import { TiStar } from 'react-icons/ti';

export const StarRating = ({ rate, count }) => {
  const totalRating = 5;
  const userRateCounting = Math.floor(rate);
  const pluralize = (count, { one, many }) => {
    return `${count} ${count > 1 ? many : one}`;
  };

  return (
    <section className="flex items-center justify-center lg:justify-start text-zinc-900">
      {Array(totalRating)
        .fill('_')
        .map((_, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={
                index <= userRateCounting
                  ? 'transition-colos text-black'
                  : 'transition-colors text-zinc-400'
              }
            >
              <TiStar size="30"></TiStar>
            </button>
          );
        })}

      <span className="ml-4">
        {pluralize(userRateCounting, {
          one: 'Star',
          many: 'Stars',
        })}
      </span>
      <span className="ml-4">({count} Reviews)</span>
    </section>
  );
};
