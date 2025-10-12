/* eslint-disable react-refresh/only-export-components */
// Handle Contact Form Data with React Router Form Component & Action
import { Form } from "react-router-dom";

// form to Form component 
// method="POST" 
export const contactData = async ({ request }) => { // retan promise // request obj in mathord call formData
  try {
    const res = await request.formData();
//     console.log(res);
    const data = Object.fromEntries(res); // using object mathord then 1st capital
    console.log(data);
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

export const Contact = () => {
  return (
    <>
      <section className="container ">
        <h2 className="section-common--heading">contact us</h2>
        <p className="section-common--subheading">
          Get in touch with us. We are always here to help you.
        </p>

        <div className="section-contact">
          <div className=" grid grid-two--cols">
            <div className="contact-content">

              <Form method="POST" action="/contact">

                <div className="grid grid-two-cols mb-3">
                  <div>
                    <label htmlFor="username">full name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      placeholder="enter full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      placeholder="abc@thapa.com"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message "
                    cols="30"
                    rows="10"
                    placeholder="we are always here to help you."
                  ></textarea>
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn contact-btn">
                    send message
                  </button>
                </div>
              </Form>
            </div>
            <div className="contact-image">
              <figure>
                <img
                  src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="contact pic"
                  className="contact_image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// "Error: You made a POST request to "/contact" but did not provide an `action` for route "0-4", so there is no way to handle the request."