import profileImg from "../../assets/images/profile.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-bold text-5xl">Knowledge Cafe</h2>
      <figure>
        <img src={profileImg} alt="" />
      </figure>
    </div>
  )
}