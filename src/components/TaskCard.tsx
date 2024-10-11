'use client';

export default function TaskCard({ title }: { title: string }) {
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input task-check"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          <a href="#" className="taskLink">{title}</a> 
        </label>
      </div>
    </>
  );
}
