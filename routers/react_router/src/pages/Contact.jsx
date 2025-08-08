import { Form } from "react-router-dom"

export const contactData = async({request}) => {
    try{
        console.log(request);
        const res = await request.formData();
        console.log(res);
        const data = Object.fromEntries(res);
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

const Contact = ()=> {
    return(
        <div className="container">
        <Form
          method="POST"
          action="/contact"
          className="p-4 mt-5 contact-form border rounded"
          style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#f9f9f9' }}
        >
          <h2 className="text-center mb-4">Contact Us</h2>
  
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              placeholder="Enter your name"
              required
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              name="userEmail"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="userMessage" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="userMessage"
              name="userMessage"
              rows="4"
              placeholder="Type your message"
              required
            ></textarea>
          </div>
  
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </Form>
      </div>
    )
}
export default Contact