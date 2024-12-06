import Image, { StaticImageData } from "next/image";

export const EventItem = ({ eventImage }: { eventImage: StaticImageData }) => {
  return (
    <div className="flex justify-between items-start p-4 hover:bg-secondary rounded-md">
      <div className="flex gap-4 items-center">
        <Image
          src={eventImage}
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
          <h4 className="">Product Manager, Donor Experience</h4>
          <p>LaunchGood</p>
        </div>
      </div>

      <div className="flex justify-start text-muted">Feb 2023 –– Present</div>
    </div>
  );
};
