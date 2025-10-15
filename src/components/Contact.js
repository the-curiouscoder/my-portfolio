// components/Contact.js
import React, { useState } from 'react';
import Modal from './Modal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mjkaazkj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '', email: '', projectType: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'gullraizhaider2007@gmail.com', gradient: 'from-cyber-cyan to-cyber-gold' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+92 323 7763638', gradient: 'from-neon-pink to-cyber-cyan' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Pakistan , Hafizabad', gradient: 'from-cyber-gold to-neon-pink' }
  ];

 
  return (
    <section id="contact" className="py-20 px-6 bg-cyber-gray relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 gradient-text font-cyber">
          GET IN TOUCH
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-cyber-gold to-cyber-cyan mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-cyber-gold font-cyber">Let's Work Together</h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
             Ready to bring your ideas to life? I’m always excited to collaborate on new projects and turn creative concepts into reality. Together, we can build something impactful and push the boundaries of technology.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <i className={`${info.icon} text-black text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-cyber-gold font-semibold">{info.label}</p>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* Contact Form */}
          <div className="cyber-card p-8 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-gold via-cyber-cyan to-neon-pink"></div>
            <form onSubmit={handleSubmit} className="space-y-6 p-6 m-4 bg-black/40 rounded-lg">
              <div>
                <label className="block text-cyber-gold font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="cyber-input w-full rounded-lg px-3 py-3 text-white text-base focus:border-cyber-gold outline-none transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-cyber-gold font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="cyber-input w-full rounded-lg px-3 py-3 text-white text-base focus:border-cyber-gold outline-none transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-cyber-gold font-semibold mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="cyber-input w-full rounded-lg px-3 py-3 text-white text-base focus:border-cyber-gold bg-black outline-none transition-all duration-300"
                  
                >
                  <option value="" >Select project type</option>
                  <option value="web-app">Web Application</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="data-entry ">Data Entry & File conversion </option>
                  <option value="ui-content-writing">Content Writing and Proofreading </option>

                  <option value="consulting">Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-cyber-gold font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="cyber-input w-full rounded-lg px-3 py-3 text-white text-base focus:border-cyber-gold outline-none transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="cyber-button w-full py-4 rounded-lg text-black font-bold text-lg hover:scale-105 transition-all duration-300"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="text-center">
          <i className="fas fa-check-circle text-cyber-gold text-4xl mb-4"></i>
          <p className="text-white mb-4">Thank you for your message! I'll get back to you soon.</p>
          <button
            onClick={() => setShowModal(false)}
            className="cyber-button px-6 py-2 rounded text-black font-semibold"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;