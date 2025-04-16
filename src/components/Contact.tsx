
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Cloud } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { personalInfo } from "@/utils/data"; // Add this import

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5 z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-web3-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-web3-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's discuss your ideas and make them reality!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Card className="glass hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-web3-purple/10">
                  <Mail className="h-5 w-5 text-web3-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">{personalInfo.email}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-web3-purple/10">
                  <Phone className="h-5 w-5 text-web3-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-muted-foreground">{personalInfo.phone}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-web3-purple/10">
                  <MapPin className="h-5 w-5 text-web3-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-web3-purple/10">
                  <Cloud className="h-5 w-5 text-web3-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Cloud Skills</h3>
                  <p className="text-sm text-muted-foreground">AWS, Docker, CI/CD</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="glass hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Let's discuss your next project!</CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm">Name</label>
                      <Input
                        id="name"
                        name="name"
                        className="glass border-web3-purple/20 focus:border-web3-purple"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className="glass border-web3-purple/20 focus:border-web3-purple"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      className="glass border-web3-purple/20 focus:border-web3-purple"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      className="glass border-web3-purple/20 focus:border-web3-purple min-h-[150px]"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-web3-purple to-web3-pink hover:shadow-glow-lg transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
