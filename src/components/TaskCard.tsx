'use client';

export default function TaskCard({ title }: { title: string }) {
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {title}
        </label>
      </div>
    </>
  );
}
