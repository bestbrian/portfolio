import Image, { StaticImageData } from "next/image";

interface EventProps {
  title: string;
  body: string;
  image: StaticImageData;
  timeline: string;
}

export const EventItem = ({ title, body, image, timeline }: EventProps) => {
  return (
    <div className="inline-flex justify-between items-start w-full p-4 hover:bg-secondary rounded-md">
      <div className="flex gap-4 items-center">
        <Image
          src={image}
          alt="alt"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUf8BzDAAEJAHbKoDoHQAAAABJRU5ErkJggg=="
          width={48}
          height={48}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "0.5rem",
          }}
        />
        <div className="flex flex-col">
          <h4 className="font-semibold text-left">{title}</h4>
          <p className="font-normal text-left">{body}</p>
        </div>
      </div>

      <div className="flex justify-start text-muted">{timeline}</div>
    </div>
  );
};
