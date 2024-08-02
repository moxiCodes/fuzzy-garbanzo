import { MichelinStars } from "../../types";

export const DisplayMichelinStars = ({ stars }: { stars: MichelinStars }) => {
  return (
    <>
      {Array.from(new Array(stars), (_, index) => (
        <img
          key={index}
          src="/michelin-star.png"
          width={24}
          alt="michelin star"
        />
      ))}
    </>
  );
};
