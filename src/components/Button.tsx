export default function Button({title, onClick}: {title: string; onClick: () => void}) {
  return (
    <>
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        onClick={onClick}
      >{title}</button>
    </>
  );
}
