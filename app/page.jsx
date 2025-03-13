"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telephone",
    description: "06 10 47 36 80",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "contact@visiondigital.fr",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: "29 rue de reigny 89460 Accolay",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Transformer les valeurs du service en libellés lisibles
    const serviceLabels = {
      web: "Développement Web",
      maintenance: "Maintenance",
      seo: "SEO",
    };

    // Préparation des paramètres pour emailjs
    const templateParams = {
      to_email: "contact@visiondigital.fr", // Votre adresse email
      from_name: `${formData.firstname} ${formData.lastname}`,
      from_email: formData.email,
      phone: formData.phone,
      service: serviceLabels[formData.service] || formData.service,
      message: formData.message,
    };

    try {
      // Remplacez ces valeurs par vos clés EmailJS réelles
      await emailjs.send(
        "service_i2lq8bk", // e.g., 'service_abc123'
        "template_bdhhuej", // e.g., 'template_xyz789'
        templateParams,
        "template_bdhhuej" // e.g., 'user_AbCdEf123456'
      );

      setSubmitStatus("success");
      // Réinitialiser le formulaire
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
              <p className="text-white/60">
                Si vous avez un projet en tête et souhaitez travailler avec un
                professionnel engagé, n&apos;hésitez pas à me contacter.
                Ensemble, nous pouvons donner vie à vos idées.
              </p>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-md text-green-500">
                  Votre message a été envoyé avec succès. Je vous recontacterai
                  prochainement.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-md text-red-500">
                  Une erreur s&apos;est produite lors de l&apos;envoi. Veuillez
                  réessayer plus tard ou me contacter directement par email.
                </div>
              )}

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Prénom"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Nom"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* select */}
              <Select
                name="service"
                value={formData.service}
                onValueChange={handleServiceChange}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisir un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choisir un service</SelectLabel>
                    <SelectItem value="web">Développement Web</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Tapez votre message ici."
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* btn */}
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
