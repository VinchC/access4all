import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      {/* destination of the skip navigation link */}
    <main id="maincontent">

      <h1 id="parent">To do list</h1>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Skip navigation link</label>
      </div>


      <ul>
        <li>Checkbox for tasks done</li>
        <li>Change the size of the element</li>
        <li>Slider</li>
        <li>Day / night mode</li>
        <li>SearchBar</li>
        <li>Card that will display content on user action</li>
        <li>Install the package Pa11y</li>
        <li>Contact form</li>
        <li>Signin form</li>
        <li>Agenda?</li>
      </ul>

      <h2></h2>

      <h3></h3>

      <section>
        <article>
          <h4></h4>
          <p></p>
        </article>
      </section>
    </main>
    </>
  );
}
