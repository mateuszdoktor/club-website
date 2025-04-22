import Navbar from "./Navbar";

export default function Header() {
  return (
    <div
      style={{
        width: "100%",
        height: "75vh", // lub np. '70vh', '600px' itd.
        backgroundImage: "url(/IMG_2739.JPG)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
    </div>
  );
}
