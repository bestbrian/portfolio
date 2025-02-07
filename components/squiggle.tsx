export function Squiggle() {
  return (
    <div
      className="
        mx-auto
        w-[4px]
        h-[200px]
        bg-center 
      "
      style={{
        backgroundImage: 'url("/images/squiggle.svg")',
        backgroundSize: "100% auto",
        flex: 100,
      }}
    />
  );
}
