import { useState } from "react";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { PlanContext } from "../../pages/context/PlanContext.js";

function Contactform() {
  // const { selectedPlan } = useContext(PlanContext);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // useEffect(() => {
  //   if (selectedPlan) {
  //     setFormValues((prevValues) => ({
  //       ...prevValues,
  //       message: selectedPlan,
  //     }));
  //   }
  // }, [selectedPlan]);

  const onChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "dac645cc-2c31-4d5b-a99b-f1ef240c8cd2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success) {
        toast.success("Form submitted successfully!");
        setFormValues({ name: "", email: "", message: "" });
      } else {
        toast.error("Form submission failed!");
      }
    } catch (error) {
      toast.error(`Fetch error: ${error.message}`);
    }
  };

  return (
    <div id="contactus">
      <ToastContainer />
      <section className="vh-150" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-120">
          <div className="row d-flex justify-content-center align-items-center h-120">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={onSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <span className="h1 fw-bold mb-0">
                            Request a Call Back?
                          </span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Contact us
                        </h5>
                        <div
                          data-mdb-input-init
                          className="form-outline-black mb-4"
                        >
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            value={formValues.name}
                            onChange={onChange}
                          />
                        </div>
                        <div
                          data-mdb-input-init
                          className="form-outline-black mb-4"
                        >
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            value={formValues.email}
                            onChange={onChange}
                          />
                        </div>
                        <div
                          data-mdb-input-init
                          className="form-outline-black mb-4"
                        >
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Message
                          </label>
                          <textarea
                            type="text"
                            name="message"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            value={formValues.message}
                            onChange={onChange}
                          />
                        </div>
                        <div className="pt-1 mb-6">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-dark btn-lg btn-block mb-6"
                            type="Submit"
                          >
                            Submit
                          </button>
                        </div>
                        {/* <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactform;
