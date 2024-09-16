"use client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Container, Logo } from "@/components/ui";
import axios from "axios";

export default function BuyTicketPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tshirtSize: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simple form validation
  const isFormValid = () => {
    const { name, email, phone, tshirtSize } = formData;
    return name && email && phone && tshirtSize;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate the form
    if (!isFormValid()) {
      setError("Please fill out all fields and select a T-shirt size.");
      return;
    }

    try {
      setIsSubmitting(true);

      const { data } = await axios.post("/api/init-payment", formData);
      window.location.href = data;
    } catch (error: any) {
      setError(
        error?.response?.data ??
          "An error occurred while processing your request."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <nav className="bg-[#0b0c0e4d] py-2.5 backdrop-blur-md relative overflow-hidden">
        <Container className="flex items-center justify-between relative">
          <div className=" absolute inset-y-0 transform left-52 blur-[50px] translate-x-1/2 w-[124px] h-[52px] bg-[#91E10E]/15" />
          <Logo className="h-16" />
          <a
            href="/"
            className="text-white flex items-center text-sm font-medium"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Homepage
          </a>
        </Container>
      </nav>
      <Container className="h-full flex justify-center flex-col py-10 md:py-16 lg:py-20 xl:py-28">
        <div className="max-w-screen-md mx-auto p-5 lg:p-10 bg-[#151517] w-full rounded-lg relative overflow-hidden">
          <div className="absolute left-0 bottom-0 bg-[#8FE114] size-24 blur-[150px]" />
          <div className="absolute right-6 top-8 bg-[#E97227] size-24 blur-[150px]" />

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Fill the information & buy a ticket for the event.{" "}
            <span className="text-gradient">(Ticket Price BDT 1000)</span>
          </h1>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-1">
              <label className="font-medium text-base md:text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="rounded-xl bg-[#1b1b1e] border-[#313137] max-lg:py-1"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 *:w-full">
              <div className="flex flex-col gap-y-1">
                <label className="font-medium text-base md:text-lg">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded-xl bg-[#1b1b1e] border-[#313137] max-lg:py-1"
                  required
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label className="font-medium text-base md:text-lg">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="rounded-xl bg-[#1b1b1e] border-[#313137] max-lg:py-1"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="font-medium text-base md:text-lg">
                T-Shirt Size
              </label>
              <div className="grid grid-cols-3 gap-4">
                {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                  <label
                    key={size}
                    className={`cursor-pointer py-2 max-lg:py-1 px-4 rounded-lg text-center font-medium ${
                      formData.tshirtSize === size
                        ? "bg-[linear-gradient(96deg,#61c604_-34.09%,#df481a_124.84%)] text-white"
                        : "bg-[#1b1b1e] text-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="tshirtSize"
                      value={size}
                      checked={formData.tshirtSize === size}
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end !mt-10">
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Proceed to Payment"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
