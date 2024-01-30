import { TiStar } from 'react-icons/ti';

export const StarRating = () => {
  const stars = Array(4).fill();

  return (
    <ul className="flex gap-1 justify-center">
      {stars.map((index) => {
        return (
          <>
            <li key={index}>
              <TiStar color="#fcd34d" size={20}></TiStar>
            </li>
          </>
        );
      })}
    </ul>
  );
};
