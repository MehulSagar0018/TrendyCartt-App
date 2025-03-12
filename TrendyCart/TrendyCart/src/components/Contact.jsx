import React from 'react'

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
    // Handle contact form submission logic here
    console.log('Contact form submitted!');
};
  return (
    <div className="container1 bg-primary-light">
  <div style={{ textAlign: "center" }}>
    <h2>Contact Us</h2>
    <p>Swing by for a dress, or leave us a message:</p>
  </div>
  <div className="row">
    <div className="column p-4">
      <img src="https://th.bing.com/th/id/OIP.KRVExBxOOmpULz8SEAH2PgHaEo?w=234&h=180&c=7&r=0&o=5&pid=1.7" style={{ width: "100%" }} />
    </div>
    <div className="column">
      <form action="/action_page.php">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="usa">India</option>
          <option value="usa">Colombia</option>
        </select>
        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: 170 }}
          defaultValue={""}
        />
        <input type="submit" defaultValue="Submit" onClick={handleContact}/>
      </form>
    </div>
  </div>
</div>

  )
}

export default Contact
