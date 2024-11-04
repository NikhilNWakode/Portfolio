import emailjs from "@emailjs/browser"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const Contact = () => {
    const [formData,setFormData] = useState(
        {
            name: "",
            email: "",
            message:"",
        }
    )

    const [errors,setErrors] = useState({});
    const [isSending,setIsSending] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        let errors = {}
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email){
            errors.email = "Email is required";
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            errors.email = "Email is invalid"
        }
        if (!formData.message) errors.message = "Message is required";

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }else{
            setErrors({});
            setIsSending(true);

            emailjs
               .send(
                "service_qavxbln",
                "template_n47zz9u",
                formData,
                "_kwe2POC4Og0fP7CA",
               )
               .then((response) => {
                    toast.success("Message sent Successfully");
                    setFormData({ name: "", email:"", message:""});
               })
               .catch((error)=>{
                    console.log("Failed...",error);
                    toast.error("Failed to send message. Please try again later")
               })
               .finally(()=>{
                setIsSending(false);
               })
        }
    }
    

  return (
    <div className="p-4 mb-12 lg:w-3/4 w-full mx-auto" id="contact">
    <Toaster />
    <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">Let's Connect</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col lg:flex-row lg:space-x-4">
            <div className="lg:w-1/2 mb-4">
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm text-stone-200 focus:border-stone-400 focus:outline-none placeholder:text-stone-400"
                />
                {errors.name && <p className="text-sm text-rose-800">{errors.name}</p>}
            </div>
            <div className="lg:w-1/2 mb-4">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm text-stone-200 focus:border-stone-400 focus:outline-none placeholder:text-stone-400"
                />
                {errors.email && <p className="text-sm text-rose-800">{errors.email}</p>}
            </div>
        </div>
        <div className="mb-4">
            <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                rows="6"
                className="w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm text-stone-200 focus:border-stone-400 focus:outline-none placeholder:text-stone-400"
            />
            {errors.message && <p className="text-sm text-rose-800">{errors.message}</p>}
        </div>
        <button
            type="submit"
            className={`mb-8 w-full  rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 transition duration-300 ease-in-out ${
                isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
        >
            <div className="flex items-center justify-center gap-2">
                {isSending ? "Sending..." : "Send"}
                <FiSend />
            </div>
        </button>
    </form>
</div>
  )
}


export default Contact;
