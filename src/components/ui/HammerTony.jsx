import hammerTony from "../../assets/img/hammertony.gif";

export default function HammerTony() {
  return (
    <div className="position-fixed top-0 start-0 w-100 vh-100">
      <img
        src={hammerTony}
        alt="Caricamento..."
        className="w-100 h-100 object-fit-cover"
      />
    </div>
  );
}