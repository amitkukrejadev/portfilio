"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Linkedin, Github, Users, Loader2, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", message: "" })
      }, 3000)
    }, 1500)

    // In a real implementation, you would use EmailJS or a similar service:
    // try {
    //   await emailjs.send(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     formData,
    //     'YOUR_PUBLIC_KEY'
    //   );
    //   setIsSubmitting(false);
    //   setIsSubmitted(true);
    //   toast({
    //     title: "Message sent!",
    //     description: "Thank you for your message. I'll get back to you soon.",
    //   });
    // } catch (error) {
    //   setIsSubmitting(false);
    //   toast({
    //     title: "Error",
    //     description: "There was an error sending your message. Please try again.",
    //     variant: "destructive",
    //   });
    // }
  }

  return (
    <div className="bg-white dark:bg-gray-950">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">amitkukrejadev@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Mumbai, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/amitkukrejadev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      linkedin.com/in/amitkukrejadev
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">GitHub</p>
                    <a
                      href="https://github.com/amitkukrejadev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      github.com/amitkukrejadev
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Peerlist</p>
                    <a
                      href="https://peerlist.io/iamamitkukreja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      peerlist.io/iamamitkukreja
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Availability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm currently available for freelance work, internships, and full-time positions. I'm particularly
                  interested in roles that involve React, Next.js, and Node.js development.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="dark:border-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="dark:border-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="dark:border-gray-700"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    "Submit Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
