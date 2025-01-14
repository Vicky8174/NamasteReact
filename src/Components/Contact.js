import React from "react";


const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>
                We'd love to hear from you! Whether you have a question about our menu, 
                want to make a reservation, or just want to say hello, feel free to reach out.
            </p>
            <h2>Contact Information</h2>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Email:</strong> contact@holyres.com</p>
            <p><strong>Address:</strong> 123 Foodie Lane, Flavor Town, IND</p>

            <h2>Follow Us</h2>
            <p>
                Stay connected with us on social media:
            </p>
            <ul>
                <li>
                    <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>
                </li>
                <li>
                    <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>
                </li>
                <li>
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
